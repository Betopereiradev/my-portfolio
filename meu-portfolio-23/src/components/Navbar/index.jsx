import styles from "./navbar.module.css"

export default function Navbar(){
    return (
        <div className={styles.container}>
            <nav  className={styles.navbar}>
                <div className={styles.logo}>
                    <h2>Alberto</h2>
                </div>
                <div className={styles.links}>
                    <ul>
                        <li><a href="#">
                        Sobre
                        </a></li>
                        <li><a href="#">
                        Skills
                        </a></li>
                        <li><a href="#">
                        Experiência
                        </a></li>
                        <li><a href="#">
                        Projetos
                        </a></li>
                        <li><a href="#">
                        Contato
                        </a></li>
                    </ul>
                    <div className={styles.redes}>
                    
                        <a href="https://github.com/betopereiradev" target="_blank">
                            <img src="../../src/assets/github.png" alt="Github" />
                        </a>
                        <a href="https://www.linkedin.com/in/alberto-pereira-3b71b3275/" target="_blank">
                            <img src="../../src/assets/linkedin.png" alt="Linkedin" />
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    )
}