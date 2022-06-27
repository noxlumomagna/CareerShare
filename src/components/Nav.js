import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Nav.css"

function Nav() {
    const [state, setState] = useState(false)
    return (
        <nav>
            <div className="nav-links">
                <Link to="/"> CareerShare</Link>
                <Link to="/templates">Builder</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/about"> About</Link>
            </div>
            <div className='nav-toggle-btn' onClick={() => setState(!state)}>
                <i className='bi bi-list'></i>
            </div>
            <div className="nav-toggle-links" style={{
                transform: state ? "translateY(0)" : "translateY(-30px)",
                visibility: state ? "visible":"hidden",
            }}>
                <Link to="/"><i className='bi bi-house-fill'></i> Home</Link>
                <Link to="/templates"><i className='bi bi-file-fill'></i> Builder</Link>
                <Link to="/contact"><i className='bi bi-phone-fill'></i> Contact</Link>
                <Link to="/about"> About</Link>
            </div>
        </nav>
    )
}

export default Nav
