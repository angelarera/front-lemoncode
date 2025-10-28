import { DetailPod } from "@/pods/rick-and-morty-detail";
import React from "react";
import { useParams } from "react-router-dom";

export const CharactersDetailScene: React.FC = () => {
  const { id } = useParams();
  return <DetailPod id={id} />;
};
