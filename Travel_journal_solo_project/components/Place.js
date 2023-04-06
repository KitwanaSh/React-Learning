import React from "react"
import data from "../data"

function Place(props) {
    return (
        <section>
            <div className = "place-list">
                <img src = {props.imageUrl} className = "place-image" />
                <div className = "left-side">
                    <div className = "loc-detail">
                        <i className="fa-light fa-location-dot"></i>
                        <h4>{props.location}</h4>
                        <p><a href = {props.googleMapsUrl}>View on google location</a></p>
                    </div>
                    <h2>{props.title}</h2>
                    <span className = "date">{props.startDate} - {props.endDate}</span>
                    <p className = "place-desc">{props.description}</p>
                </div>
            </div>
        </section>
    )
}
export default Place