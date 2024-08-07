import React from 'react'

export default function Info(props) {
    const { ip, latitude, longitude, country_flag, country, city, isp } = props.data;
    return (
        <div className="card-container">
            <span className="info">Info</span>
            <img className="round" src={country_flag} alt={country} />
            <h3>{country}</h3>
            <h6>{city}</h6>
            <p>isp: {isp}</p>
            <div className="footer">
                <p>IP: <span className='blur-style'>{ip}</span></p>
                <p>Latitude: <span className='blur-style'>{latitude}</span></p>
                <p>Longitude: <span className='blur-style'>{longitude}</span></p>
            </div>
        </div>
    )
}
