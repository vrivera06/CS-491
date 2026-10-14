import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [likes, setLikes] = useState(0)

  const courses = [
    { name: 'CS 491', text: 'React, React Router, Bootstrap and Lottie' },
    { name: 'CS 361', text: 'Software engineering' },
    { name: 'CS 371', text: 'Systems and networks' },
  ]

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Hi, I'm Victor</h1>
          <p>
            This is my first Vite + React app for CS 491. I replaced the default
            starter page with my own content.
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setLikes((likes) => likes + 1)}
        >
          👍 Likes: {likes}
        </button>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <h2>My courses</h2>
          <p>What I'm working on this semester</p>
          <ul>
            {courses.map((course) => (
              <li key={course.name}>
                <strong>{course.name}</strong>: {course.text}
              </li>
            ))}
          </ul>
        </div>
        <div id="social">
          <h2>Find me</h2>
          <p>All my class projects live here</p>
          <ul>
            <li>
              <a href="https://github.com/vrivera06/CS-491" target="_blank">
                <svg className="button-icon" role="presentation" aria-hidden="true">
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
