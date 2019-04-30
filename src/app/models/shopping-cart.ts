import { ShoppingCartItem } from './shopping-cart-item';

export class ShoppingCart {

    itemList: ShoppingCartItem[] = [];

    constructor(public items: { [key: string]: ShoppingCartItem }) {
        debugger;
        for (let productId in items)
            this.itemList.push(items[productId]);
    }

    get totalItemsCount(){
        let count = 0;
        for(let productId in this.items){
            count += this.items[productId].quantity;
        }
        return count;
    }

}