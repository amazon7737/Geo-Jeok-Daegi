"use client";
// import Image from "next/image";
// import styles from "./page.module.css";
// import NavbarComponent from "./_components/navbar";
// import BasicLayout from "./BasicLayout";
// import { AppProps } from "next/app";
import { useEffect } from "react";
import ItemScreen from "./items/page";
// import { fetchProducts } from "./api";

export default function Home() {
  async function getData() {
    const response = await fetch("http://localhost:4000/products", {
      method: "GET",
      credentials: "include",
    });
    console.log(response);
    return response;
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    // <>
    //   <NavbarComponent />
    //   <ItemScreen />
    // </>
    <ItemScreen />
  );
}
