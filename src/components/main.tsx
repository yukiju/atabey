import React from 'react'
import { Paper } from '@material-ui/core'
import Home from './home'
import SignUpComponent from './signup';
import { Switch, Route } from 'react-router-dom';
import AboutComponent from './about';
import TermsComponent from './terms';
import GamesComponent from './games';
import ProfileCardComponent from './profileCard';


export const MainComponent: React.FC = () => {



    return (
        <React.Fragment>
            <div className="container-sm">
                <main id="main-component">
                    <Paper elevation={3} id="main-paper">
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
                                <GamesComponent />
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
                            <Route path="/profile">
                                <ProfileCardComponent />
                            </Route>
                        </Switch>
                    </Paper>
                </main>
            </div>
        </React.Fragment>
    )
}

export default MainComponent
