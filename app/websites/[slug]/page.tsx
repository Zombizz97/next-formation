import WebsiteHeader from "@/components/ui/WebsiteHeader";
import { WebsiteType } from "@/types/Website";
import { notFound } from "next/navigation";
import fs from "fs";
import path from "path";

async function getWebsites(): Promise<WebsiteType[]> {
  const filePath = path.join(process.cwd(), "public", "websites.json");
  const data = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(data);
}

export async function generateStaticParams() {
  const websites = await getWebsites();
  return websites.map((w) => ({ slug: w.slug }));
}

type WebsitePageProps = {
  params: Promise<{ slug: string }>;
};

export default async function WebsitePage({ params }: WebsitePageProps) {
  const { slug } = await params;
  const websites = await getWebsites();
  const currentWebsite = websites.find((w) => w.slug === slug);

  if (!currentWebsite) {
    notFound();
  }

  return (
    <main>
      <WebsiteHeader website={currentWebsite} />
    </main>
  );
}

