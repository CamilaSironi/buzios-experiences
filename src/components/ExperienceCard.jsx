import Link from "next/link";
import styles from "./ExperienceCard.module.css";

export default function ExperienceCard({ experience }) {
  return (
    <Link
      href={`/experiencies/${experience.slug}`}
      className={styles.card}
    >
      <img
        src={experience.image}
        alt={experience.title}
        className={styles.image}
      />

      <div className={styles.content}>
        <h3>{experience.title}</h3>
        <p>{experience.duration}</p>
        <span>${experience.price}</span>
      </div>
    </Link>
  );
}
