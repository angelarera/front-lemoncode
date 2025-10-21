import React from "react";
import * as vm from "../list.vm";

interface Props {
  data: vm.Member;
  onSelect: () => void;
}

export const Member: React.FC<Props> = (props) => {
  const { data, onSelect } = props;

  return (
    <>
      <img src={data.avatar_url} />
      <span>{data.id}</span>
      <span onClick={onSelect}>{data.login}</span>
    </>
  );
};
