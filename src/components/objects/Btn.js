
import Style from './Btn.module.css'

export default function Btn({ text, href, target, icon}) {

    return (<a className={Style.a} target={target} href={href}>{icon} {text}</a>)

}