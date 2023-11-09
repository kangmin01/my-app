import Image from "next/image";
import styles from "./page.module.css";
import os from "os";
import Counter from "@/components/Counter";

export default function Home() {
  console.log("안뇽! - 서버");

  return (
    <>
      <h1>홈페이지!</h1>
      <Counter />
    </>
  );
}
