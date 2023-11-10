import Link from "next/link";
import Image from "next/image";
import { getProducts } from "../service/products";
import MeowArticle from "@/components/MeowArticle";
import clothesImage from "public/images/clothes.jpg";

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <>
      <h1>제품 소개 페이지</h1>
      <Image src={clothesImage} alt="Clothes" />
      <ul>
        {products.map(({ id, name }, index) => (
          <li key={index}>
            <Link href={`products/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
      <MeowArticle />
    </>
  );
}
