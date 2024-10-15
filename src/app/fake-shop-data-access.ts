import { IShopDataAccess } from './ishop-data-access';
import { Item } from './item';
import { Order } from './order';

export class FakeShopDataAccess implements IShopDataAccess {
    products = new Array<Item>();

    getProductPrice(productId: number): number {
        for (var i = 0; i < this.products.length; i++) {
            if (this.products[i].getID() === productId) {
                return this.products[i].getUnitPrice();
            }
        }
        throw new Error();
    }

    agregarItem(item: Item):void {
        this.products.push(item);
    }

    save(orderId: number, order: Order): void {
        throw new Error('Method not implemented.');
    }
}
