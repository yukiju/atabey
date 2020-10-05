import React from 'react'
import './styles/footer.css'


const AboutComponent: React.FC = () => {
    return (
        <React.Fragment>

            <section id="about">
                <header id="about-header">
                    <h1>About</h1>
                </header>
                <div>
                <h2>Hello and Welcome to Yukaju.</h2>
                <p>Yukaju is a blog.</p>
                <p>Here you will find topics about Technology</p>
                </div>

            </section>
        </React.Fragment>
    )
}

export default AboutComponent
