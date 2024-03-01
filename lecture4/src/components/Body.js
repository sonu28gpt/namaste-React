
import Card from "./Card";
import allCardsData from "../utils/mockData";
import { useState } from "react";

const Body=()=>{

    const [resList,setResList]=useState(allCardsData);
   
    return (
        <div id="body">
            <div id="body-container">
                -search
                <div className="filter">
                    <button className="filter-btn" onClick={
                        ()=>   {
                            setResList(resList.filter((res)=>res?.info?.avgRating>4.3));
                        }
                        } >Top Rated Restaurants</button>
                </div>
                <div id="all-card">
                   {
                    resList.map((e)=>{
                        return <Card key={e?.info?.id} cardObj={e}/>;
                    })
                   }
                </div>
            </div>
        </div>
    );
}

export default Body;