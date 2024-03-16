import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";
import RecipeTable from "../RecipeTable/RecipeTable";


const Recipes = () => {

    const [recipes, setRecipes] = useState([])
     const [card, setCard] = useState([])


    useEffect(() => {
        fetch('recipes.json')
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, [])

 
 const handleCookBtn = (p) =>{
   const allRecipe = [...setCard, p]
   setCard(allRecipe)
 }

console.log(card)
    return (
        <>
            <div className="text-center justify-center my-10 space-y-4">
                <h1 className="text-5xl font-bold">Our Recipes</h1>
                <p className="text-xl">This personalized cooking
                    experience promises to <br />elevate your culinary expertise</p>
            </div>
            <div className="lg:flex space-x-10 justify-between space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                    {
                        recipes.map(item => <Recipe key={item.id} recipe={item} handleCookBtn={handleCookBtn}></Recipe>)
                    }
                </div>

                <RecipeTable card={card}></RecipeTable>
            </div>
        </>
    );
};

export default Recipes;