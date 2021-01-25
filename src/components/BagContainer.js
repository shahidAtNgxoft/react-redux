import React from 'react'
import {buyBag} from '../redux/index'
import {useSelector,useDispatch } from 'react-redux'
const HookBookContainer =()=> {
    const numberOfBags=useSelector(state=>state.Bag.numberOfBags)
    const dispatch=useDispatch();
    return (
        <div>
            <h1>Hook Container</h1>
            <h2>Number of Bags = {numberOfBags}</h2>
            <button onClick={()=>dispatch(buyBag())}>BuyBags</button>
            
        </div>
    )
}
export default HookBookContainer;
