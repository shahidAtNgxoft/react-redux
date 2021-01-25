import {combineReducers} from 'redux'
import bookReduser from "./book/bookReduser"
import BagReducer from './Bag/bagReducer'

const rootReducer = combineReducers({
    Book:bookReduser,
    Bag:BagReducer
})
export default rootReducer;