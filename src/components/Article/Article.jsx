import React from 'react'

const Article = ({article}) => {
    const handleClick = () => {
        
    }
  return (
    <article className="col-12 col-md-6 tm-post" onClick={handleClick}>
        <hr className="tm-hr-primary"/>
        <a href="post.html" className="effect-lily tm-post-link tm-pt-60">
            <div className="tm-post-link-inner">
                <img src={article.image} alt="Image" className="img-fluid"/>                            
            </div>
            {article.isImportant && <span className="position-absolute tm-new-badge">Destacado</span>}
            <h2 className="tm-pt-30 tm-color-primary tm-post-title">{article.title}</h2>
        </a>                    
        <p className="tm-pt-30">
            {article.text}
        </p>
        <div className="d-flex justify-content-between tm-pt-45">
            <span className="tm-color-primary">Travel . Events</span>
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