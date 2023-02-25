import "./style.css"
import liveProjectIcon from "./../../img/icons/live-project.png"

function BtnLinkProject ({link}) {
    return (
        <a href={link} target="_blank" className="btn-outline" rel="noreferrer">
            <img src={liveProjectIcon} alt="linkProject" />
            Live Project
        </a>
    )
}

export default BtnLinkProject