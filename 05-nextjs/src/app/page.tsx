import { getHouseList } from '#pods/house-list/api/house-list.api';
import { HouseList } from '#pods/house-list/house-list.component';
import { mapHouseListFromApiToVm } from '#pods/house-list/house-list.mappers';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Casa rural - Home',
};

const RootPage = async () => {
  const apiHouseList = await getHouseList();
  const houseList = mapHouseListFromApiToVm(apiHouseList);

  return (
    <div className="container">
      <h1 className="list-title">Casas rurales disponibles</h1>
      <HouseList houseList={houseList} />
    </div>
  );
};

export default RootPage;
