import React from 'react';
import './Post.css';
import Avatar from '@material-ui/core/Avatar';

function Post({ username, caption, image}) {
    return (
        <div className="post">
            <div className="post__header">
            <Avatar 
            className="post__avatar" alt=""
            src="https://avatars1.githubusercontent.com/u/49842187?s=460&u=f40259e1e37e9346d757848196904a23dbd664da&v=4" />
            <h3>{username}</h3>
            </div>
            <img className="post__image" src={image} alt="" />
            <h4 className="post__caption"><strong>{username}</strong> {caption}</h4>
        </div>
    )
}

export default Post;
