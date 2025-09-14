"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { useAppDispatch, useAppSelector } from "@/lib/hooks"
import {
  increment,
  decrement,
  reset,
  clearHistory,
  setStep,
  incrementByStep,
  selectCounter,
  selectHistory,
  selectStep,
} from "@/lib/features/counter/counterSlice"
import { toggleTheme, selectTheme } from "@/lib/features/theme/themeSlice"
import { Plus, Minus, RotateCcw, Trash2, Sun, Moon, Zap } from "lucide-react"

export function Counter() {
  const dispatch = useAppDispatch()
  const count = useAppSelector(selectCounter)
  const history = useAppSelector(selectHistory)
  const step = useAppSelector(selectStep)
  const theme = useAppSelector(selectTheme)

  const [customStep, setCustomStep] = useState("")

  const handleCustomIncrement = () => {
    const stepValue = Number.parseInt(customStep)
    if (!isNaN(stepValue) && stepValue > 0) {
      dispatch(incrementByStep(stepValue))
      setCustomStep("")
    }
  }

  const handleStepChange = (newStep: number) => {
    if (newStep > 0) {
      dispatch(setStep(newStep))
    }
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${theme === "dark" ? "dark" : ""}`}>
      <div className="container mx-auto p-6 max-w-2xl">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-balance">Redux Counter</h1>
            <p className="text-muted-foreground mt-2">A counter with history tracking and Redux state management</p>
          </div>
          <Button variant="outline" size="icon" onClick={() => dispatch(toggleTheme())} className="ml-4">
            {theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
          </Button>
        </div>

        <Card className="mb-6">
          <CardHeader className="text-center">
            <CardTitle className="text-6xl font-mono font-bold text-primary">{count}</CardTitle>
            <CardDescription>Current counter value</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Main Counter Controls */}
            <div className="flex justify-center gap-3">
              <Button onClick={() => dispatch(decrement())} size="lg" variant="outline" className="flex-1 max-w-32">
                <Minus className="h-4 w-4 mr-2" />-{step}
              </Button>
              <Button onClick={() => dispatch(reset())} size="lg" variant="secondary" className="flex-1 max-w-32">
                <RotateCcw className="h-4 w-4 mr-2" />
                Reset
              </Button>
              <Button onClick={() => dispatch(increment())} size="lg" className="flex-1 max-w-32">
                <Plus className="h-4 w-4 mr-2" />+{step}
              </Button>
            </div>

            <Separator />

            {/* Step Controls */}
            <div className="space-y-3">
              <div className="text-sm font-medium text-center">Step Size: {step}</div>
              <div className="flex justify-center gap-2">
                {[1, 5, 10].map((stepValue) => (
                  <Button
                    key={stepValue}
                    onClick={() => handleStepChange(stepValue)}
                    variant={step === stepValue ? "default" : "outline"}
                    size="sm"
                  >
                    {stepValue}
                  </Button>
                ))}
              </div>
            </div>

            <Separator />

            {/* Custom Step Increment */}
            <div className="space-y-3">
              <div className="text-sm font-medium text-center">Custom Increment</div>
              <div className="flex gap-2">
                <Input
                  type="number"
                  placeholder="Enter amount"
                  value={customStep}
                  onChange={(e) => setCustomStep(e.target.value)}
                  className="flex-1"
                  min="1"
                />
                <Button
                  onClick={handleCustomIncrement}
                  disabled={!customStep || isNaN(Number.parseInt(customStep)) || Number.parseInt(customStep) <= 0}
                >
                  <Zap className="h-4 w-4 mr-2" />
                  Add
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* History Section */}
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle>Counter History</CardTitle>
                <CardDescription>Track of all counter changes ({history.length} entries)</CardDescription>
              </div>
              <Button
                onClick={() => dispatch(clearHistory())}
                variant="destructive"
                size="sm"
                disabled={history.length <= 1}
              >
                <Trash2 className="h-4 w-4 mr-2" />
                Clear History
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            {history.length > 0 ? (
              <div className="flex flex-wrap gap-2 max-h-48 overflow-y-auto">
                {history.map((value, index) => (
                  <Badge
                    key={index}
                    variant={index === history.length - 1 ? "default" : "outline"}
                    className="text-sm text-foreground"
                  >
                    {index === 0 ? "Start" : `Step ${index}`}: {value}
                  </Badge>
                ))}
              </div>
            ) : (
              <p className="text-muted-foreground text-center py-4">No history available</p>
            )}
          </CardContent>
        </Card>

        {/* Stats */}
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="p-4 bg-muted rounded-lg">
            <div className="text-2xl font-bold text-foreground">{count}</div>
            <div className="text-sm text-muted-foreground">Current Value</div>
          </div>
          <div className="p-4 bg-muted rounded-lg">
            <div className="text-2xl font-bold text-foreground">{history.length}</div>
            <div className="text-sm text-muted-foreground">Total Changes</div>
          </div>
          <div className="p-4 bg-muted rounded-lg">
            <div className="text-2xl font-bold text-foreground">{history.length > 0 ? Math.max(...history) : 0}</div>
            <div className="text-sm text-muted-foreground">Highest Value</div>
          </div>
          <div className="p-4 bg-muted rounded-lg">
            <div className="text-2xl font-bold text-foreground">{history.length > 0 ? Math.min(...history) : 0}</div>
            <div className="text-sm text-muted-foreground">Lowest Value</div>
          </div>
        </div>
      </div>
    </div>
  )
}
