"use client";
import { Heading, Table } from "govuk-react";
import Image from "next/image";
import qrCode from "../../../../public/qr-code.png";

export default function Page() {
  return (
    <>
      <Heading level={1}>The Future of the work</Heading>
      <Table>
        <Table.Row>
          <Table.Cell>
            <Image src={qrCode} alt="QR Code" width={300} />
          </Table.Cell>
          <Table.Cell>
            <Heading level={3}>
              Decenralised job postings, profiles, and payments. No middlemen.
            </Heading>
            <Heading level={3}>
              Built with high-tech software to ensure accessiblity to all users.
            </Heading>
          </Table.Cell>
        </Table.Row>
      </Table>
    </>
  );
}
