import React from 'react'

export default function Comment({ size = "1em" }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M23.75 23.05L22.35 17.55C23.25 15.9 23.75 14 23.75 12C23.75 5.5 18.5 0.25 12 0.25C5.5 0.25 0.25 5.5 0.25 12C0.25 18.5 5.5 23.75 12 23.75C14 23.75 15.9 23.25 17.55 22.35L23.05 23.75C23.45 23.85 23.85 23.45 23.75 23.05ZM22.25 12C22.25 14 21.75 15.5 20.95 17C20.85 17.2 20.8 17.45 20.85 17.7L21.9 21.9L17.75 20.85C17.5 20.8 17.25 20.8 17.05 20.95C16.15 21.45 14.45 22.25 12.05 22.25C6.35 22.25 1.75 17.65 1.75 12C1.75 6.35 6.35 1.75 12 1.75C17.65 1.75 22.25 6.35 22.25 12Z" fill="currentColor" />
        </svg>
    )
}
