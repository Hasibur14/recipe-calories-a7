import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";


const Recipes = () => {

    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        fetch('recipes.json')
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, [])

    console.log(recipes)

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {
                recipes.map(item => <Recipe key={item.id} recipe={item}></Recipe>)
            }

        </div>
    );
};

export default Recipes;