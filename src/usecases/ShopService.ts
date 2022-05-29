import { Shop } from "../entities/Shop";
import { ShopRepository } from "../entities/ShopRepository";
import { GetShopRequest } from "../entities/ShopRequest";

export interface ShopService {
  getShops: () => Promise<ReadonlyArray<Shop>>;
  getShop: (request: GetShopRequest) => Promise<Shop>;
}

export class ShopServiceImpl implements ShopService {
  private readonly repository: ShopRepository;

  constructor(repository: ShopRepository) {
    this.repository = repository;
  }

  public async getShops() {
    return this.repository.getShops();
  }

  public async getShop({ shopId }) {
    return this.repository.getShop({ shopId });
  }
}
