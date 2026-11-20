import { permanentRedirect } from 'next/navigation';

export { generateStaticParams } from '@/app/product/[slug]/page';

export default async function ProductsRedirectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  permanentRedirect(`/product/${slug}`);
}


