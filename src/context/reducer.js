import { legacy_createStore as createStore} from 'redux'
const initialState=JSON.parse(localStorage.getItem("user"))||{
    users:[]
}
console.log(initialState);
const reducer=(state=initialState,action)=>{
    switch(action.type){

        case "REGISTER":
            return{
                ...state,
                users:[...state.users,action.payload]
           
    }
    case "LOGIN":
            return{
                ...state,
                users:action.payload
           
    }
    case "LOGOUT":
            return{
                users:null
           
    }
    default:return state;
}
}
export default createStore(reducer)
