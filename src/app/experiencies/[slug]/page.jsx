import { notFound } from "next/navigation";
import { experiences } from "@/data/experiences";

export async function generateStaticParams() {
  return experiences.map((exp) => ({
    slug: exp.slug,
  }));
}

export async function generateMetadata({ params }) {

  const { slug } = await params;

  const experience = experiences.find(
    (exp) => exp.slug === slug
  );

  if (!experience) {
    notFound();
  }

  return {
    title: `${experience.title} | Búzios Experiences`,
    description: experience.description,

    openGraph: {
      title: experience.title,
      description: experience.description,
      images: [
        {
          url: experience.image,
          width: 1200,
          height: 630,
          alt: experience.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: experience.title,
      description: experience.description,
      images: [experience.image],
    },
  };
}

export function generateViewport() {
  return {
    width: "device-width",
    initialScale: 1,
  };
}

export default async function ExperienceDetail({ params }) {

    const { slug } = await params;

  const experience = experiences.find(
    (exp) => exp.slug === slug
  );

  if (!experience) {
    notFound();
  }

  return (
    <section>
      <h1>{experience.title}</h1>
      <p>{experience.description}</p>
    </section>
  );
}
