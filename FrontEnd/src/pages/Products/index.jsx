import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { FavoritesContext } from '../../context/FavoritesContext'
import { FaHeart } from 'react-icons/fa'

function Products() {
    const [products, setProducts] = useState([])
    const navigate = useNavigate()
    
    const [searchName, setSearchName] = useState("")
    const {favorites,addToFavorites} = useContext(FavoritesContext)

     function getProducts(){
        axios.get("http://localhost:3000/products")
        .then((res)=>{
            setProducts(res.data)
        })
    }
    useEffect(()=>{
        getProducts()
    },[])

    function handleSearchChange(e){
        setSearchName(e.target.value)
     
    }
    function btnFavorite(prodId){
        return favorites.some((favorite) => favorite._id === prodId)
    }
    
  return (
    <>
    
      <div className='containerCards'>
        <input className='searchInput' type="text" placeholder='Search for title' value={searchName} onChange={handleSearchChange}/>
            <div className="cards">
                {products
                .filter(x=>x.title.toLowerCase().includes(searchName.toLowerCase()))
                .map((product)=>(
                    <div className="card" key={product._id}>
                    <img src={product.image} alt="" />
                    <p>{product.title}</p>
                    <span>${product.price}</span>
                    <div className="cardBtn">
                        <button onClick={()=>navigate(`/detail/:id`)} className='.btnDetail' style={{backgroundColor:"blue", color:"white", padding:"10px 20px", border:"none", borderRadius:"5px"}}>Detail</button>
                        <button className="btnFavorite" style={{backgroundColor:"white", color:'red', border:'none', fontSize:'25px'}} onClick={() =>addToFavorites(product)}><FaHeart/></button>
                    </div>
                </div>
                ))}
            </div>
      </div>
    </>
  )
}

export default Products
