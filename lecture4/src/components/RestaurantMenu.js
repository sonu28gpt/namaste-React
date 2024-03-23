
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import ItemAcrodian from "./ItemAcrodian";
import CategoryAcrodian from "./CategoryAcrodian";


const RestaurantMenu=()=>{
  
   let {resId}=useParams();
   const resData=useRestaurantMenu(resId);
//    console.log(resData);
    
   
    if(resData.length===0){
        return <Shimmer/>;
    }
 const menuAcrodian=resData[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((section)=>{  return section?.card?.card?.title}).map((e)=>{
    return e.card.card;
});
        // console.log(menuAcrodian);
        
        return (
        <div className="body flex justify-center items-center  my-5">
            <div className="body-container w-[60%] ">
                <div className="res-info">
                    <h1 className="font-bold text-2xl mb-2">{resData[0].card.card.info.name}</h1>
                    <h1 className="text-sm">{resData[0].card.card.info.cuisines.join(' , ')}</h1>
                    <h1 className="text-sm">{resData[0].card.card.info.avgRatingString + "rating"}</h1>
                    <h1 className="text-sm">{resData[0].card.card.info.city}</h1>
                    <h1 className="text-sm">Cost For Two: ₹{resData[0].card.card.info.costForTwo/100} Only</h1>
                </div>

                <div className="menuAcrodian bg-pink-100 py-2 ">
                {
                    menuAcrodian.map((e,i)=>{
                        if(e.itemCards){
                           {/* console.log(e); */}
                            return <ItemAcrodian key={i} data={e}/>
                        }
                        if(e.categories){
                           
                            return <CategoryAcrodian key={i} data={e}/>
                        }
                            
                        return null;
                    })
                }

                </div>

            </div>
        </div>
       );
    
       
}

export default RestaurantMenu;

