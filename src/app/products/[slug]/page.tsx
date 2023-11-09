import { getProduct, getProducts } from "@/app/service/products";
import { notFound } from "next/navigation";

// export const revalidate = 2;

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params: { slug } }: Props) {
  const product = await getProduct(slug);
  if (!product) {
    notFound();
  }
  return {
    title: `Items | ${product.name}`,
  };
}

export default async function ProductPage({ params: { slug } }: Props) {
  // 서버 파일에  있는 데이터중 해당 제품의 정보를 찾아서 그걸 보여줌
  const product = await getProduct(slug);
  if (!product) {
    notFound();
  }
  return <h1>{product.name} 제품 설명 페이지</h1>;
}

export async function generateStaticParams() {
  // 모든 제품의 페이지들을 미리 만들어 둘 수 있게 해줄거임 (SSG)
  const products = await getProducts();
  return products.map((product) => ({
    slug: product.id,
  }));
}
