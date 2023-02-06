import React, {useEffect}from 'react'
import NavigationBar from '../components/navigations/Navbar';
import Footer from '../components/navigations/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { checkAuthenticated, load_user} from '../redux/actions/authActions';


const Layout = (props) => {
  const dispatch =  useDispatch() 
  const authUser = useSelector(state => state.auth)
  const {isAuthenticated, user} = authUser


  useEffect(()=>{
   dispatch(checkAuthenticated() )
   dispatch(load_user())
   
  },[dispatch])
  


  return (
    <div>
      <NavigationBar isAuthenticated={isAuthenticated} user={user}/>
      
      {props.children}
      <Footer/>
    </div>
  )
}

export default Layout