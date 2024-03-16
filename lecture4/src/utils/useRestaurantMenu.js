import { useState,useEffect } from "react";
import { RESTAURANT_MENU_URL } from "../utils/constant";

const useRestaurantMenu=(resId)=>{
    console.log("useRestaurantMEnu");
    const[resData,setresData]=useState([]);
    useEffect(()=>{
        fetchData();
    },[]);
    const fetchData=async ()=>{
        const data=await fetch(RESTAURANT_MENU_URL + resId);
        const json=await data.json();
        // console.log(json);
        setresData(json?.data?.cards);
        // console.log( json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((section)=>{  return section?.card?.card?.title})
        // )
    }


    return resData;
}

export default useRestaurantMenu;