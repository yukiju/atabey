import React, { useEffect, useState } from 'react'
import { Article } from '../../../models/articleModel'
import a1945 from '../../../img/1945-art-1.gif'
import amine from '../../img/mc-art-1.gif'
import aterr from '../../img/terr-art-1.gif'
import ArticleListComponent from './articles/articleList'
import * as contentRemote from '../../../remote/getContent'


const demoArticles: Article[] = [{
    title: 'Get more medals',
    richtext: 'Getting more medals is about grinding until your eyes dry out!',
    img: a1945,
    value: 'get-more-medals'
}, {
    title: 'Equipment',
    richtext: 'The right equipment is one of the most important aspects of getting a specific task done.',
    img: a1945,
    value: 'equipment'
}]

const response: Article[] = [];
// contentRemote.get1945Articles().then(articles => {
//     articles.forEach(e => {
//         demoArticles.push(e)
//     })
// })

export const AirForceContentComponent: React.FC = () => {

    

    const [articles, setArticles] = useState<Article[]>(demoArticles)
    //const [articles] = useState<Article[]>(demoArticles)

    /*
    const addArtricles = (article: Article) => {
        setArticles([...articles, article])
    }*/

    useEffect(() => {
        contentRemote.get1945Articles().then(articles => {
            setArticles(articles)
            console.log(articles)
        })
    },[])

    const renderArticles = () => {
        return articles.map(article => {
            return (<ArticleListComponent key={article.value} article={article}></ArticleListComponent>)
        })
    }

    return (
        <React.Fragment>
            {renderArticles()}
        </React.Fragment>
    )
}

export default AirForceContentComponent

