import React from 'react'

const Aboutresuable = (props) => {
    return (
        <>
            <div className="about_down">
                <img src={props.logo} alt={props.logo} />
                <h5>{props.title}</h5>
            </div>
        </>
    )
}

export default Aboutresuable
