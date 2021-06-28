import React from 'react'
import WhatsHappening from './WhatsHappening'

function RightPart() {
    return (
        <div className="right-part">
            <div className="right-part-content">
                <div className="search">
                    <input type="text" className="search-input" placeholder="Search" />
                </div>
                <WhatsHappening />
            </div>
        </div>
    )
}

export default RightPart
