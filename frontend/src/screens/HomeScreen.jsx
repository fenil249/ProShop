import React from 'react'
import { useEffect,useState } from 'react'
import {Row,Col} from 'react-bootstrap'
import axios from 'axios'
import Product from '../components/Product'

const HomeScreen = () => {

  const [products,setproducts]=useState([]); 

  useEffect( ()=>{

      const fetchProducts = async() => {
        const{data} =await axios.get('api/products');
        setproducts(data);
      }

      fetchProducts();
  
  },[]);

  return (
    <>
    <h1>Latest Products</h1>
    <Row>
        { products.map((product)=> (
            <Col key={Product._id} sm={12} md={6} lg={4} xl={3}>
               <Product product={product}/> 
            </Col>
        ))}
    </Row>
    </>
  )
}

export default HomeScreen