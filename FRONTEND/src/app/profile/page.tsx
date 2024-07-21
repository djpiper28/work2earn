"use client";

import { Heading, Table } from "govuk-react";

export default function Page() {
  return (
    <>
      <Heading level={1}>Your Profile</Heading>
      <Table caption="Your Profile">
        <Table.Row>
          <Table.Cell>Username</Table.Cell>
          <Table.Cell>John Doe</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Email</Table.Cell>
          <Table.Cell>testing123@gmail.com</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Phone Number</Table.Cell>
          <Table.Cell>1234567890</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Address</Table.Cell>
          <Table.Cell>123 Fake St, Springfield</Table.Cell>
        </Table.Row>
      </Table>
    </>
  );
}
