import React, { useState } from 'react'
import {Form, Button} from 'react-bootstrap';
import { useMatch, useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { editProduct } from '../../JS/Actions/ProductActions';
import './editProduct.css'

const EditProduct = () => {
    
   

  const dispatch = useDispatch();
  const [newProduct, setNewProduct] = useState({name :"", description :"", price :{}})

  const navigate = useNavigate();
  const match = useMatch('/edit_product/:id');

  const handleChange=(e) =>{
    setNewProduct({...newProduct, [e.target.name]: e.target.value})
  }

  const edit =() =>{
    dispatch(editProduct(match.params.id , newProduct))
   navigate('/products')
  }

  return (
    <div>
      <h1>Edit Product</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Product Title</Form.Label>
          <Form.Control type="text" placeholder="Edit Product Title" name="name" 
          value={newProduct.name}
          onChange={handleChange}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" placeholder="Edit Product Description" name="description" 
          value={newProduct.description}
          onChange={handleChange}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Prix</Form.Label>
          <Form.Control type="number" placeholder="Edit The price" name="price" 
                  value={newProduct.price}

          onChange={handleChange}/>
        </Form.Group>

        <Button variant="success" type="submit" onClick={() =>  edit()  }>
          Edit
        </Button>
        

      </Form>

    </div>
  )
}

export default EditProduct