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
      payment: "100000000000 DOT",
    },
    {
      id: 2,
      name: "Mow my lawn",
      description: "I need someone to mow my lawn.",
      location: "Manchester",
      createdAt: new Date(),
      payment: "2 DOT"
    },
    {
      id: 3,
      name: "Clean my carpet",
      description: "I spilt six pints of oil on it and now it is grim.",
      location: "Liverpool",
      createdAt: new Date(),
      payment: "100000000000 DOT",
    },
    {
      id: 4,
      name: "Fix my bike",
      description: "My bike has a flat tyre.",
      location: "Birmingham",
      createdAt: new Date(),
      payment: "100000000000 DOT",
    },
    {
      id: 5,
      name: "Walk my dog",
      description: "I am too lazy to walk my dog.",
      location: "Leeds",
      createdAt: new Date(),
      payment: "0.000001 DOT",
    }
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
                  children={`This job is in ${job.location}, it was posted at ${job.createdAt.toLocaleString()}. You will be paid ${job.payment}.`}
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
