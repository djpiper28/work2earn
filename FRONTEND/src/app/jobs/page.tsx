"use client";
import {
  Button,
  Caption,
  Details,
  Heading,
  Paragraph,
  SectionBreak,
} from "govuk-react";

export default function Page() {
  const jobs = [
    {
      id: 1,
      name: "Paint my house",
      description: "I need someone to paint my house.",
      location: "London",
      createdAt: new Date(),
    },
    {
      id: 2,
      name: "Mow my lawn",
      description: "I need someone to mow my lawn.",
      location: "Manchester",
      createdAt: new Date(),
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
            <Details summary={job.description}>
              <>
                <Paragraph
                  children={`This job is in ${job.location}, it was posted at ${job.createdAt.toLocaleString()}`}
                />
                <Button as="a" href={`/jobs/${job.id}`}>
                  View job
                </Button>
              </>
            </Details>
            <SectionBreak />
          </li>
        ))}
      </ul>
      <Paragraph>Cannot find a job you like? </Paragraph>
      <Button as="a" href="/post-job">
        Post a job
      </Button>
    </>
  );
}
