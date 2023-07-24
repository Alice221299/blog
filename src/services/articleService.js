import axios from "axios"
import { endpoints } from "./endpoint"

export const getArticles = async () => {
    try {
        const {data} = await axios.get(`${endpoints.articles}?_expand=author&_embed=comments&_embed=category_article`)
        return data
    } catch (error) {
        return error
    }
}

export const getArticle = async (id) => {
    try {
        const {data} = await axios.get(`${endpoints.articles}/${id}?_expand=author&_embed=comments&_embed=category_article`)
        return data
    } catch (error) {
        return error
    }
}