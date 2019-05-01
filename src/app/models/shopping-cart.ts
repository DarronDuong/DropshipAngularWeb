import { ShoppingCartItem } from './shopping-cart-item';
import { TouchSequence } from 'selenium-webdriver';

export class ShoppingCart {

    itemList: ShoppingCartItem[] = [];

    constructor(public items: { [key: string]: ShoppingCartItem }) {
        for (let productId in items){
            let item = items[productId];
            this.itemList.push(new ShoppingCartItem(item.product, item.quantity));
        }
    }

    get totalItemsCount(){
        let count = 0;
        for(let productId in this.items){
            count += this.items[productId].quantity;
        }
        return count;
    }

    get totalPrice() {
        let sum = 0;
        for (let productId in this.items)
            sum += this.items[productId].totalPrice;

        return sum;
    }

}