import {BUY_BAG} from './bagType'

const intialState ={
    numberOfBags:15
}
const BagReducer = (state=intialState,action)=>{
    switch (action.type) {
        case BUY_BAG:return {
            ...state,
            numberOfBags:state.numberOfBags-2
        }

        default:
            return state
    }
}
export default BagReducer;