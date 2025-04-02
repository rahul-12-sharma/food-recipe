import React from 'react'
import { useContext } from 'react'
import Recipe from '../components/Recipe'
import { GlobalContext } from '../context/Context'

function Favorites() {
    const { favoritesList } = useContext(GlobalContext);
    return (

        <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
            {favoritesList && favoritesList.length > 0 ? (
                favoritesList.map((item) => <Recipe item={item} />)
            ) : (
                <div>
                    <p className="lg:text-4xl text-xl text-center text-black font-extrabold">
                        Nothing is added in favorites.
                    </p>
                </div>
            )}
        </div>

    )
}

export default Favorites