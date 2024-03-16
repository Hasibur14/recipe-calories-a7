import React, { useState } from "react";

const RecipeTable = ({ card }) => {
    const [currentlyCooking, setCurrentlyCooking] = useState([]);

    const handlePreparingClick = (recipe) => {
        const updatedCard = card.filter(item => item !== recipe);
        setCurrentlyCooking(prevCooking => [...prevCooking, recipe]);
    };

    return (
        <div>
            <div className="card lg:w-[600px] lg:h-[800px] bg-base-100 shadow-xl border-t-2 p-8">
                <div>
                    <h2 className="card-title text-2xl font-bold justify-center text-center border-b-2">Want to cook: {card.length}</h2>
                </div>
                <hr />
                <div className="flex justify-around text-lg font-semibold">
                    <span>Name</span>
                    <span>Time</span>
                    <span>Calories</span>
                    <span className="opacity-15 text-sm">Preparing</span>
                </div>
                <hr />
                <div className="space-y-4 mt-2">
                    {card.map((item, index) => (
                        <div key={index} className="card-info flex justify-around bg-gray-100 rounded-lg p-1">
                            <h5>{item.recipe_name}</h5>
                            <h5>{item.preparing_time} minutes</h5>
                            <h5>{item.calories} calories</h5>
                            <button className="btn bg-green-500 text-white rounded-full" onClick={() => handlePreparingClick(item)}>Preparing</button>
                        </div>
                    ))}
                </div>
                <hr />
                <div>
                    <h2 className="card-title text-2xl font-bold justify-center text-center border-b-2 mt-8">Currently cooking: {currentlyCooking.length}</h2>
                </div>
                <hr />
                <div className="flex justify-around text-lg font-semibold">
                    <span>Name</span>
                    <span>Time</span>
                    <span>Calories</span>
                </div>
                <hr />
                <div className="space-y-4 mt-2">
                    {currentlyCooking.map((item, index) => (
                        <div key={index} className="card-info flex justify-around bg-gray-100 rounded-lg p-1">
                            <h5>{item.recipe_name}</h5>
                            <h5>{item.preparing_time} minutes</h5>
                            <h5>{item.calories} calories</h5>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RecipeTable;
