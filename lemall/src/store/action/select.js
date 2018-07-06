import * as TYPES from "./../action-types.js"
import {selectData,fenleiData} from "../../api/select"

let select={
 async fenleiData(){
     return {
         type:TYPES.LX_FENLEI,
         fenlei:await fenleiData()
     }
 },
 async selectData(){
     return {
         type:TYPES.LX_SELECT,
         select:await selectData()
     }
 }
};
export default select;