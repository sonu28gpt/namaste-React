
import Card from "./Card";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body=()=>{

    const [resList,setResList]=useState([]);
    const [resFilteredList,setFilteredResList]=useState([]);
    const [searchText,setSearchText]=useState('');

    useEffect( ()=>{
        fetchData();
        console.log("useEffect called");
    },[]);
    async function fetchData(){
    const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.40980&lng=77.31000&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json=await data.json();
        console.log(json);
        setResList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        
        setFilteredResList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
       
   }

   if(resList.length===0){
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
                        return <Card key={e?.info?.id} cardObj={e}/>;
                    })
                   }
                </div>
            </div>
        </div>
    );
}

export default Body;