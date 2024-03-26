
import ItemCard from "./ItemCard";



const ItemAcrodian=(props)=>{
    const data=props.data;
    const {noheading,showContent,setshowContent,showContentValue,vegOnly}=props;
    const acrodianShow= ()=>{
        if(showContentValue===data?.title){
            setshowContent(null);
        }else{
            setshowContent(data?.title);
        }
       };
    return (
        <div className={  noheading?'content-box   my-3 bg-white':'content-box   my-3 bg-white shadow-lg py-2 px-2'}>
            <div className="heading flex justify-between items-center cursor-pointer" onClick={
              acrodianShow
            }>
                <span className={noheading?null:'font-bold text-lg'}>{data.title}({data.itemCards.length})</span>
                <span>{showContent?"⬆":"⬇"}</span>
            </div>
            <div className="content">
                {   showContent?
                 vegOnly?
                 data.itemCards.filter((e)=>{
                    return e?.card?.info?.itemAttribute?.vegClassifier==='VEG'
                    }).map((e)=>{
                        return <ItemCard key={e?.card?.info?.id} data={e?.card?.info} menuPage={true}/>;
                        })
                        :data.itemCards.map((e)=>{
                            {/* console.log(e); */}
                        return <ItemCard key={e?.card?.info?.id} data={e?.card?.info} menuPage={true}/>;
                        }) :
                        null



                    
                }
            </div>
        </div>
    );
}
export default ItemAcrodian;