import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getCategories } from '../../services/categoriesService'

const Article = ({article}) => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        obtainCategories()
    }, [])

    const obtainCategories = async () => {
        const response = await getCategories()
        const categoriesArticle =  response.filter(category => article.category_article.find(element => element.categoryId === category.id))
        setCategories(categoriesArticle)
    }
    const navigate = useNavigate()
    const handleClick = () => {
        navigate(`/new/${article.id}`)
    }
  return (
    <article className="col-12 col-md-6 tm-post" onClick={handleClick}>
        <hr className="tm-hr-primary"/>
        <span className="effect-lily tm-post-link tm-pt-60">
            <div className="tm-post-link-inner">
                <img src={article.image} alt="Image" className="img-fluid"/>                            
            </div>
            {article.isImportant && <span className="position-absolute tm-new-badge">Destacado</span>}
            <h2 className="tm-pt-30 tm-color-primary tm-post-title">{article.title}</h2>
        </span>                    
        <p className="tm-pt-30">
            {article.text}
        </p>
        <div className="d-flex justify-content-between tm-pt-45">
            <span className="tm-color-primary">{categories.map((category, index) => (<p key={index}>{category.name}</p>))}</span>
            <span className="tm-color-primary">{article.date}</span>
        </div>
        <hr/>
        <div className="d-flex justify-content-between">
            <span>{article.comments.length} comentario</span>
            <span>por {article.author.name}</span>
        </div>
    </article>
  )
}

export default Article