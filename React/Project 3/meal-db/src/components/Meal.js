import React,{useState} from 'react';
import Mealitem from "./Mealitem";
import './style.css';


const Meal = () => {

    const[search,setSearch]=useState('')
    const[Mymeal,setMeal]=useState();
    const searchMeal=(evt)=>{
        if (evt.key==="Enter"){
            fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`).then(res =>res.json()).then(data =>{setMeal(data.meals);setSearch('')})
        }

    }




  return (
    <>
     <div className='main'>
        <div className='heading'>
        <h1>Search For the Recipe</h1>
        <h4>Give a dish to search</h4>
        </div>
        <div className='searchBox'>
            <input type="search" className='search-bar' value={search} onKeyPress={searchMeal} onChange={(e)=>setSearch(e.target.value)} />
        </div>
        <div>

        </div>
        {
            (Mymeal==null)? <p>Not Found</p>:
                Mymeal.map((res)=> {

                    return(
                        <Mealitem data={res}/>)}
                    

                
            )
        }
    
    
    
     </div>
    </>
  )
}



export default Meal;