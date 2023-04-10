import React from "react";
import './style.css';

const Mealitem = (getMeal) =>{
    console.log(getMeal.data)


    return(
    <>
     <div>
        <img src={getMeal.data.strMealThumb} alt='meal'></img>

        <div className="info">
         <h2>{getMeal.data.strMeal}</h2>
         <p>{getMeal.data.strArea} food</p>
        </div>

         <h2>Recipe</h2>
         <p>{getMeal.data.strInstructions}</p>
         <img src={getMeal.data.strMealThumb} alt=''/>
         <a href={getMeal.data.strSource}>Watch video</a>
       
     </div>
        


    </>
    )
}

export default Mealitem;