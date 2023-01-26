import React, {useEffect}from 'react'
import NavigationBar from '../components/navigations/Navbar';
import Footer from '../components/navigations/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { checkAuthenticated, load_user} from '../redux/actions/authActions';
const Layout = (props) => {
  const dispatch =  useDispatch()
  

  useEffect(()=>{
   dispatch(checkAuthenticated() )
   dispatch(load_user())
  })
  return (
    <div>
      <NavigationBar/>
      
      {props.children}
      <Footer/>
    </div>
  )
}

export default Layout