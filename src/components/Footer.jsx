import React from 'react'

export default function Footer() {
    return (
        <footer className="text-center py-10 mt-20 text-neutral-400 bg-neutral-900">
            <p><span className="text-white">&copy;</span> {new Date().getFullYear()} <a href="https://raymondurrutia.com/" className="text-white underline decoration-red-400 font-medium hover:decoration-red-600 transition duration-500" target="_blank">Raymond Urrutia</a></p>
        </footer>
    )
}
