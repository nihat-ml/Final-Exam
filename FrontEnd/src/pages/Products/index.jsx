import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'

function Products() {
    const [products, setProducts] = useState([])
    
    const [searchName, setSearchName] = useState("")

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
    
  return (
    <>
      <div className='containerCards'>
        <input className='searchInput' type="text" placeholder='search for title' value={searchName} onChange={handleSearchChange}/>
            <div className="cards">
                {products
                .filter(x=>x.title.toLowerCase().includes(searchName.toLowerCase()))
                .map((product)=>(
                    <div className="card" key={product._id}>
                    <img src={product.image} alt="" />
                    <p>{product.title}</p>
                    <span>${product.price}</span>
                    <div className="cardBtn">
                        <Link to={"/:id"}><button className='.btnDetail' style={{backgroundColor:"blue", color:"white", padding:"10px 20px", border:"none", borderRadius:"5px"}}>Detail</button></Link>
                        <button className='.btnFavorite' style={{backgroundColor:"red", color:"white", padding:"10px 20px", border:"none", borderRadius:"5px"}}>Favorite</button>
                    </div>
                </div>
                ))}
            </div>
      </div>
    </>
  )
}

export default Products
