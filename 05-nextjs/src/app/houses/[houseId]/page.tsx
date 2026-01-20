import React from 'react';
import { Metadata } from 'next';

interface Props {
  params: Promise<{ houseId: string }>;
}

export const generateMetadata = async (props: Props): Promise<Metadata> => {
  const params = await props.params;
  return {
    title: `Casa rural Málaga - ${params.houseId}`,
  };
};

const HousePage = async (props: Props) => {
  const params = await props.params;
  return (
    <>
      <h2>House detail page</h2>
      <p>{params.houseId}</p>
    </>
  );
};

export default HousePage;
