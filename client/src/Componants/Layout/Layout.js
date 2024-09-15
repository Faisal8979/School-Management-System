import React from 'react';
import { Helmet } from 'react-helmet';
import Header from './Header';
import Footer from './Footer';


const Layout = ({children, description, title, keywords, author}) => {
  return (
    <>
        <Helmet>
  <meta charSet='utf-8'/>
  <meta name='description' content={description}/>
  <meta name='keywords' content={keywords}/>
  <meta name='author' content={author}/>
  <title>{title}</title>
    </Helmet>
    <Header/>
    <main className='main' style={{minHeight:'70vh', overflow:'hidden', marginLeft:'auto',marginRight:'auto',textAlign:'center'}}>
        {children}
    </main>
    <Footer/>
    </>
  )
}

export default Layout;