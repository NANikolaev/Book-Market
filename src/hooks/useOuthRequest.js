import { useContext } from "react";
import {OuthContext} from '../contexts';
import {url} from "../constants"

//let url="http://localhost:5000";

export const useOuthRequest=()=>{
    const [user, changeUserState] = useContext(OuthContext);

    function outhRequest(method,pathname, content) {
       let options={}
        if(content){
            options={
                method: method,
                headers: {
                    "Content-Type": "application/json",
                    "authorization": user.accessToken,
                },
                body:  JSON.stringify(content)
        }
        }
        else{
            options={
                method: method,
                headers: {
                    "Content-Type": "application/json",
                    "authorization": user.accessToken,
                },
        }
        }

        return fetch(url+pathname,options)
               .then(res => res.json())
     
    }
    return outhRequest
};


