import Image from "next/image";
import styles from "./page.module.css";
import os from "os";
import Counter from "@/components/Counter";

export default function Home() {
  console.log("안뇽! - 서버");

  return (
    <>
      <h1>홈페이지! 버전3!</h1>
      <Counter />
      <Image
        src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="shop"
        width={640}
        height={480}
      />
    </>
  );
}
