// Recipe.js
import PropTypes from 'prop-types';
import cal from '../../assets/images/cal.png';
import clock from '../../assets/images/clock.png';

const Recipe = ({ recipe, handleCookBtn }) => {

    const { recipe_image, recipe_name, short_description, preparing_time, ingredients, calories } = recipe;

    return (
        <div className="text-lg">
            <div className="card lg:w-[430px] h-[700px]  bg-base-150 shadow-xl border-t-2">
                <figure><img className="p-6 rounded-xl" src={recipe_image} alt="Shoes" style={{ borderRadius: '1rem' }} /></figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl font bold">{recipe_name}</h2>
                    <p>{short_description}</p>
                    <hr />
                    <div>
                        <h3 className="text-xl font-bold">Ingredients:  {ingredients.length}</h3>
                        <ul>
                            {ingredients.map((ingredient, index) => (
                                <li key={index + 1}> {ingredient}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex space-x-14">
                        <div className='flex space-x-2'>
                            <img src={clock} alt="" />
                            <span>{preparing_time}minutes</span>
                        </div>
                        <div className='flex space-x-2'>
                            <img src={cal} alt="" />
                            <span>{calories}calories</span>
                        </div>
                    </div>
                    <div className="card-actions justify-center mt-4">
                        <button onClick={() => handleCookBtn(recipe)}
                            className="btn lg:w-full lg:h-12 rounded-full bg-[#1DD100] text-white text-xl hover:bg-transparent hover:text-black border-2 border-[#1DD100]">Want to Cook</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

Recipe.propTypes = {
    recipe: PropTypes.shape({
        recipe_image: PropTypes.string.isRequired,
        recipe_name: PropTypes.string.isRequired,
        short_description: PropTypes.string.isRequired,
        preparing_time: PropTypes.number.isRequired,
        ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
        calories: PropTypes.number.isRequired,
        handleCookBtn: PropTypes.func.isRequired
    }).isRequired,
};

export default Recipe;
