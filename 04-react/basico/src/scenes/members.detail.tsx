import React from "react";
import { DetailPod } from "@/pods/members-detail";
import { useParams } from "react-router-dom";

export const MembersDetailScene: React.FC = () => {
  const { login } = useParams();
  return <DetailPod login={login} />;
};
