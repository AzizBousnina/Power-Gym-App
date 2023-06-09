import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import {useDispatch} from 'react-redux'
import { Link } from 'react-router-dom'
import { addProduct } from '../../JS/Actions/ProductActions'
import './add.css'

const AddProduct = () => {

  const dispatch = useDispatch()
  const [newProduct, setNewProduct] = useState({name: "", description: "", price: 0})

  const handleChange = (e) => {
    setNewProduct({...newProduct, [e.target.name] : e.target.value})
  }

  const add = () => {
    dispatch(addProduct(newProduct))
  }

  return (
    <div className='add'>
            <h1>Add product</h1>
<Form.Group>
<div className='text'>
<Form.Label>Name</Form.Label>
<Form.Control name='name' type='text' onChange={handleChange}></Form.Control>

<Form.Label>Description</Form.Label>
<Form.Control name='description' type='text' onChange={handleChange}></Form.Control>

<Form.Label>Price</Form.Label>
<Form.Control name='price' type='number' onChange={handleChange}></Form.Control>
</div>
<Link to='/products'>
<Button variant='success' onClick={()=> add()}>Add Product</Button>
</Link>

</Form.Group>
    </div>
  )
}

export default AddProduct