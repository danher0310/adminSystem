import React from 'react'

import 'react-toastify/dist/ReactToastify.css';
import NavigationBar from '../components/navigations/Navbar';
import Footer from '../components/navigations/Footer';



function Layout(props) {
  
  
  return (
    <div>
      <NavigationBar/>
      
      {props.children}
      <Footer/>
    </div>
  )
}

export default Layout