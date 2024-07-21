"use client";
import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";

import {
  Details,
  Footer,
  GlobalStyle,
  Link,
  Page,
  Paragraph,
  TopNav,
} from "govuk-react";
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  const title = "Work 2 Earn";
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <GlobalStyle />
      <body>
        <Page
          header={
            <TopNav
              company="NOT GOV.UK"
              serviceTitle={
                <TopNav.Anchor as={Link} to="/">
                  {title}
                </TopNav.Anchor>
              }
            >
              <TopNav.NavLink as={Link} href="/">
                Home
              </TopNav.NavLink>
              <TopNav.NavLink as={Link} href="/jobs">
                Jobs
              </TopNav.NavLink>
              <TopNav.NavLink as={Link} href="/profile">
                My Profile
              </TopNav.NavLink>
            </TopNav>
          }
        >
          {children}
        </Page>
        <Footer>
          <Paragraph>Built by Sir Kieth Starmey</Paragraph>
          <Details summary="Legal disclaimer">
            <Paragraph>
              Terms and confitions apply, your first born child, your
              mother&apos;s left kidney and your soul will be taken as payment.
              Furthermore you will be required to work for 1000 years in the
              afterlife. All rights reserved. Copyright 1066AD (c).
            </Paragraph>
            <Paragraph>
              Incase you didn&apos;t get it, this is a joke. Please don&apos;t
              sue me.
            </Paragraph>
          </Details>
          <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
            MoRe InFoRmAtIoNs
          </Link>
        </Footer>
      </body>
    </html>
  );
}
