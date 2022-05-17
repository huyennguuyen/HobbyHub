import splash from "./splash.jpg"
import "./SplashPage.css"
import hobby from "./hobby.png"

export default function SplashPage () {
    return (
        <>
        <div className="splash">
            <div className="background">
                <div className="splash-text">
                    <h1 className="splash-header">Join Hobby Hub to make new connections and expand your knowledge.</h1>
                    <p className="splash-paragraph">Whatever you’re looking to do this year, Hobby Hub can help. People have turned to Meetup to meet people, make friends, find support, grow a business, and explore their interests. Thousands of events are happening every day—join the fun.</p>
                </div>
                <img src={hobby} className="hobby"></img>
            </div>
        </div>
        </>
    )
}