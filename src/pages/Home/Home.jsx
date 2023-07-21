import React from 'react'
import Header from '../../components/Header/Header'
import SearchForm from '../../components/SearchForm/SearchForm'
import ArticleContainer from '../../components/ArticleContainer/ArticleContainer'
import Footer from '../../components/Footer/Footer'
import Pagination from '../../components/Pagination/Pagination'

const Home = () => {
  return (
    <>
        <Header/>
        <div className="container-fluid">
            <main className="tm-main">
                <SearchForm/>
                <ArticleContainer/>
                <Pagination/>
                <Footer/>
            </main>
        </div>
    </>
  )
}

export default Home