import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router'
import { Lottie } from 'lottie-react'
import bouncingDots from './assets/bouncing-dots.json'
import './App.css'

function Home() {
  return (
    <div className="row align-items-center g-4">
      <div className="col-md-6">
        <h2 className="display-5 fw-bold">Home</h2>
        <p className="lead">
          A React Router demo styled with Bootstrap and animated with Lottie.
        </p>
        <Link to="/contact" className="btn btn-primary btn-lg">Contact me</Link>
      </div>
      <div className="col-md-6">
        <div className="lottie-hero"><Lottie src={bouncingDots} autoplay loop /></div>
      </div>
    </div>
  )
}

function About() {
  const topics = [
    { title: 'React Router', text: 'Client-side routing with Routes, Route, Link and NavLink.' },
    { title: 'Bootstrap', text: 'Navbar, grid, cards, list groups and forms.' },
    { title: 'Lottie', text: 'JSON-based animations rendered with lottie-react.' },
  ]

  return (
    <div>
      <h2 className="mb-4">About</h2>
      <div className="row g-4">
        {topics.map((topic) => (
          <div className="col-md-4" key={topic.title}>
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{topic.title}</h5>
                <p className="card-text">{topic.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function Users() {
  const users = ['Michael Scott', 'Dwight Schrute', 'Jim Halpert', 'Pam Beesly']

  return (
    <div>
      <h2 className="mb-4">Users</h2>
      <ul className="list-group">
        {users.map((user) => (
          <li className="list-group-item d-flex justify-content-between align-items-center" key={user}>
            {user}
            <span className="badge text-bg-primary rounded-pill">active</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

// New page added for this assignment
function Contact() {
  const [name, setName] = useState('')
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSent(true)
  }

  if (sent) {
    return (
      <div className="text-center">
        <div className="lottie-small mx-auto"><Lottie src={bouncingDots} autoplay loop /></div>
        <div className="alert alert-success">Thanks, {name}! Your message was sent.</div>
        <button className="btn btn-outline-secondary" onClick={() => { setSent(false); setName('') }}>
          Send another
        </button>
      </div>
    )
  }

  return (
    <div className="col-md-8 col-lg-6 mx-auto">
      <h2 className="mb-4">Contact</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input id="name" className="form-control" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input id="email" type="email" className="form-control" required />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea id="message" className="form-control" rows="4" required />
        </div>
        <button type="submit" className="btn btn-primary">Send</button>
      </form>
    </div>
  )
}

function NoMatch() {
  return (
    <div className="text-center">
      <h3>404: Page not found</h3>
      <Link to="/" className="btn btn-link">Go home</Link>
    </div>
  )
}

function App() {
  const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/users', label: 'Users' },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <Router>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">Router Demo</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav" aria-controls="nav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="nav">
            <ul className="navbar-nav ms-auto">
              {links.map((link) => (
                <li className="nav-item" key={link.to}>
                  <NavLink className="nav-link" to={link.to} end>{link.label}</NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      <main className="container py-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App
