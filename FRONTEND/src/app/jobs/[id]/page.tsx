"use client";

import { Heading, Table, Button, BackLink } from "govuk-react";
import { useParams } from "next/navigation";

export default function Page() {
  const params = useParams();
  const id = params["id"];

  const jobPoster = "Bob Marley";
  const jobDescription =
    "Clean my carpet, I spilt six pints of oil on it and now it is grim. I will pay you in DOT.";
  const jobLocation = "London";
  const payment = "100000000000 DOT";

  return (
    <>
      <BackLink href="/jobs">Back</BackLink>
      <Heading level={1}>Job #{id}</Heading>
      <Table caption="Job Details">
        <Table.Row>
          <Table.CellHeader>Job Poster</Table.CellHeader>
          <Table.Cell>{jobPoster}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.CellHeader>Description</Table.CellHeader>
          <Table.Cell>{jobDescription}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.CellHeader>Location</Table.CellHeader>
          <Table.Cell>{jobLocation}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.CellHeader>Payment</Table.CellHeader>
          <Table.Cell>{payment}</Table.Cell>
        </Table.Row>
      </Table>

      <Button href="/profile">Accept</Button>
    </>
  );
}
