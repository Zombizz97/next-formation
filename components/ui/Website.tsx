"use client";

import { WebsiteDocument } from "@/prismicio-types";
import { PrismicImage } from "@prismicio/react";
import Link from "next/link";
import PinButton from "./PinButton";

export default function Website({ website }: { website: WebsiteDocument }) {
  return (
    <article className="relative">
      <Link href={`/websites/${website.uid}`} className="block">
        <PrismicImage
          field={website.data.img}
          className="rounded-lg"
        />
        <h3 className="mt-4">{website.data.title}</h3>
      </Link>
      <PinButton website={website} className="absolute right-3 top-3 z-10" />
    </article>
  );
}
