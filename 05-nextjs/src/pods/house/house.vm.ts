// house/vm/house.vm.ts
export interface House {
  id: string;
  name: string;
  description: string;
  location: string;
  bedrooms: number;
  bathrooms: number;
  priceFormatted: string;
  imageUrl: string;
  amenities: string[];
  ratingAverage: number;
}

export const createEmptyHouse = (): House => ({
  id: '',
  name: '',
  description: '',
  location: '',
  bedrooms: 0,
  bathrooms: 0,
  priceFormatted: '',
  imageUrl: '',
  amenities: [],
  ratingAverage: 0,
});
