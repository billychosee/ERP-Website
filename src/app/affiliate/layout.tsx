// src/app/affiliate/layout.tsx


export const metadata = {
  title:
    "ZERP365 Affiliate Program — Earn Commissions for Digital Transformation",
  description:
    "Join the ZERP365 Affiliate Program and earn competitive commissions for every business you bring onboard to Africa's fastest-growing business ERP.",
  openGraph: {
    title: "ZERP365 Affiliate Program — Earn Commissions",
    description:
      "Join the ZERP365 Affiliate Program and earn competitive commissions for every business you bring onboard to Africa's fastest-growing business ERP.",
    url: "https://yourwebsite.com/affiliate",
    siteName: "ZERP365",
    images: [
      {
        url: "/hero_about_zerp365_black_team.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function AffiliateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
