import styles from './Perfil.module.css';

const perfil = ({nomeDeUsuario}) => {    
    return (      
        <header className={styles.header}>
            <img className={styles.avatar} src={`https://github.com/${nomeDeUsuario}.png`} alt="" />
            <h1 className={styles.name}>{nomeDeUsuario}</h1>
        </header>
    )
}

export default perfil