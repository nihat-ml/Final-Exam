import React, { useContext } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { FavoritesContext } from '../../context/FavoritesContext'
import { Link } from 'react-router'
import { FaHeart, FaInfo } from 'react-icons/fa'
import 'bootstrap/dist/css/bootstrap.min.css';

import Helmet from "react-helmet"

function Favorites() {
    const {favorites,removeFromFavorites} = useContext(FavoritesContext)
    
    
    if (favorites.length == 0) return <div style={{height:"60vh"}}><h1>There is No Favorites....</h1></div>
  return (
    <>
      <Container>
        <Helmet>
            <title>Favorites</title>
        </Helmet>
        <h3>Please click green heart for removing your product from your wishlist...</h3>
        <br /><br />
        <Row>
            {
                favorites.map((product) =>(
                    <Col md = {3} key={product._id}>
                        <Card className='card'>
                            <Card.Img src={product.image} style={{height:"300px",width:"300px"}}/>
                            <Card.Body>
                                <Card.Title>{product.title}</Card.Title>
                                <Card.Text>{product.description}</Card.Text>
                                <Card.Text>${product.price}</Card.Text>
                                <div style={{display:"flex",gap:"10px"}}>
                                    <Link to={`/products/${product._id}`}><button className='btn btn-outline-warning'><FaInfo/></button></Link>
                                    <button className={'btn btn-success'} onClick={() =>removeFromFavorites(product._id)}><FaHeart/></button>
                                    
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))
            }
        </Row>
      </Container>
    </>
  )
}

export default Favorites
