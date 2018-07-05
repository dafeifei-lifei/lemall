import * as TYPES from "./../action-types.js"


let INIT_STATE={
    addBack:0//=>记录加入购物车是否成功
};
function detail(state=INIT_STATE,action) {
    state=JSON.parse(JSON.stringify(state));
    switch (action.type){
        case TYPES.DETAIL_ADD:
            state.addBack=action.result.code;
            break;
    }
    return state;
}
export default detail