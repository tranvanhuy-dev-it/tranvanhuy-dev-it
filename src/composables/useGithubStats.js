import { ref, onMounted } from 'vue'

const GITHUB_USERNAME = 'tranvanhuy-dev-it'
const CACHE_KEY = 'github_stats_cache_v3'
const CACHE_EXPIRY = 10 * 60 * 1000 // 10 minutes cache

export function useGithubStats() {
  const loading = ref(true)
  const isRefreshing = ref(false)
  const error = ref(null)
  const lastUpdated = ref(null)

  const stats = ref({
    publicRepos: 0,
    totalStars: 0,
    followers: 0,
    following: 0,
    topLanguages: [],
    recentEvents: []
  })

  async function fetchStats(forceRefresh = false) {
    try {
      if (forceRefresh) {
        isRefreshing.value = true
        localStorage.removeItem(CACHE_KEY)
      } else {
        // Check cache first
        const cached = localStorage.getItem(CACHE_KEY)
        if (cached) {
          try {
            const parsed = JSON.parse(cached)
            if (Date.now() - parsed.timestamp < CACHE_EXPIRY) {
              stats.value = parsed.data
              lastUpdated.value = new Date(parsed.timestamp).toLocaleTimeString()
              loading.value = false
              return
            }
          } catch (e) {}
        }
      }

      loading.value = true

      // Fetch user profile, repos, and public events directly from GitHub REST API
      const [userRes, reposRes, eventsRes] = await Promise.allSettled([
        fetch(`https://api.github.com/users/${GITHUB_USERNAME}`),
        fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=pushed`),
        fetch(`https://api.github.com/users/${GITHUB_USERNAME}/events/public?per_page=15`)
      ])

      let userData = null
      if (userRes.status === 'fulfilled' && userRes.value.ok) {
        userData = await userRes.value.json()
      }

      let reposData = []
      if (reposRes.status === 'fulfilled' && reposRes.value.ok) {
        reposData = await reposRes.value.json()
      }

      let eventsData = []
      if (eventsRes.status === 'fulfilled' && eventsRes.value.ok) {
        eventsData = await eventsRes.value.json()
      }

      if (userData || (Array.isArray(reposData) && reposData.length > 0)) {
        // Calculate stars & language distribution dynamically
        let stars = 0
        const langCounts = {}
        let totalLangRepos = 0

        if (Array.isArray(reposData)) {
          reposData.forEach(repo => {
            if (!repo.fork) {
              stars += (repo.stargazers_count || 0)
              if (repo.language) {
                langCounts[repo.language] = (langCounts[repo.language] || 0) + 1
                totalLangRepos++
              }
            }
          })
        }

        const languageColors = {
          'C#': '#178600',
          Java: '#b07219',
          Vue: '#41b883',
          TypeScript: '#3178c6',
          JavaScript: '#f1e05a',
          Python: '#3572A5',
          HTML: '#e34c26',
          CSS: '#563d7c',
          'C++': '#f34b7d',
          C: '#555555',
          PHP: '#4F5D95',
          Dart: '#00B4AB'
        }

        const topLangs = Object.keys(langCounts)
          .map(name => ({
            name,
            count: langCounts[name],
            percent: Math.round((langCounts[name] / (totalLangRepos || 1)) * 100),
            color: languageColors[name] || '#06b6d4'
          }))
          .sort((a, b) => b.count - a.count)
          .slice(0, 5)

        // Parse real recent push events from GitHub
        const parsedEvents = []
        if (Array.isArray(eventsData)) {
          for (const ev of eventsData) {
            if (ev.type === 'PushEvent') {
              const commitMsg = ev.payload?.commits?.[0]?.message || 'Update repository codebase'
              parsedEvents.push({
                id: ev.id,
                repo: ev.repo?.name || 'repo',
                message: commitMsg.split('\n')[0],
                time: formatRelativeTime(ev.created_at),
                type: 'PushEvent'
              })
              if (parsedEvents.length >= 4) break
            }
          }
        }

        const computedStats = {
          publicRepos: userData?.public_repos !== undefined ? userData.public_repos : reposData.length,
          totalStars: stars,
          followers: userData?.followers !== undefined ? userData.followers : 0,
          following: userData?.following !== undefined ? userData.following : 0,
          topLanguages: topLangs,
          recentEvents: parsedEvents
        }

        stats.value = computedStats
        lastUpdated.value = new Date().toLocaleTimeString()

        // Cache result
        localStorage.setItem(
          CACHE_KEY,
          JSON.stringify({
            timestamp: Date.now(),
            data: computedStats
          })
        )
      }
    } catch (err) {
      console.warn('GitHub API fetch failed:', err)
      error.value = err
    } finally {
      loading.value = false
      isRefreshing.value = false
    }
  }

  function formatRelativeTime(dateString) {
    if (!dateString) return 'Recent'
    const date = new Date(dateString)
    const now = new Date()
    const diffHours = Math.floor((now - date) / (1000 * 60 * 60))
    if (diffHours < 1) return 'Just now'
    if (diffHours < 24) return `${diffHours}h ago`
    const diffDays = Math.floor(diffHours / 24)
    if (diffDays === 1) return 'Yesterday'
    if (diffDays < 30) return `${diffDays}d ago`
    return date.toLocaleDateString()
  }

  onMounted(() => {
    fetchStats()
  })

  return {
    stats,
    loading,
    isRefreshing,
    error,
    lastUpdated,
    refresh: () => fetchStats(true)
  }
}
