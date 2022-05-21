
import {AiFillGithub, AiFillLinkedin} from "react-icons/ai"


export default function Footer () {

    return (
        <div className="developer-info">
            <p className="information">
                <a className="developer-link" href="https://github.com/huyennguuyen">GitHub <AiFillGithub /></a>
                <a className="linkedin" href="https://www.linkedin.com/in/huyen-nguyen-2804b523b/">LinkedIn <AiFillLinkedin/></a>
            </p>
        </div>
    )

}