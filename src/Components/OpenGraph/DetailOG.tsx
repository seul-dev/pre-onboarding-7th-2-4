import React from "react";
import { amountFormat } from "@/lib/util/amountFormat";
import { Helmet } from "react-helmet-async";

interface Props {
  brand: string;
  name: string;
  amount: number;
  imageUrl: string;
}

const DetailOG = ({ brand, name, amount, imageUrl }: Props) => {
  return (
    <Helmet>
      <meta property="og:type" content="website" />
      <meta property="og:title" content={`${brand} ${name}`} />
      <meta
        property="og:description"
        content={`월 ${amountFormat(amount)} 원`}
      />
      <meta property="og:image" content={imageUrl} />
    </Helmet>
  );
};

export default DetailOG;
