import Link from "next/link";

export async function getStaticProps() {
    const websites = await fetch("http://localhost:3000/websites.json").then((res) => res.json());
    console.log("website:", websites)
    return { props: {websites}};
}

type WebsitesPageType = {
    websites: {
        slug: string,
        title: string,
        thumbnail: string|null
    }[];
};
export default function WebsitesPage({websites}: WebsitesPageType) {
    console.log('websites:', websites)
    return <div>
        {websites.map((m, i) => <div key={`post-${i}`}><Link href={`blog/${m.slug}`}>{m.title}</Link></div>)}
    </div>;
}