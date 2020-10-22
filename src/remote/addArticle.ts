import { internalAxios } from "./axios"
import { Article } from '../models/articleModel'



export const postArticle = async (article: Article) => {
    const response = await internalAxios.post<Article>(`/topics/addarticle`, article);
    //response.data.creationDate = new Date(response.data.creationDate);
    return response.data;
}