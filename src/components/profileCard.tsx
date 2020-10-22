import React from 'react'
import { Paper, makeStyles } from '@material-ui/core'
import a1945 from '../img/1945-art-1.gif'

const useStyles = makeStyles({
    img: {
        verticalAlign: "middle",
        borderStyle: "none",
    },
    cardImg: {
        borderRadius: "calc(.25rem - 1px)",
        flexShrink: 0,
        width: "100%",
        margin: 4,
    },
    imgPadding: {
        padding: 2,
    },

})

const ProfileCardComponent: React.FC = () => {

    const styles = useStyles();

    return (
        <React.Fragment>
            <Paper className="card mb-3" id="profile-card" elevation={3}>
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={a1945} className={(styles.img, styles.cardImg)} alt="..." loading="lazy" />
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
