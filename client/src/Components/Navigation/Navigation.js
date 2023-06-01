import React from 'react'
import {Navbar, Container, Nav, Button} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import {  logout } from '../../JS/Actions/AuthActions'
import './navigation.css'
const Navigation = () => {
  const dispatch = useDispatch()

  const isAuth = useSelector((state) => state.AuthReducer.isAuth)


  const logoutUser = () => {
    dispatch(logout())
  }

  return (
    <div>
            <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">POWER GYM</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/products">Products</Nav.Link>
            <Nav.Link href="/add_product">Add Product</Nav.Link>
            

            {
              isAuth?
              <div className='btn'>
            <Link to='/profile'>
            <Button className='pro' variant='light'>Profile</Button>
            </Link>

            <Button variant='danger' className='out' onClick={()=> logoutUser()}>Logout</Button>
              </div>
              :
              <div>
            <Link to='/login'>
            <Button variant='success' className='log'>Login</Button>
            </Link>

            <Link to='/register'>
            <Button variant='light' className='reg'>Register</Button>
            </Link>
              </div>
            }


          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navigation