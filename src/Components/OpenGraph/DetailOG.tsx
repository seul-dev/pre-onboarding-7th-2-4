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
      <meta
        property="og:site_name"
        content="알티모빌리티 B2C 차량대여 서비스"
      />
      <meta property="og:locale" content="en_US" />
      <meta property="og:title" content={`${brand} ${name}`} />
      <meta
        property="og:description"
        content={`월 ${amountFormat(amount)} 원`}
      />
      <meta property="og:url" content={location.href} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
    </Helmet>
  );
};

export default DetailOG;
