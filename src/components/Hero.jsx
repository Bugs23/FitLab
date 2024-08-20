import React from 'react'
import Button from './Button'

export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col gap-8 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4">
      <div className="flex flex-col gap-2">
        <p>Design your perfect workout routine. Anytime. Anywhere.</p>
        <h1 className="font-semibold text-7xl lg:text-8xl">Fit<span className="text-red-600">Lab</span></h1>
      </div>
      <p className="text-md lg:text-xl font-light text-neutral-400">Welcome to FitLab, your ultimate fitness companion. Whether you're a seasoned athlete or just starting your fitness journey, FitLab empowers you to create customized workout routines tailored to your goals.</p>
      <Button func={() => window.location.href = "#generate"} icon={<i class="fa-solid fa-angle-down"></i>} text="Get Started" />
    </div>
  )
}
