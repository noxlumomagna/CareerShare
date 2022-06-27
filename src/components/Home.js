import React from 'react'
import "./Home.css"
import { Link } from 'react-router-dom'
function Home() {
    return (
        <div className="home">
            <div className="intro">
                <h1>CareerShare</h1>
                <h2>
                    Show The World What You're Made Of
                </h2>
                <Link to="/build/getting-started"><button>Build Your Story</button>
                </Link>
            </div>
        </div>
    ) 
}
export default Home
 