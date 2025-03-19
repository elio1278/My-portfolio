import React from 'react'

export default function GlobalAnimations() {
  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {/* Highlight bar */}
      <div className="highlight-bar w-full"></div>
      
      {/* Floating arrows */}
      <div className="floating-arrows">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}
