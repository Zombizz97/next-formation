import Title from "@/components/ui/Title";
import { WebsiteType } from "@/types/Website";
import fs from "fs";
import path from "path";
import WebsitesList from "./WebsitesList";

async function getWebsites(): Promise<WebsiteType[]> {
  const filePath = path.join(process.cwd(), "public", "websites.json");
  const data = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(data);
}

export default async function WebsitesPage() {
  const websites = await getWebsites();

  return (
    <main className="px-6 py-12">
      <Title tag="h1" topLine="Découvrez de nouveaux">
        Sites web
      </Title>
      <WebsitesList websites={websites} />
    </main>
  );
}

