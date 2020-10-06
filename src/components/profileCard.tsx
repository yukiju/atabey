import React from 'react'
import { Paper } from '@material-ui/core'


const ProfileCardComponent: React.FC = () => {

    return (
        <React.Fragment>
            <Paper className="card mb-3" id="profile-card" elevation={3}>
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src="..." className="card-img" alt="..." loading="lazy" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </Paper>
        </React.Fragment>
    )
}

export default ProfileCardComponent
