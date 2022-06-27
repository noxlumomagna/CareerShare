import React from 'react'
import "./About.css"
function About() {
    return (
        <div className='about'>
            <div className='about-container'>
                <div className='logo-main'>
                    <img src='' />CareerShare
                </div>
                <span>Powered by:</span>
                <h1>Derick Nguyen</h1>
                <div className='contact-me'>
                    <a href='https://twitter.com/KcireDNguyen' style={{ "--color": "#158aed" }}><i className='bi bi-twitter'></i></a>
                    <a href='https://www.linkedin.com/in/derick-nguyen-100devs/' style={{ "--color": "#0563bb" }}><i className='bi bi-linkedin'></i></a>
                    <a href='http://github.com/noxlumomagna' style={{ "--color": "#000" }}><i className='bi bi-github'></i></a>
                    <a href='' style={{ "--color": "#dc3545" }}><i className='bi bi-envelope'></i></a>
                </div>
            </div>
            <footer>
                <div className='footer-logo'>
                    <img src='' />
                </div>
                <div class="copyright">
                    © Copyright <strong><span>CareerShare</span></strong>. All Rights Reserved
                </div>
                <div class="credits">
                    Designed by <a href="https://dericknguyen.netlify.app/">Derick Nguyen</a>
                </div>
            </footer>
        </div>
    )
}

export default About
