import React from "react"
import {connect} from 'react-redux'
import {buyBook} from '../redux/index'
const BookContainer = (props)=>{
    return(
        <>
        <h1>Number of Books - {props.numberOfBooks}</h1>
        <button onClick={props.buyBook}>Buy Book</button>
        </>
    )
}

const mapStateToProps = (state)=>{
    return{
        numberOfBooks:state.Book.numberOfBooks
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        buyBook:()=>{
            dispatch(buyBook())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (BookContainer);