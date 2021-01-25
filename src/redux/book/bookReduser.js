
import {BUY_BOOK} from './bookType'

const intialState={
    numberOfBooks:10
}


const BookReduser =(state=intialState,action)=>{
    switch (action.type) {
        case BUY_BOOK :return{
            ...state,
            numberOfBooks:state.numberOfBooks-1
        }
    
        default:
            return state;
    }

}
export default BookReduser;