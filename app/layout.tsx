import "@/styles/globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PinsHydrator from "@/components/layout/PinsHydrator";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";

export const metadata = {
  title: "Next Formation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL@20..48,100..700,0..1"
        />
      </head>
      <body>
        <Header />
        <PinsHydrator />
        {children}
        <Footer />
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}
