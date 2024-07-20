"use client";
import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
// import { type Metadata } from "next";

// TODO: have a trpc????
// import { TRPCReactProvider } from "~/trpc/react";
import { Footer, GlobalStyle, Link, Page, TopNav } from "govuk-react";

// export const metadata: Metadata = {
//   title: "Create T3 App",
//   description: "Generated by create-t3-app",
//   icons: [{ rel: "icon", url: "/favicon.ico" }],
// };

export default function RootLayout({ children }: Readonly) {
  const title = "Work 2 Earn";
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <GlobalStyle />
      <body>
        <Page
          header={
            <TopNav
              serviceTitle={
                <TopNav.Anchor as={Link} to="/">
                  {title}
                </TopNav.Anchor>
              }
            >
              <TopNav.NavLink as={Link} to="/">
                Home
              </TopNav.NavLink>
              <TopNav.NavLink as={Link} to="/jobs">
                Jobs
              </TopNav.NavLink>
              <TopNav.NavLink as={Link} to="/Profile">
                My Profile
              </TopNav.NavLink>
            </TopNav>
          }
        >
          {children}
        </Page>
        <div className="flex h-screen" />
        <Footer />
      </body>
    </html>
  );
}
