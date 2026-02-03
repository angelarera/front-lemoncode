export type HouseId = string;

export type Review = {
  id: string;
  author: string;
  date: string;
  comment: string;
  rating: number;
};

export type House = {
  id: HouseId;
  name: string;
  description: string;
  address: string;
  city: string;
  country: string;
  bedrooms: number;
  beds: number;
  bathrooms: number;
  price: number;
  image: string;
  amenities: string[];
  reviews: Review[];
  ratingAverage?: number;
};
