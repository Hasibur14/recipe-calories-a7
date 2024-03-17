import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Recipe from "../Recipe/Recipe";
import RecipeTable from "../RecipeTable/RecipeTable";

const Recipes = () => {
    const [recipes, setRecipes] = useState([]);
    const [card, setCard] = useState([]);
    const [currentlyCooking, setCurrentlyCooking] = useState([]);

    useEffect(() => {
        fetch('recipes.json')
            .then(res => res.json())
            .then(data => setRecipes(data));
    }, []);

    const handleCookBtn = (recipe) => {
        if (card.find(item => item.recipe_id === recipe.recipe_id)) {
            toast.error("You have already selected this recipe!");
            return;
        }
        setCard(prevCard => [...prevCard, recipe]);
    };

    const handlePreparingClick = (recipe) => {
        const updatedCard = card.filter(item => item.recipe_id !== recipe.recipe_id);
        setCard(updatedCard);
        setCurrentlyCooking(prevCooking => [...prevCooking, recipe]);
    };

    return (
        <>
            <ToastContainer />
            <div className="text-center justify-center my-10 space-y-4">
                <h1 className="text-3xl lg:text-5xl font-bold">Our Recipes</h1>
                <p className="text-lg lg:text-xl">This personalized cooking experience promises to <br />elevate your culinary expertise.</p>
            </div>
            <div className="lg:flex  lg:space-x-10 justify-between ">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 p-2 lg:p-0">
                    {recipes.map(item => <Recipe key={item.recipe_id} recipe={item} handleCookBtn={handleCookBtn} />)}
                </div>
                <RecipeTable card={card} currentlyCooking={currentlyCooking} handlePreparingClick={handlePreparingClick} />
            </div>
        </>
    );
};

export default Recipes;
