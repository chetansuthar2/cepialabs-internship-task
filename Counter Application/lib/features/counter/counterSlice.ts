import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

interface CounterState {
  value: number
  history: number[]
  step: number
}

// Load initial state from localStorage if available
const loadInitialState = (): CounterState => {
  if (typeof window !== "undefined") {
    const saved = localStorage.getItem("counter-state")
    if (saved) {
      try {
        return JSON.parse(saved)
      } catch {
        // If parsing fails, return default state
      }
    }
  }
  return {
    value: 0,
    history: [0],
    step: 1,
  }
}

const initialState: CounterState = loadInitialState()

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += state.step
      state.history.push(state.value)
      saveToLocalStorage(state)
    },
    decrement: (state) => {
      state.value -= state.step
      state.history.push(state.value)
      saveToLocalStorage(state)
    },
    reset: (state) => {
      state.value = 0
      state.history.push(0)
      saveToLocalStorage(state)
    },
    clearHistory: (state) => {
      state.history = [state.value]
      saveToLocalStorage(state)
    },
    setStep: (state, action: PayloadAction<number>) => {
      state.step = action.payload
      saveToLocalStorage(state)
    },
    incrementByStep: (state, action: PayloadAction<number>) => {
      state.value += action.payload
      state.history.push(state.value)
      saveToLocalStorage(state)
    },
  },
})

// Helper function to save state to localStorage
const saveToLocalStorage = (state: CounterState) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("counter-state", JSON.stringify(state))
  }
}

export const { increment, decrement, reset, clearHistory, setStep, incrementByStep } = counterSlice.actions

// Selectors
export const selectCounter = (state: { counter: CounterState }) => state.counter.value
export const selectHistory = (state: { counter: CounterState }) => state.counter.history
export const selectStep = (state: { counter: CounterState }) => state.counter.step

export default counterSlice.reducer
