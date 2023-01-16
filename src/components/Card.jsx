import React from 'react'
import star from '../assets/star.png'

export default function Card(props) {

    const {
        coverImg, 
        stats, 
        location, 
        title, 
        price, 
        openSpots
    } = props.content

    let badgeText
    if (openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (location === "Online") {
        badgeText = "ONLINE"
    }

    return (
    <div className='card'>
        {badgeText && <div className='card--badge'>{badgeText}</div>}
        <img className='card--image' src={`../src/assets/${coverImg}`} />
        <div className='card--stats'>
            &nbsp;
            <img className='card--star' src={star} />
            &nbsp;
            <span>{stats.rating}</span>
            &nbsp;
            <span className='gray'>({stats.reviewCount})&nbsp;•&nbsp;</span>
            <span className='gray'>{location}</span>
        </div>
        <p>{title}</p>
        <p><span className='bold'>From ${price}</span> / person</p>
    </div>
    )
}
