import { ShoppingCartItem } from './shopping-cart-item';
import { Product } from './product';

export class ShoppingCart {

    itemList: ShoppingCartItem[] = [];

    constructor(public items: { [key: string]: ShoppingCartItem }) {
        this.items = items || { };
        for (let productId in items){
            let item = items[productId];
         
            this.itemList.push(new ShoppingCartItem({
                 ...item, //spread operator (iterate thru item property and assign)
                key: productId }));
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
        for (let productId in this.itemList)
            sum += this.itemList[productId].totalPrice;

        return sum;
    }

    getQuantity(product: Product) {     
        let item = this.items[product.key];
        return item ? item.quantity : 0;
      }
}