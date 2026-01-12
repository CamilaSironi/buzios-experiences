import { experiences } from "@/data/experiences";
import ExperienceCard from "@/components/ExperienceCard";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Discover Búzios Experiences</h1>

      <div className={styles.grid}>
        {experiences.map((exp) => (
          <ExperienceCard key={exp.id} experience={exp} />
        ))}
      </div>
    </main>
  );
}
