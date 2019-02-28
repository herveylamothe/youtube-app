import React, { Component } from "react";

const FeedCard = (props) => {
    return(
        <>
            <img src={props.image} alt='' />
            <p>{props.title}</p>
            <p>{props.channel}</p>
            <p>{props.time}</p>
        
        </>
    )
}

export default FeedCard;