import React from 'react'
import {FcLike} from 'react-icons/fc'
import {connect} from 'react-redux'
import { incrementLikes, decrementLikes } from '../redux/comment/action'

function Likes(props) {
  return (
    <div  className="dbtn">
        <button disabled = {props.likes == +1} onClick={props.onIncrementLikes}><FcLike/> {props.likes}</button>
        <button disabled = {props.likes === -1} onClick = {props.onDecrementLikes}>Dislike</button>
    </div>
  )
}

function mapStateToProps(state) {
    const{likes} = state;
    return {
        likes: likes.likes
    }
}
function mapDispatchToProps(dispatch) {
    return{
        onIncrementLikes: () => dispatch(incrementLikes()),
        onDecrementLikes: () => dispatch(decrementLikes())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Likes)