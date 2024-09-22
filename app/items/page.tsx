import React from "react";
import Image from "next/image";
import style from "../styles/item.module.css";
// import { fetchProducts } from "../api";
// import { AxiosResponse } from "axios";

export default function ItemScreen() {
  // useEffect(() => {
  //   const response = fetchProducts();
  //   console.log(response);
  // }, []);

  return (
    <div className={style.wrap}>
      <div className={style.card}>
        <Image
          className={style.image}
          src="/images/NS244A-1_grande.jpg"
          width={500}
          height={500}
          alt="이미지가 로드되지 않았네요"
        />
      </div>
    </div>
  );
}

// export async function getServerSideProps() {
//   try {
//     const response = await fetchProducts();
//     console.log(response);
//     return {
//       props: {
//         product: response.data,
//       },
//     };
//   } catch (error) {
//     console.log(error);
//   }
// }
