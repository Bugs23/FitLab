import { useState } from 'react'
import { generateWorkout } from './utils/workoutGenerator'
import Hero from './components/Hero'
import Generator from './components/Generator'
import Workout from './components/Workout'
import Footer from './components/Footer'

function App() {
  const [workout, setWorkout] = useState(null)
  const [split, setSplit] = useState("individual_muscles")
  const [muscles, setMuscles] = useState([])
  const [goal, setGoal] = useState(["strength_power"])
  const [formulating, setFormulating] = useState(false)

  function updateWorkout() {
    // If the button's clicked and no muscles have been selected (the length of the array is 0), don't generate a new workout
    if (muscles.length < 1) {
      return
    }

    // Set formulating to true to show spinner
    setFormulating(true)

    let newWorkout = generateWorkout({split, muscles, goal})
    console.log(newWorkout)

    setWorkout(newWorkout)

    // Delay the scroll to workout to give time for workout to generate and then set formulating to false so the spinner goes away
    setTimeout(() => {
      window.location.href = "#workout"
      setFormulating(false)
    }, 1000)
  }

  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-r bg-neutral-900 text-white text-sm sm:text-base">
      <Hero />
      <Generator 
        split={split}
        setSplit={setSplit}
        muscles={muscles}
        setMuscles={setMuscles}
        goal={goal}
        setGoal={setGoal}
        updateWorkout={updateWorkout}
        formulating={formulating}
      />
      {/* Only render the workout section if workout state exists */}
      {workout && <Workout workout={workout} />}
      <Footer />
    </main>
  )
}

export default App
