import { createSlice } from "@reduxjs/toolkit"

interface ThemeState {
  mode: "light" | "dark"
}

// Load theme from localStorage if available
const loadInitialTheme = (): ThemeState => {
  if (typeof window !== "undefined") {
    const saved = localStorage.getItem("theme-mode")
    if (saved === "light" || saved === "dark") {
      return { mode: saved }
    }
  }
  return { mode: "light" }
}

const initialState: ThemeState = loadInitialTheme()

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light"
      if (typeof window !== "undefined") {
        localStorage.setItem("theme-mode", state.mode)
      }
    },
  },
})

export const { toggleTheme } = themeSlice.actions

// Selectors
export const selectTheme = (state: { theme: ThemeState }) => state.theme.mode

export default themeSlice.reducer
