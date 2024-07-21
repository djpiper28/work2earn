"use client";
import {
  Button,
  Details,
  Heading,
  Paragraph,
  SectionBreak,
  Table,
} from "govuk-react";

export default function Home() {
  return (
    <Table>
      <Heading level={1}>Work 2 Earn</Heading>
      <Paragraph>
        Work 2 Earn is a platform that connects people who need help with people
        who can help. It is funded by the department of levelling down.
      </Paragraph>
      <Paragraph>
        By using the Polkadot blockchain, we can ensure that workers and
        employers are paid fairly and securely. It also means that we can verify
        the identity of both parties, so you can trust that you are working with
        a real person. Reviewing the job history of a worker or employer is also
        possible, so you can make an informed decision before accepting a job or
        hiring someone.
      </Paragraph>

      <Details summary="Polkadot blockchain">
        <Paragraph>
          The Polkadot blockchain is a next-generation blockchain that is
          designed to be fast, secure and scalable. It uses a unique
          architecture that allows multiple blockchains to work together,
          enabling new features and capabilities that are not possible with
          other blockchains.
        </Paragraph>
        <Paragraph>
          We use the blockchain instead of a traditional database because it
          allows us to create a secure and transparent platform that is
          resistant to censorship and fraud. This means that you can trust that
          your data is safe and that you are getting paid fairly for your work.
          As a government service, we are committed to protecting your privacy
          and ensuring that you are treated fairly.
        </Paragraph>
      </Details>
      <Heading level={2}>How it works</Heading>
      <Paragraph>
        People who need help can post a job. People who can help can apply for
        the job.
      </Paragraph>
      <Paragraph>
        You can view jobs that have been posted by other people. If you see a
        job you like, you can apply for it.
      </Paragraph>
      <Paragraph>
        Once you have completed a job, you can mark it as complete. The employer
        will then be able to review your work and pay you for your time.
      </Paragraph>
      <Button as="a" href="/jobs">
        View jobs
      </Button>
      <SectionBreak />
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
