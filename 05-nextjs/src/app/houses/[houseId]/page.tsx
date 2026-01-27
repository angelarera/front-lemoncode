import React from 'react';
import { Metadata } from 'next';
import { House, api, mapHouseFromApiToVm } from '#pods/house';

interface Props {
  params: Promise<{ houseId: string }>;
}

export const generateMetadata = async (props: Props): Promise<Metadata> => {
  const params = await props.params;
  const house = await api.getHouse(params.houseId);
  return {
    title: `Casa rural - ${house.name}`,
  };
};

const HousePage = async (props: Props) => {
  const params = await props.params;
  const house = await api.getHouse(params.houseId);

  return (
    <>
      <div className="container">
        <House house={mapHouseFromApiToVm(house)} />
      </div>
    </>
  );
};

export default HousePage;
