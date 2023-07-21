import React, { useEffect, useState } from 'react'
import Article from '../Article/Article'
import { getArticles } from '../../services/articleService'

const ArticleContainer = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        getInfo()
    }, [])

    const getInfo = async () => {
        const response = await getArticles()
        setData(response)
        console.log(response);
    }
  return (
    <div className="row tm-row">
        {data.map((article, index) => (
            <Article key={index} article={article}/>
        ))}
    </div>
  )
}

export default ArticleContainer