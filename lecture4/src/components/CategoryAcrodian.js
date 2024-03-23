import ItemAcrodian from "./ItemAcrodian";


const CategoryAcrodian=(props)=>{
    const data=props.data;
    // console.log(data);
    return (
        <div className="py-2 px-2 my-3 bg-white shadow-lg">
            <h1 className="font-bold text-lg">{data.title}</h1>
            {
                data.categories.map((e)=>{
                   
                    return <ItemAcrodian data={e}  noheading={true}/>;
                })
            }
        </div>
    );
}
export default CategoryAcrodian;