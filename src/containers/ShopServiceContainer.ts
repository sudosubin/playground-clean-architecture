import { ShopRepositoryImpl } from "../infrastructures/ShopRepositoryImpl";
import { ShopService, ShopServiceImpl } from "../usecases/ShopService";

export const shopService: ShopService = new ShopServiceImpl(
  new ShopRepositoryImpl()
);
