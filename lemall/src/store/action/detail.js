import * as TYPES from "../action-types.js"
import {add} from "../../api/detail.js"
let detail={
/*    add(payload){
        return async dispatch=>{
            let result={code:0,msg:"ok"};
            dispatch({
                type:TYPES.DETAIL_ADD,
                result
            })
        }
    }*/
    async add(payload){
        return{
            type:TYPES.DETAIL_ADD,
            payload:await add(payload)
        }
    }
};

export default detail