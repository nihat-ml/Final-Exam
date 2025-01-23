import React, { createContext, useEffect, useState } from 'react'
export const FavoritesContext = createContext()
function FavoritesProvider({children}) {
        let localFavorites = JSON.parse(localStorage.getItem("favorites"))
        let [favorites,setFavorites] = useState(localFavorites ? localFavorites : [])
        useEffect(() =>{
            localStorage.setItem("favorites",JSON.stringify(favorites))
        },[favorites])
        function addToFavorites(product){
            let findedFavorites = favorites.find(favorit => favorit._id === product._id) 
            if (findedFavorites) {
                alert("There is already this product in your wishlist....")
            }else{
                let updatedFavorit = [...favorites,product]
                setFavorites(updatedFavorit)
            }
        }
        function removeFromFavorites(prodId){
            let filteredFavorit = favorites.filter((favorit) =>favorit._id !== prodId)
            setFavorites(filteredFavorit)
        }
  return (
    <FavoritesContext.Provider value={{favorites,setFavorites,addToFavorites,removeFromFavorites}}>
      {children}
    </FavoritesContext.Provider>
  )
}
export default FavoritesProvider
