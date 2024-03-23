
import Card from "./Card";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { HOME_FETCH_LINK } from "../utils/constant";
import UserContext from "../utils/UserContext.js";
const Body=()=>{

    const [resList,setResList]=useState([]);
    const [resFilteredList,setFilteredResList]=useState([]);
    const [searchText,setSearchText]=useState('');
    const {loggedInUser,setloggedUser}=useContext(UserContext);

    useEffect( ()=>{
        fetchData();
      
    },[]);
    async function fetchData(){
    const data=await fetch(HOME_FETCH_LINK);
        const json=await data.json();
      
        setResList(json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        
        setFilteredResList(json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
       
   }

   if(resFilteredList.length===0){
    return(
     <div id="body " className="flex justify-center">
        <Shimmer/>
     </div>
        
        ) ;
   }


    return (
        <div id="body" className="flex justify-center ">
            <div id="body-container" className="w-[80%] ">
                
                <div className="flex justify-between h-14 items-center">
                    <div className="search">
                        <input type="text" className= "ring-1 ring-inset ring-gray-300  italic" value={searchText}
                            onChange={(e)=>{
                                setSearchText(e.target.value);}}
                        />
                        <button className="px-2 bg-pink-300 py-1 mx-1 rounded cursor-pointer hover:bg-pink-200" onClick={()=>{
                       
                           setFilteredResList(resList.filter((res)=>res?.info?.name.toLowerCase().includes(searchText.toLowerCase())));
                        }
                        }>search</button>
                    </div>
                    <div className="all-restaurant">
                        <button onClick={()=>{
                            setSearchText('');
                            setFilteredResList(resList);
                        }} className="cursor-pointer px-2 bg-pink-300 py-1 mx-1 rounded hover:bg-pink-200"> &nbsp; All Restaurants &nbsp;</button>
                    </div>
                    <button className="cursor-pointer px-2 bg-pink-300 py-1 mx-1 rounded hover:bg-pink-200" onClick={
                        ()=>   {
                            setFilteredResList(resList.filter((res)=>res?.info?.avgRating>4.3))
                            
                        }
                        } >Top Rated Restaurants</button>
                    <input className="border-2 border-solid border-black" value={loggedInUser}  onChange={(e)=>{
                        setloggedUser(e.target.value);
                    }}/>
                </div>
                <div id="all-card" className="flex flex-wrap justify-evenly items-center">
                   {
                    resFilteredList.map((e)=>{
                        return <Link className="inline-block" key={e?.info?.id} to={'/restaurants/'+e?.info?.id}> <Card  cardObj={e} /> </Link>;
                       
                    })
                   }
                </div>
            </div>
        </div>
    );
}

export default Body;