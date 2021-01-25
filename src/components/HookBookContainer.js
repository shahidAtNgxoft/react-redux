import React from 'react'
import {buyBook} from '../redux/index'
import {useSelector,useDispatch } from 'react-redux'
const HookBookContainer =()=> {
    const numberOfBooks=useSelector(state=>state.Book.numberOfBooks)
    const dispatch=useDispatch();
    return (
        <div>
            <h1>Hook Container</h1>
            <h2>Number of Books - {numberOfBooks}</h2>
            <button onClick={()=>dispatch(buyBook())}>BuyBooks</button>
            
        </div>
    )
}
export default HookBookContainer;
