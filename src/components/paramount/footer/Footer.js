import Style from './Footer.module.css'
import { TiSocialTwitter, TiSocialGithub, TiSocialInstagram, TiSocialLinkedin } from "react-icons/ti";



export default function Footer() {

    return(
        <footer className={Style.footer_conteiner}>
            <div className={Style.footer_SocialMidia}>
                <a rel="noreferrer" href='https://github.com/ryan1235'><TiSocialGithub/></a>
                <a rel="noreferrer" href='https://twitter.com/ryanluca007123'><TiSocialTwitter/></a>
                <a rel="noreferrer" href='https://www.instagram.com/ryanluca007122/'><TiSocialInstagram/></a>
                <a rel="noreferrer" href='https://www.linkedin.com/in/ryan-luca-839194230/'><TiSocialLinkedin/></a>
            </div>
            <h3>&copy; Ryan luca 2022</h3>
        </footer>
    )

}