import React from "react";
import "./Post.css";

const Post = (props) =>{
    return <div className="post">
        <img src="https://static.wikia.nocookie.net/die-hard-scenario/images/7/70/DHS-_Elisha_Cuthbert_.jpg" alt="img" />
        {props.text}
        <div>
        <span>like {props.likeCount}</span>
        </div>
    </div>
}

export default Post;