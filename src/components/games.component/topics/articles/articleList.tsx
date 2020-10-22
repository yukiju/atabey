import React from 'react'
import { Paper, makeStyles } from '@material-ui/core'
import { Article } from '../../../../models/articleModel'
import { Link } from 'react-router-dom'
import { EditorState, convertFromRaw, Editor } from 'draft-js';
import a1945 from '../../../../img/1945-art-1.gif'


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

interface ArticleProps {
    article: Article;
}

const testing = '';

const ArticleListComponent: React.FC<ArticleProps> = ({article}) => {

    const styles = useStyles();

    //const content = EditorState.createWithContent(convertFromRaw(JSON.parse(article.richtext)));
    const onChange = () => {};

    const link = () => {
        //console.log('/games/'+topic.value)
        //console.log(history)
        return '/games/1945-air-force/'+article.value
        //history.push('/games/'+topic.topic)
    }

    return (
        <React.Fragment>
            <Paper className="card mb-3" id="profile-card" elevation={3}>
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={a1945} className={(styles.img, styles.cardImg)} alt="game thumbnail animated" loading="lazy" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title"><Link to={() => link()}>{article.title}</Link></h5>
                            <p className="card-text">{article.richtext}</p>
                            {/*<p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>*/}
                        </div>
                    </div>
                </div>
            </Paper>
        </React.Fragment>
    )
}

export default ArticleListComponent
