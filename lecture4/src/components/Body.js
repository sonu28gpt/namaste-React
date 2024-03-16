
import Card from "./Card";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { HOME_FETCH_LINK } from "../utils/constant";

const Body=()=>{

    const [resList,setResList]=useState([]);
    const [resFilteredList,setFilteredResList]=useState([]);
    const [searchText,setSearchText]=useState('');

    useEffect( ()=>{
        fetchData();
      
    },[]);
    async function fetchData(){
    const data=await fetch(HOME_FETCH_LINK);
        const json=await data.json();
        // console.log(json);
        setResList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        
        setFilteredResList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
       
   }

   if(resFilteredList.length===0){
    return(
     <div id="body">
        <Shimmer/>
     </div>
        
        ) ;
   }


    return (
        <div id="body">
            <div id="body-container">
                
                <div className="filter">
                    <div className="search">
                        <input type="text" className="search-box" value={searchText}
                            onChange={(e)=>{
                                setSearchText(e.target.value);}}
                        />
                        <button className="search-btn" onClick={()=>{
                       
                           setFilteredResList(resList.filter((res)=>res?.info?.name.toLowerCase().includes(searchText.toLowerCase())));
                        }
                        }>search</button>
                    </div>
                    <div className="all-restaurant">
                        <button onClick={()=>{
                            setSearchText('');
                            setFilteredResList(resList);
                        }}> &nbsp; All Restaurants &nbsp;</button>
                    </div>
                    <button className="filter-btn" onClick={
                        ()=>   {
                            setFilteredResList(resList.filter((res)=>res?.info?.avgRating>4.3))
                            
                        }
                        } >Top Rated Restaurants</button>
                </div>
                <div id="all-card">
                   {
                    resFilteredList.map((e)=>{
                        return <Link key={e?.info?.id} to={'/restaurants/'+e?.info?.id}> <Card  cardObj={e}/> </Link>;
                       
                    })
                   }
                </div>
            </div>
        </div>
    );
}

export default Body;