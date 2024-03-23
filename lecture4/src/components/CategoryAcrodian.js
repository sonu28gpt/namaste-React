import ItemAcrodian from "./ItemAcrodian";


const CategoryAcrodian=(props)=>{
    const data=props.data;
    // console.log(data);
    const setshowContent=props?.setshowContent;
    const showContent=props?.showContent;
    return (
        <div className="py-2 px-2 my-3 bg-white shadow-lg">
            <h1 className="font-bold text-lg">{data.title}</h1>
            {
                data.categories.map((e)=>{
                   
                    return <ItemAcrodian key={e?.title} data={e}  noheading={true}
                    showContent={(showContent===e?.title)?true:false} setshowContent={setshowContent} showContentValue={showContent} />;
                })
            }
        </div>
    );
}
export default CategoryAcrodian;