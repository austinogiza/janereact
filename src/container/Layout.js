import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ShopBanner from '../components/ShopBanner'
import Bonus from '../components/Bonus'

const Layout = ({children}) => {
    return (
     <React.Fragment>
     <Navbar/>
     <ShopBanner/>
     {children}
    <Bonus/>
         <Footer/>
     </React.Fragment>
    )
}

export default Layout
