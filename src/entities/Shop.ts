import { Food } from "./Food";

export interface Shop {
  name: string;
  image?: string;
  location: string;
  foods: ReadonlyArray<Food>;
}
