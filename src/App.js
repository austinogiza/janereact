import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {createBrowserHistory}from 'history'
import Home from './pages/Home'
import About from './pages/About'
import Blog from './pages/Blog'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Faq from './pages/Faq'
import BlogDetail from './pages/BlogDetail'
import Contact from './pages/Contact'
import Dashboard from './pages/Dashboard'
import Shop from './pages/Shop'
import Detailed from './pages/Detailed'
import Returns from './pages/Returns'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Layout from './container/Layout'
import './App.css'
import ScrollToTop from './components/ScrollTop'
import Top from './components/Top'
import {connect} from 'react-redux'
const history = createBrowserHistory()
const App = () => {
  return (
   <React.Fragment>
   <Router history={history}>
<Layout>

<ScrollToTop/>
<Switch>

<Route exact path='/' component={Home}/>
<Route exact path='/about' component={About}/>
<Route exact path='/blog' component={Blog}/>
<Route exact path='/cart' component={Cart}/>
<Route exact path='/checkout' component={Checkout}/>
<Route exact path='/faq' component={Faq}/>
<Route exact path='/blog/:slug' component={BlogDetail}/>
<Route exact path='/contact' component={Contact}/>
<Route exact path='/dashboard' component={Dashboard}/>
<Route exact path='/shop' component={Shop}/>
<Route exact path='/product/:slug' component={Detailed}/>
<Route exact path='/returns' component={Returns}/>
<Route exact path='/login' component={Login}/>
<Route exact path='/signup' component={SignUp}/>


</Switch>
<Top/>
</Layout>  

 </Router>



   </React.Fragment>
  )
}

export default connect()(App)
