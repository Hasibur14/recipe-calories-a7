

const RecipeTable = ({ card }) => {
    const { recipe_name, preparing_time, calories } = card;
    console.log(recipe_name)
    return (
        <div>
            <div className="card lg:w-[600px] lg:h-[800px] bg-base-100 shadow-xl border-t-2 p-8">
                <div>
                    <h2 className="card-title text-2xl font-bold justify-center text-center border-b-2">Want to cook: 01</h2>
                </div>
                <hr />
                <div className="flex justify-around text-lg">
                    <span>Name</span>
                    <span>Time</span>
                    <span>Calories</span>
                </div>
                <hr />
                <div className="card-info flex justify-around">
                    <h5>Name</h5>
                    <h5>Time</h5>
                    <h5>Calories</h5>
                </div>
            </div>
        </div>
        
    );
};

export default RecipeTable;