
import Card from "./Card";
import allCardsData from "../utils/mockData";

const Body=()=>{
    return (
        <div id="body">
            <div id="body-container">
                -search
                <div id="all-card">
                   {
                    allCardsData.map((e)=>{
                        return <Card key={e?.info?.id} cardObj={e}/>;
                    })
                   }
                </div>
            </div>
        </div>
    );
}

export default Body;