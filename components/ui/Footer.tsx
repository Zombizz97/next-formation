import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";

const footerLinks = [
    { id: 1, text: "Voir les sites web", href: "/websites" },
    { id: 2, text: "Voir les couleurs", href: "/colors" },
    { id: 3, text: "Mentions Légales", href: "/mentions" },
    { id: 4, text: "Dashboard", href: "/dashboard" },
    { id: 5, text: "Gestion des cookies", href: "/cookies" },
];

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.logo}>
                <Image src="/logo.svg" alt="Logo" width={40} height={40} />
            </div>

            <nav className={styles.nav} aria-label="Footer navigation">
                {footerLinks.map((link) => (
                    <Link
                        key={link.id}
                        href={link.href}
                        className={styles.navLink}
                    >
                        {link.text}
                    </Link>
                ))}
            </nav>
        </footer>
    );
}
