import "./style.css"

import gitHub from "./../../img/icons/gitHub.svg"
import telegram from "./../../img/icons/telegram.svg"
import linkedIn from "./../../img/icons/linkedIn.svg"

function Footer () {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <ul className="social">
                        <li className="social__item"><a href="#!"><img src={gitHub} alt="Link" /></a></li>
                        <li className="social__item"><a href="#!"><img src={telegram} alt="Link" /></a></li>
                        <li className="social__item"><a href="#!"><img src={linkedIn} alt="Link" /></a></li>
                    </ul>
                    <div className="copyright">
                        <p>© 2023 Yaroslav Leiman</p>
                    </div>
                </div>
            </div>
      </footer>
    )
}

export default Footer