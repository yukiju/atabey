import React from 'react'
import { Paper, makeStyles } from '@material-ui/core'
import { Topic } from '../../models/topicModel'
import { Link, RouteComponentProps, withRouter } from 'react-router-dom'
import { useHistory } from 'react-router'


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


interface TopicListProps {
    topic: Topic;
}

const GamesListComponent: React.FC<TopicListProps> = ({topic}) => {
    

    const styles = useStyles();
    const history = useHistory();

    const link = () => {
        //console.log('/games/'+topic.value)
        //console.log(history)
        //console.log(topic.value)
        //console.log(history.push("/"+topic.value))
        return '/games/'+topic.value
        
        
    }

    return (
        <React.Fragment>
            <Paper className="card mb-3" id="profile-card" elevation={3}>
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={topic.img} className={(styles.img, styles.cardImg)} alt="game thumbnail animated" loading="lazy" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title"><Link to={() => link()}>{topic.topic}</Link></h5>
                            <p className="card-text">{}</p>
                            {/*<p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>*/}
                        </div>
                    </div>
                </div>
            </Paper>
        </React.Fragment>
    )
}

export default GamesListComponent
