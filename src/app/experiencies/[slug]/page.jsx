import { experiences } from "@/data/experiences";

export default async function ExperienceDetail({ params }) {

    const { slug } = await params;

  const experience = experiences.find(
    (exp) => exp.slug === slug
  );

  if (!experience) {
    return <p>Experience not found</p>;
  }

  return (
    <section>
      <h1>{experience.title}</h1>
      <p>{experience.description}</p>
    </section>
  );
}
