import { ShopRepository } from "../entities/ShopRepository";

export class ShopRepositoryImpl implements ShopRepository {
  public async getShops() {
    return [];
  }

  public async getShop({ shopId }) {
    return {
      name: "",
      location: "",
      foods: [],
    };
  }
}
