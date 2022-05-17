
import "./SplashPage.css"
import hobby from "./hobby.png"
import first from "./first.jpg"
import second from "./second.jpg"
import third from "./third.jpg"

export default function SplashPage () {
    return (
        <>
        <div className="splash">
            <div className="outside">
                <div className="background">
                    <div className="splash-text">
                        <h1 className="splash-header">Join Hobby Hub to make new connections and expand your knowledge.</h1>
                        <p className="splash-paragraph">Whatever you’re looking to do this year, Hobby Hub can help. People have turned to Hobby Hub to meet people, make friends, find support, grow a business, and explore their interests. Don't miss out on the fun and sign-up!</p>
                    </div>
                    <img src={hobby} className="hobby"></img>
                </div>
                <div className="second-row">
                    <div clasName="image-box">
                        <img src={first} className="splash-image"></img>
                        <p className="first-text">Make new friends</p>
                    </div>
                    <div clasName="image-box"> 
                        <img src={second} className="splash-image"></img>
                        <p className="first-text">Explore the outdoors</p>
                    </div>
                    <div clasName="image-box"> 
                        <img src={third} className="splash-image"></img>
                        <p className="first-text"> Connect over tech</p>
                    </div>      
                </div>
            </div>
        </div>
        </>
    )
}