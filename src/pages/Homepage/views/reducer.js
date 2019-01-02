const defaultState = {
    myscroll:null,
    static:false
}
export default (state=defaultState, action)=>{
   if(action.type==="scroll"){
       return {
           myscroll:action.myscroll
       }
   }else if(action.type==="interval"){
       return {
           static:action.static
       }
   }
   return state
}