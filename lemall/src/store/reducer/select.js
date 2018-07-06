import * as TYPES from "./../action-types.js"


let INIT_STATE={select:[],fenlei:[]};
function select(state=INIT_STATE,action) {
    state=JSON.parse(JSON.stringify(state));
    switch (action.type){
        case TYPES.LX_SELECT:
            state.select=action.select.data;
            break;
        case TYPES.LX_FENLEI:
            state.fenlei=action.fenlei.data;
    }
    return state;
}
export default select;
