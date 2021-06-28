import React from 'react'

function Tweet1() {
    return (
        <div className="Tweet1">
            <div className="Tweet1-content">
                <div className="Tweet1-content-left">
                    <div className="profile-picture"></div>
                </div>
                <div className="Tweet1-content-mid">
                    <div className="Tweet1-content-mid-top">
                        <span>Scratch</span><label> @Sc4atch .  Jun 27</label>
                    </div>
                    <div className="Tweet1-content-mid-mid">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                    </div>
                    <div className="Tweet1-content-mid-bot">
                    <img src="./assets/1x/outline_more_horiz_white_24dp.png" alt=""/>
                        <img src="./assets/1x/outline_more_horiz_white_24dp.png" alt=""/>
                        <img src="./assets/1x/outline_more_horiz_white_24dp.png" alt=""/>
                        <img src="./assets/1x/outline_more_horiz_white_24dp.png" alt=""/>
                    </div>
                </div>
                <div className="Tweet1-content-right">
                    <img src="./assets/1x/outline_more_horiz_white_24dp.png" alt=""/>
                </div>
            </div>
            <hr className="whats-happening-separator"/> 
        </div>
    )
}

export default Tweet1
