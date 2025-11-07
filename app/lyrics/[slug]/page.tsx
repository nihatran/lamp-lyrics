import { albums } from "@/app/albumData";

// pre-renders (statically generates) all album pages at build time
export async function generateStaticParams() {
  return albums.map((album) => ({
    slug: album.slug,
  }));
}

interface LyricsPageProps {
  params: Promise<{ slug: string }>;
}

export default async function LyricsPage({ params }: LyricsPageProps) {
  const { slug } = await params;

  const album = albums.find((album) => album.slug === slug);

  if (!album) {
    return <div>Album not found</div>;
  }

  return <div></div>;
}
