import Footer from "../components/paramount/footer/Footer";
import Navbar from "../components/paramount/navbar/Navbar";
import NewHeader from "../components/paramount/newheade/NewHeade";
import Projects from "../components/paramount/Projects/Projects";
import styles from '../styles/Global.module.css'

export default function Projetos() {
    return (
      <div className={styles.conteiner}>
          <NewHeader/>
          <Navbar/>
          <Projects/>
          <Footer/>
      </div>
    )
  }