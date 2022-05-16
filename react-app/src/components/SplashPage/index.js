import splash from "./splash.jpg"
import "./SplashPage.css"
import hobby from "./hobby.png"

export default function SplashPage () {
    return (
        <>
        <div className="splash">
            <div className="background">
                <h1 className="splash-header">Welcome to Hobby Hub</h1>
                <img src={hobby} className="hobby"></img>
            </div>
        </div>
        </>
    )
}