'use client'
import { Button, Caption, Heading, Paragraph } from "govuk-react";

export default function Page() {
  const jobs = [
    {
      id: 1,
      name: "Paint my house",
      description: "I need someone to paint my house.",
    },
    {
      id: 2,
      name: "Mow my lawn",
      description: "I need someone to mow my lawn.",
    },
  ];

  return (
    <>
      <Heading level={1}>Jobs</Heading>
      <Caption as="p">Here are some jobs that people need help with.</Caption>
      <ul>
        {jobs.map((job) => (
          <li key={job.id}>
            <Heading level={2}>{job.name}</Heading>
            <Paragraph>{job.description}</Paragraph>
            <Button as="a" href={`/jobs/${job.id}`}>
              View job
            </Button>
          </li>
        ))}
      </ul>
    </>
  );
}
