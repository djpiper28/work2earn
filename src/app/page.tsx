"use client";
import { Table } from "govuk-react";

export default function Home() {
  return (
    <Table>
      <Table.Row>
        <Table.CellHeader>Header 1</Table.CellHeader>
        <Table.Cell>Row 1</Table.Cell>
      </Table.Row>
    </Table>
  );
}
