import "./style.css"
import gitHubIcon from "./../../img/icons/gitHub-black.svg"

function BtnGitHub ({link}) {
    return (
        <a href={link} target="_blank" className="btn-outline" rel="noreferrer">
            <img src={gitHubIcon} alt="GitHub" />
            GitHub repo
        </a>
    )
}

export default BtnGitHub