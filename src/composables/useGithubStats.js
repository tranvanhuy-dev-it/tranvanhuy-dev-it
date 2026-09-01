import { ref, onMounted } from 'vue'

const GITHUB_USERNAME = 'tranvanhuy-dev-it'
const CACHE_KEY = 'github_stats_cache_v2'
const CACHE_EXPIRY = 30 * 60 * 1000 // 30 minutes

export function useGithubStats() {
  const loading = ref(true)
  const error = ref(null)
  const stats = ref({
    publicRepos: 15,
    totalStars: 2,
    followers: 0,
    following: 0,
    topLanguages: [
      { name: 'C#', percent: 33, color: '#178600' },
      { name: 'Java', percent: 20, color: '#b07219' },
      { name: 'Vue', percent: 20, color: '#41b883' },
      { name: 'JavaScript', percent: 13, color: '#f1e05a' },
      { name: 'Python', percent: 7, color: '#3572A5' }
    ],
    recentEvents: [
      {
        id: '1',
        repo: 'tranvanhuy-dev-it/tranvanhuy-dev-it',
        message: 'feat: implement modular project structure with auto-image scanner & live github stats',
        time: 'Just now',
        type: 'PushEvent'
      },
      {
        id: '2',
        repo: 'tranvanhuy-dev-it/QLPT_JAVA_BE',
        message: 'feat: optimize WebSocket real-time messaging & billing batch queries',
        time: 'Recent',
        type: 'PushEvent'
      },
      {
        id: '3',
        repo: 'tranvanhuy-dev-it/SonTraHealthManagement',
        message: 'feat: add PostGIS geospatial boundary queries and UI responsive map',
        time: 'Recent',
        type: 'PushEvent'
      }
    ]
  })

  async function fetchStats() {
    try {
      // Check cache first
      const cached = localStorage.getItem(CACHE_KEY)
      if (cached) {
        try {
          const parsed = JSON.parse(cached)
          if (Date.now() - parsed.timestamp < CACHE_EXPIRY) {
            stats.value = parsed.data
            loading.value = false
            return
          }
        } catch (e) {}
      }

      loading.value = true

      // Fetch user profile and repos in parallel
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
        // Calculate stars & languages
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
          C: '#555555'
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

        // Parse recent push events
        const parsedEvents = []
        if (Array.isArray(eventsData)) {
          for (const ev of eventsData) {
            if (ev.type === 'PushEvent') {
              const commitMsg = ev.payload?.commits?.[0]?.message || 'Repository code update'
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
          topLanguages: topLangs.length > 0 ? topLangs : stats.value.topLanguages,
          recentEvents: parsedEvents.length > 0 ? parsedEvents : stats.value.recentEvents
        }

        stats.value = computedStats

        // Save to cache
        localStorage.setItem(
          CACHE_KEY,
          JSON.stringify({
            timestamp: Date.now(),
            data: computedStats
          })
        )
      }
    } catch (err) {
      console.warn('GitHub API fetch fallback', err)
      error.value = err
    } finally {
      loading.value = false
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
    error,
    refresh: fetchStats
  }
}
