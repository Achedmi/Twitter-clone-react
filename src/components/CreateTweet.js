import React from 'react'

function CreateTweet() {
    return (
        <div className="CreateTweet">
            <div className="CreateTweet-content">
                <div className="CreateTweet-content-top">
                    <h2>Home</h2>
                    <img src="./assets/1x/outline_more_horiz_white_24dp.png" alt=""/>
                </div>
                <hr className="whats-happening-separator" />
                <div className="CreateTweet-content-mid">
                    <div className="profile-picture"></div>
                    <p>What's happening ?</p>
                </div>
                <div className="CreateTweet-content-bot">
                    <div className="CreateTweet-content-bot-left">
                        <img src="./assets/1x/outline_more_horiz_white_24dp.png" alt=""/>
                        <img src="./assets/1x/outline_more_horiz_white_24dp.png" alt=""/>
                        <img src="./assets/1x/outline_more_horiz_white_24dp.png" alt=""/>
                        <img src="./assets/1x/outline_more_horiz_white_24dp.png" alt=""/>
                        <img src="./assets/1x/outline_more_horiz_white_24dp.png" alt=""/>

                    </div>
                    <div className="CreateTweet-content-bot-right">
                        <div className="tweet-btn">Tweet</div>
                    </div>
                </div>
            </div>
            <hr className="whats-happening-separator"/>            
            <hr className="whats-happening-separator"/>                        
        </div>
    )
}

export default CreateTweet
