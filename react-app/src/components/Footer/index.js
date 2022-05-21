
import {AiFillGithub, AiFillLinkedin} from "react-icons/ai"


export default function Footer () {

    return (
        <div className="developer-info">
            <div className="about">
                <div className="information">
                    <div className="inside-information">
                        <p className="more-info">
                            @2022 Hobby Hub
                        </p>
                        <p className="more-info">Created By: Huyen Nguyen </p>
                    </div>
                </div>
                <div className="links">
                    <a className="developer-link" href="https://github.com/huyennguuyen">GitHub <AiFillGithub /></a>
                    <a className="developer-link" href="https://www.linkedin.com/in/huyen-nguyen-2804b523b/">LinkedIn <AiFillLinkedin/></a>
                </div>
            </div>
        </div>
    )

}