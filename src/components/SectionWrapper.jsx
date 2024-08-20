import React from 'react'

export default function SectionWrapper({children, header, title, sectionId}) {
  return (
    <section id={sectionId} className="min-h-screen flex flex-col gap-10">
        <div className="bg-neutral-900 py-10 flex flex-col gap-2 justify-center items-center p-4">
            <p className="font-medium capitalize">{header}</p>
            <h2 className="font-semibold text-5xl lg:text-6xl">{title[0]}<span className="text-red-600">{title[1]}</span></h2>
        </div>
        <div className="max-w-[800px] w-full flex flex-col mx-auto gap-10 p-4">
          {children}
        </div>
    </section>

  )
}
