import { Article } from "../models/articleModel";
import { Topic } from "../models/topicModel";
import { internalAxios } from "./axios";


/*export const getGames = async () => {
    const response = await internalAxios.get('/topics/games');
    console.log(response)
}*/

export const getGames = async () => {
    const response = await internalAxios.get<Topic[]>('/topics/games');
    //console.log("looping")
    //return response
    //console.log("RESPONSE")
    //console.log(response)
    return response.data.map(topics => {
        //console.log("MAPPING TOPIC")
        //console.log(topic)
        return topics
    })
}

export const get1945Articles = async () => {
    const response = await internalAxios.get<Article[]>('/topics/games/1945-air-force')
    return response.data.map(articles => {
        return articles
    })
}

