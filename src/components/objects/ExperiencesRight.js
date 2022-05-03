import Style from './ExperiencesRight.module.css'


export default function ExperiencesRight({ icon, title, text }) {

    return (
        <div className={Style.Conteiner_experiences} data-aos="fade-right">
            <div className={Style.head_experiences}>
                {icon}
                <h3>{title}</h3>
            </div>
            <div className={Style.text}>
              <p>{text}</p>  
            </div>
            
        </div>
    )

}