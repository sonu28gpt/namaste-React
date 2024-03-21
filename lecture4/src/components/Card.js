import { CLOUDINARY_URL } from "../utils/constant";


const Card=(props)=>{
    const {cardObj}=props;

    return (
        <div className="w-[260px] h-[400px] m-[15px] flex justify-center items-center  ">
            <div className="w-[100%] h-[100%] flex flex-col justify-around bg-[#f0f0f0] cursor-pointer p-[10px] hover:shadow-lg">
                <div className="self-center relative w-[95%] h-[60%] ">

                     <img className="h-[221px] w-[221px] rounded-2xl" src={CLOUDINARY_URL+cardObj?.info?.cloudinaryImageId}/>
                     <div className="card-img-discount
                     bottom-[10px] left-[4px]
                     font-bold  text-lg absolute text-[hsl(180,19%,94%)]">
                       {cardObj?.info?.aggregatedDiscountInfoV3?.header + cardObj?.info?.aggregatedDiscountInfoV3?.subHeader}
                     </div>
                </div>
                <div className="card-text">
                    <h2>{cardObj?.info?.name}</h2>
                    <p className="truncate">{cardObj?.info?.avgRating+"Star"}</p>
                    <p className="truncate">{cardObj?.info?.cuisines.join(',')}</p>
                    <p>{cardObj?.info?.costForTwo}</p>
                </div>

            </div>
        </div>
    );
}
export default Card;