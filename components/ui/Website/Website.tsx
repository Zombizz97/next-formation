import styles from "./WebsiteCard.module.css";

interface WebsiteCardProps {
    title: string;
    imageSrc: string;
}

export default function WebsiteCard({ title, imageSrc }: WebsiteCardProps) {
    return (
        <div className={styles.card}>
            <div className={styles.imageWrapper}>
                <img src={imageSrc} alt={title} className={styles.image}/>
            </div>
            <div className={styles.info}>
                <span>{title}</span>
            </div>
        </div>
    );
}