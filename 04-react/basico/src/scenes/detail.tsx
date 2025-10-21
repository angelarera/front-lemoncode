import React from "react";
import { DetailPod } from "@/pods/detail";
import { useParams } from "react-router-dom";

export const DetailScene: React.FC = () => {
  const { login } = useParams();
  return <DetailPod login={login} />;
};
