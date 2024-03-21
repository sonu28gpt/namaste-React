import {useState} from "../../node_modules/react";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu=()=>{
  
   let {resId}=useParams();
   const resData=useRestaurantMenu(resId);
   console.log(resData);
   const [veg,setveg]=useState(false);
//    console.log(veg);
   


    return resData.length===0?<Shimmer/>:
        (
        <div id="body">
            <div id="body-container">

                <h1>{resData[0]?.card?.card?.info?.name}</h1>
                <p>{(resData[0]?.card?.card?.info?.cuisines).join(',')}</p>
                <p>{resData[0]?.card?.card?.info?.areaName+' '+resData[0]?.card?.card?.info?.sla?.lastMileTravelString}</p>
                <p>{resData[0]?.card?.card?.info?.avgRating+'Star'}</p>
                <p>{resData[0]?.card?.card?.info?.costForTwoMessage}</p>
                <hr/>
                <button className="px-2 bg-pink-300 py-1 mx-1 rounded cursor-pointer hover:bg-pink-200" onClick={()=>{
                    
                    veg?setveg(false):setveg(true);
                    // console.log(veg);
                }} >Veg Only</button>
                <div className="menu">
                    {
                      resData[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((section)=>{
                      return section?.card?.card?.title})
                      .map((section,i)=>{
                            if(section?.card?.card?.carousel){
                                return;
                            }

                            if(section?.card?.card?.categories){
                              return (
                                <div className="section" key={i}>
                                <h1 >{section?.card?.card?.title}</h1>
                                {
                                    section?.card?.card?.categories.map((category,i)=>{
                                        return (
                                    <div className="categories" key={i}>
                                            <h2 >{'category -'+category?.title}</h2>
                                            <div className="categories-item">
                                            {
                                                category?.itemCards.map((item)=>{
                                                    if(veg){
                                                        if(item?.card?.info?.itemAttribute?.vegClassifier==='VEG'){
                                                            return (
                                                        <p key={item?.card?.info?.id}>{item?.card?.info?.name}</p>
                                                            )
                                                        }

                                                    }else{

                                                    return (
                                                        <p key={item?.card?.info?.id}>{item?.card?.info?.name}</p>
                                                    )
                                                    }
                                                })
                                            }
                                            </div>
                                            <hr/>
                                    </div>
                                    )
                                    })
                                }
                                  <hr/>
                                  <hr/>
                                </div>
                                )
                               
                                
                            }else{
                            return (
                                <div className="section" key={i}>
                                <h1 >{section?.card?.card?.title}</h1>
                                <div className="section-item">
                                {
                                    section?.card?.card?.itemCards?.map((item)=>{
                                        if(veg){
                                                        if(item?.card?.info?.itemAttribute?.vegClassifier==='VEG'){
                                                            return (
                                                        <p key={item?.card?.info?.id}>{item?.card?.info?.name}</p>
                                                            )
                                                        }

                                    }else{

                                        return (
                                            <p key={item?.card?.info?.id}>{item?.card?.info?.name}</p>
                                        )
                                    }
                                    })
                                }
                                </div>
                                <hr/>
                                <hr/>
                                </div>

                            )
                            }
                        })
                       
                    }




                  
                </div>
            </div>
        </div>


    );
}

export default RestaurantMenu;

