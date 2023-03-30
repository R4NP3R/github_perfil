import { useEffect, useState } from "react"
import styles from './ReposList.module.css';

const reposList = ({ nomeUsuario }) => {
    const [repos, setRepos] = useState([]);
    const [estaCarregando, setestaCarregando] = useState()

    useEffect (() => {
    fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
    .then(res => res.json())
    .then(resJSON => {
        setRepos(resJSON);
    })
    
    }, [nomeUsuario]);

    return (
        <div className="container">
        <ul className={styles.list}>
            {repos.map(repositorio => (
                <li key={repositorio.id} className={styles.listItem}>
                    <div className={styles.itemName}>
                        <b>Nome:</b> {repositorio.name} 
                    </div>
                    <div className={styles.itemLanguage}>
                        <b>Linguagem:</b> {repositorio.language}
                    </div>
                    <div >
                        <a className={styles.itemLink} href={repositorio.html_url} target="_blank">Acesse o repositorio</a>
                    </div>
                </li>
            ))}
        </ul>
        </div>
    )
}

export default reposList