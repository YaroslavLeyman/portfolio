import "./style.css"

import gitHub from "./../../img/icons/gitHub.svg"
import telegram from "./../../img/icons/telegram.svg"

function Footer () {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <ul className="social">
                        <li className="social__item"><a href="https://github.com/YaroslavLeyman" target="_blank" rel="noreferrer"><img src={gitHub} alt="Link" /></a></li>
                        <li className="social__item"><a href="https://t.me/Yaroslav_lmn" target="_blank" rel="noreferrer"><img src={telegram} alt="Link" /></a></li>
                    </ul>
                    <div className="copyright">
                        <p>© 2024 Yaroslav Leiman</p>
                    </div>
                </div>
            </div>
      </footer>
    )
}

export default Footer