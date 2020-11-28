import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ShopBanner from '../components/ShopBanner'


const Layout = ({children}) => {
    return (
     <React.Fragment>
     <Navbar/>
     <ShopBanner/>
     {children}

         <Footer/>
     </React.Fragment>
    )
}

export default Layout
