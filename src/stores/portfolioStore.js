import { defineStore } from "pinia";
import { loadPortfolioData } from "@/data/dataLoader";

const initialData = loadPortfolioData();

export const usePortfolioStore = defineStore("portfolio", {
  state: () => ({
    locale: localStorage.getItem("locale") || "en", // default to English
    theme: localStorage.getItem("theme") || "light",
    activeSection: "hero",
    projectFilter: "all",
    activeSkillCategory: "languages",

    skillCategoriesList: initialData.skillCategoriesList,
    en: initialData.en,
    vi: initialData.vi,
  }),

  getters: {
    personal: (state) => state[state.locale].personal,
    stats: (state) => state[state.locale].stats,
    whatIBuild: (state) => state[state.locale].whatIBuild || [],
    projects: (state) => state[state.locale].projects,
    experiences: (state) => state[state.locale].experiences,
    education: (state) => state[state.locale].education,
    academicFocus: (state) => state[state.locale].academicFocus,
    ui: (state) => state[state.locale].ui,
    presetSubjects: (state) => state[state.locale].ui.presetSubjects || [],

    skillCategories: (state) => {
      return state.skillCategoriesList.map((cat) => ({
        id: cat.id,
        label: cat.labels[state.locale] || cat.labels.en,
        icon: cat.icon,
        skills: cat.skills,
      }));
    },

    filteredProjects: (state) => {
      const projectsList = state[state.locale].projects;
      if (state.projectFilter === "all") return projectsList;
      return projectsList.filter((p) => p.category === state.projectFilter);
    },

    activeSkills() {
      const cat = this.skillCategories.find(
        (c) => c.id === this.activeSkillCategory
      );
      return cat ? cat.skills : [];
    },
  },

  actions: {
    setLocale(loc) {
      this.locale = loc;
      localStorage.setItem("locale", loc);
    },
    setTheme(mode) {
      this.theme = mode;
      localStorage.setItem("theme", mode);
      document.documentElement.classList.toggle("light", mode === "light");
    },
    toggleTheme() {
      this.setTheme(this.theme === "dark" ? "light" : "dark");
    },
    setProjectFilter(filter) {
      this.projectFilter = filter;
    },
    setActiveSkillCategory(id) {
      this.activeSkillCategory = id;
    },
    setActiveSection(section) {
      this.activeSection = section;
    },
    reloadPortfolioData() {
      const freshData = loadPortfolioData();
      this.skillCategoriesList = freshData.skillCategoriesList;
      this.en = freshData.en;
      this.vi = freshData.vi;
    }
  },
});
