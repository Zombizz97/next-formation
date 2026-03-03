import styles from "./Header.module.css";

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.topBar}>
                <div className={styles.logo}>
                    <span className="font-bold">.COM</span>
                </div>
                <nav className={styles.nav}>
                    <a href="#">Ma marque</a>
                    <a href="#">Fonctions</a>
                </nav>
                <div className={styles.searchBar}>
                    <input type="text" placeholder="Recherchez un logo"/>
                </div>
                <div className={styles.actions}>
                    <span>0</span>
                    <button className={styles.btnDark}>Projets</button>
                    <button className={styles.btnAccent}>Vu récemment</button>
                    <span>▼</span>
                    <span>🌐</span>
                </div>
            </div>
            <div className={styles.bottomBar}>
                <div className={styles.logo}>
                    <span className="font-bold">.COM</span>
                </div>
                <nav className={styles.nav}>
                    <a href="#">Ma marque</a>
                    <a href="#">Fonctions</a>
                </nav>
                <div className={styles.searchBar}>
                    <input type="text" placeholder="Recherchez un logo"/>
                </div>
                <div className={styles.actions}>
                    <span>0</span>
                    <a href="#">Vue ensemble</a>
                    <a href="#">Logout</a>
                </div>
            </div>
        </header>
    );
}