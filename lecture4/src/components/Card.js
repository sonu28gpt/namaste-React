import { CLOUDINARY_URL } from "../utils/constant";


const Card=(props)=>{
    const {cardObj}=props;

    return (
        <div className="card">
            <div className="card-container">
                <div className="card-img">

                     <img src={CLOUDINARY_URL+cardObj?.info?.cloudinaryImageId}/>
                     <div className="card-img-discount">
                       {cardObj?.info?.aggregatedDiscountInfoV3?.header + cardObj?.info?.aggregatedDiscountInfoV3?.subHeader}
                     </div>
                </div>
                <div className="card-text">
                    <h2>{cardObj?.info?.name}</h2>
                    <p className="card-text-rating">{cardObj?.info?.avgRating+"Star"}</p>
                    <p>{cardObj?.info?.cuisines.join(',')}</p>
                    <p>{cardObj?.info?.costForTwo}</p>
                </div>

            </div>
        </div>
    );
}
export default Card;