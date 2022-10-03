import React from "react"

function Card(props){
    return(
        <div className="card">
            <p>{props.api}</p>
            <p>{props.description}</p>
            <p>{props.auth}</p>
            <p>{props.https}</p>
            <p>{props.cors}</p>
            <a href={props.link}>{props.link}</a>
            <p>{props.category}</p>
        </div>
    )
}

export default Card

