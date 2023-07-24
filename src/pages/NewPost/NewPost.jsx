import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import SearchForm from '../../components/SearchForm/SearchForm'
import Footer from '../../components/Footer/Footer'
import PostInfo from '../../components/PostInfo/PostInfo'
import Comments from '../../components/Comments/Comments'
import Image from '../../components/Image/Image'
import { useParams } from 'react-router-dom'
import { getArticle } from '../../services/articleService'

const NewPost = () => {
    const [info, setInfo] = useState({})
    const {articleId} = useParams()
    useEffect(() => {
        const getInfo = async () => {
            const response = await getArticle(articleId)
            setInfo(response)
        }
        getInfo()
    }, [])
    
  return (
    <>
        <Header/>
        <div className="container-fluid">
            <main className="tm-main">
                <SearchForm/>
                {info?.title && (<>
                <Image image={info.image}/>
                <div className="row tm-row">
                    <div className="col-lg-8 tm-post-col">
                        <div className="tm-post-full"> 
                            <PostInfo info={info}/>
                            <Comments data={info.comments}/>
                        </div>
                    </div>
                </div>
                </>)}
                
                <Footer/>
            </main>
        </div>
    </>
  )
}

export default NewPost