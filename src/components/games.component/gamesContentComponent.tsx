import React, { useEffect, useState } from 'react'
import { Topic } from '../../models/topicModel'
import GamesListComponent from './gamesList'
import a1945 from '../../img/1945-art-1.gif'
import amine from '../../img/mc-art-1.gif'
import aterr from '../../img/terr-art-1.gif'
import * as contentRemote from '../../remote/getContent'


const demoTopics: Topic[] = [{
    topic: 'Minecraft',
    value: 'minecraft',
    img: amine
}, {
    topic: '1945 Air Force',
    value: '1945-air-force',
    img: a1945
}, {
    topic: 'Terraria',
    value: 'terraria',
    img: aterr
}]



const response:Topic[] = [];
// contentRemote.getGames().then(topics => {
//     topics.forEach(e => {
//         response.push(e)
//     })

// })

    //.then(response => {
    //console.log("rresponse data")
    //console.log(response.data)
    //setTopics(response.data)

    
    //response.data.map(topic => {
    //    topics.push(topic)
    //})
    //setTopics(topics)
    
    //console.log("TOPICS FROM GET")
    //console.log(topics)
//});



export const GamesContentComponent: React.FC = () => {

    const [topics, setTopics] = useState<Topic[]>(demoTopics)
    //const [topics, setTopics] = useState<Topic[]>([])
    //const [topics] = useState<Topic[]>(response)

    useEffect(() => {
        contentRemote.getGames().then(topics => {
            setTopics(topics)
        }).catch(e => {
            console.log(e)
        })
    },[])

    const renderTopics = () => {
       
        return topics.map(topic => {
            //console.log("LOGGNG IMG")
            console.log(topic.img)
            return (<GamesListComponent key={topic.value} topic={topic}></GamesListComponent>)
        })
    }

    

    return (
        <React.Fragment>
            {renderTopics()}
        </React.Fragment>
    )
}

export default GamesContentComponent
