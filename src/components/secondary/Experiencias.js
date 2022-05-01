import ExperiencesRight from '../objects/ExperiencesRight'
import ExperiencesLeaft from '../objects/ExperiencesLeaft'
import Style from './styles/Experiencias.module.css'
import { DiHtml5, DiCss3, DiJavascript, DiBootstrap, DiReact } from "react-icons/di";
import { SiNextdotjs } from "react-icons/si";




export default function Experiencias() {

    return (
        <section id='experiencia' className={Style.experiencias_coteiner}>
            <h2 data-aos="fade-up">Experiencias</h2>
            <ExperiencesRight
                title='Html'
                text='HTML é uma linguagem de marcação utilizada na construção de páginas na Web. Documentos HTML podem ser interpretados por navegadores. A tecnologia é fruto da junção entre os padrões HyTime e SGML. HyTime é um padrão para a representação estruturada de hipermídia e conteúdo baseado em tempo.'
                icon={<DiHtml5 />}
            />
            <ExperiencesLeaft
                title='css'
                text='Cascading Style Sheets é um mecanismo para adicionar estilo a um documento web. O código CSS pode ser aplicado diretamente nas tags ou ficar contido dentro das tags <style>. Também é possível, em vez de colocar a formatação dentro do documento, criar um link para um arquivo CSS que contém os estilos. '
                icon={<DiCss3 />}
            />
            <ExperiencesRight
                title='Js'
                text='JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web.'
                icon={<DiJavascript />}
            />
            <ExperiencesLeaft
                title='Bootstrap'
                text='Bootstrap é um framework web com código-fonte aberto para desenvolvimento de componentes de interface e front-end para sites e aplicações web usando HTML, CSS e JavaScript, baseado em modelos de design para a tipografia,'
                icon={<DiBootstrap />}
            />
            <ExperiencesRight
                title='React'
                text='O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web. É mantido pelo Facebook, Instagram, outras empresas e uma comunidade de desenvolvedores individuais.'
                icon={<DiReact />}
            />
            <ExperiencesLeaft
                title='Next.js'
                text='Next.js é uma estrutura da web de desenvolvimento front-end React de código aberto criada por Vercel que permite funcionalidades como renderização do lado do servidor e geração de sites estáticos para aplicativos da web baseados em React,'
                icon={<SiNextdotjs />}
            />
        </section>
    )

}