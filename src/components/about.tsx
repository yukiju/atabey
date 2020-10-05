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
                    <p>I want to use this place to talk about the stuff that I do and what interests me.</p>
                    <p>Documenting favorite games.</p>
                    <p>Mostly geek and nerdy stuff.</p>
                    <p>Also Wall Street, Technical Analisys, Watchlists.</p>
                </div>

            </section>
        </React.Fragment>
    )
}

export default AboutComponent
