import React from 'react'
import { Paper } from '@material-ui/core'
import SignUpComponent from './auth.components/signup';
import { Switch, Route } from 'react-router-dom';
import AboutComponent from './about';
import TermsComponent from './terms';
import ProfileCardComponent from './profileCard';
import GamesContentComponent from './games.component/gamesContentComponent';
import AirForceContentComponent from './games.component/topics/airForceContent';
import DraftEditor from './content.richtexteditor/draftEditor';


export const MainComponent: React.FC = () => {



    return (
        <React.Fragment>
            <div className="container-sm">
                <main id="main-component">
                    <Paper elevation={3} id="main-paper">
                        {/*<HeaderComponent />*/}

                        <Switch>
                            <Route exact path="/" component={AboutComponent} />
                            <Route path="/home" component={AboutComponent} />
                            <Route path="/about" component={AboutComponent} />
                            <Route path="/tech" component={DraftEditor} />
                            <Route exact path="/games" component={GamesContentComponent} />
                            <Route path="/games/1945-air-force" component={AirForceContentComponent} />
                            <Route path="/linux" component={AboutComponent} />
                            <Route path="/trading" component={AboutComponent} />
                            <Route path="/login" component={AboutComponent} />
                            <Route path="/signup" component={SignUpComponent} />
                            <Route path="/terms" component={TermsComponent} />
                            <Route path="/profile" component={ProfileCardComponent} />
                        </Switch>
                    </Paper>
                </main>
            </div>
        </React.Fragment>
    )
}

export default MainComponent
