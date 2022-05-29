import { Shop } from "../entities/Shop";
import { GetShopRequest } from "../entities/ShopRequest";

export interface ShopRepository {
  getShops: () => Promise<ReadonlyArray<Shop>>;
  getShop: (request: GetShopRequest) => Promise<Shop>;
}
