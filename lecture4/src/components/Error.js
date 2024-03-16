import {useRouteError} from "react-router-dom";
const Error=()=>{
    const err=useRouteError();
    console.log(err);
    return (
    <div id="body">
        <div id="body-container">

            <div id="error">
            <h1>Got Error</h1>
            <h3>{err?.data}</h3>
            <h3>{err?.status}</h3>
            </div>
        </div>
    </div>
        
    )
}
export default Error;