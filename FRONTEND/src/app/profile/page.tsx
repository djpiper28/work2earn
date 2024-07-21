"use client";

import { Button, Heading, SectionBreak, Table } from "govuk-react";

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

      <SectionBreak />
      <Heading level={2}>Your Jobs</Heading>
      <Table caption="Your Jobs">
        <Table.Row>
          <Table.Cell>Paint my house</Table.Cell>
          <Table.Cell>London</Table.Cell>
          <Table.Cell>1 DOT</Table.Cell>
          <Table.Cell>Work in progress</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Mow my lawn</Table.Cell>
          <Table.Cell>Manchester</Table.Cell>
          <Table.Cell>1 DOT</Table.Cell>
          <Table.Cell>Done 01/03/1906 @ 2pm</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Clean my carpet</Table.Cell>
          <Table.Cell>Liverpool</Table.Cell>
          <Table.Cell>1 DOT</Table.Cell>
          <Table.Cell>Done 01/03/1906 @ 2pm</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Fix my bike</Table.Cell>
          <Table.Cell>Birmingham</Table.Cell>
          <Table.Cell>1 DOT</Table.Cell>
          <Table.Cell>Done 01/03/1906 @ 2pm</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Walk my dog</Table.Cell>
          <Table.Cell>Leeds</Table.Cell>
          <Table.Cell>1 DOT</Table.Cell>
          <Table.Cell>Done 01/03/1906 @ 2pm</Table.Cell>
        </Table.Row>
      </Table>
    </>
  );
}
