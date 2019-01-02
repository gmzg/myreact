const defaultState = {
    Tab:"first"
}
export default (state=defaultState,action)=>{
    if(action.type=="tab"){
        return {
            Tab:action.tab
        }
    }
    return state
}