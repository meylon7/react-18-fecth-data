import React from "react";
import { useQuery } from "react-query";
import { getDogImage } from "../utils/fetch";

function DogImage() {
  const { data } = useQuery("dog", getDogImage());

  return <img src={data?.url} width={100} />;
}

export default DogImage;