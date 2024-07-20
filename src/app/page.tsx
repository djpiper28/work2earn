"use client";
import { Button, Heading, Paragraph, Table } from "govuk-react";

export default function Home() {
  return (
    <Table>
      <Heading level={1}>Work 2 Earn</Heading>
      <Paragraph>
        Work 2 Earn is a platform that connects people who need help with people
        who can help.
      </Paragraph>
      <Heading level={2}>How it works</Heading>
      <Paragraph>
        People who need help can post a job. People who can help can apply for
        the job.
      </Paragraph>
      <Button as="a" href="/jobs">
        View jobs
      </Button>
      <Heading level={2}>Post a job</Heading>
      <Paragraph>
        If you need help, you can post a job. People who can help can apply for
        the job.
      </Paragraph>
      <Button as="a" href="/post-job">
        Post a job
      </Button>
    </Table>
  );
}
