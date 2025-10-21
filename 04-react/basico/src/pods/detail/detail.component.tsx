import React from "react";
import { Link } from "react-router-dom";
import { routes } from "@/router";
import { MemberDetail } from "./detail.vm";

interface Props {
  member: MemberDetail;
}

export const Detail: React.FC<Props> = (props) => {
  const { member } = props;

  return (
    <>
      <h2>Hello from Detail page</h2>
      <h3>User Login: {member.login}</h3>
      <p> id: {member.id}</p>
      <p> login: {member.login}</p>
      <p> name: {member.name}</p>
      <p> company: {member.company}</p>
      <p> bio: {member.bio}</p>
      <Link to={routes.root}>Back to list page</Link>
    </>
  );
};
