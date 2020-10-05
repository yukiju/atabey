import React, { useState } from 'react'
import Home from './home'
import HeaderComponent from './header'
import SignUpComponent from './signup';
import { Switch, Route } from 'react-router-dom';
import AboutComponent from './about';
import TermsComponent from './terms';


export const MainComponent: React.FC = () => {



    return (
        <div className="container">
            <main id="main-component">
                {/*<HeaderComponent />*/}
                
                    <Switch>
                        <Route path="/home">
                            <AboutComponent />
                        </Route>
                        <Route path="/about">
                            <AboutComponent />
                        </Route>
                        <Route path="/tech">
                            
                        </Route>
                        <Route path="/games">
                            <Home />
                        </Route>
                        <Route path="/linux">
                            <Home />
                        </Route>
                        <Route path="/trading">
                            
                        </Route>
                        <Route path="/login">
                            <Home />
                        </Route>
                        <Route path="/signup">
                            <SignUpComponent />
                        </Route>
                        <Route path="/terms">
                            <TermsComponent />
                        </Route>
                    </Switch>
                
            </main>
        </div>
    )
}

export default MainComponent
