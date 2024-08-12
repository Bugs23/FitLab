import React from 'react'
import Button from './Button'

export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col gap-8 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4">
      <div className="flex flex-col gap-2">
        <p>Design your perfect workout routine. Anytime. Anywhere.</p>
        <h1 className="font-semibold text-5xl sm:text-6xl md:text-7xl lg:text-8xl">Fit<span className="text-blue-400">Lab</span></h1>
      </div>
      <p className="text-sm md:text-base font-light">Welcome to FitLab, your ultimate fitness companion. Whether you're a seasoned athlete or just starting your fitness journey, FitLab empowers you to create customized workout routines tailored to your goals. With easy-to-use tools, expert guidance, and a community of fitness enthusiasts, achieving your fitness dreams has never been more accessible. Dive in and start crafting the perfect workout plan today!</p>
      <Button func={() => window.location.href = "#generate"} text="Get Started" />
    </div>
  )
}
