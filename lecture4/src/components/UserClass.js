
import React from "react";
import UserContext from "../utils/UserContext";
class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count:0
          
        };
    }
    render(){
        const {name,location}=this.props;
        const {count}=this.state;
        return(
            <div className="user-card">
            <button onClick={()=>{
               this.setState({
                count:count+1
               })
            }}>increase count</button>
            <p>count:{count}</p>
            <h1>name:{name}</h1>
            <UserContext.Consumer>
                {({loggedInUser})=><h1>{loggedInUser}</h1>}
            </UserContext.Consumer>
            <h3>location:{location}</h3>
            <p>address:#Nahi BATA rha</p>
            </div>
        )
    }
}
export default UserClass;