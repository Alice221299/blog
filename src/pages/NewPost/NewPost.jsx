import React from 'react'
import Header from '../../components/Header/Header'
import SearchForm from '../../components/SearchForm/SearchForm'
import Footer from '../../components/Footer/Footer'
import PostInfo from '../../components/PostInfo/PostInfo'
import Comments from '../../components/Comments/Comments'
import Image from '../../components/Image/Image'

const NewPost = () => {
  return (
    <>
        <Header/>
        <div className="container-fluid">
            <main className="tm-main">
                <SearchForm/>
                <Image image={""}/>
                <div className="row tm-row">
                    <div className="col-lg-8 tm-post-col">
                        <div className="tm-post-full"> 
                            <PostInfo/>
                            <Comments/>
                        </div>
                    </div>
                </div>
                <Footer/>
            </main>
        </div>
    </>
  )
}

export default NewPost