export class menuItem{
    itemName : string;
    category : string;
    price : number;

    constructor(itemName : string,
        category : string,
        price : number){
            this.itemName = itemName;
            this.category = category;
            this.price = price;
    }
}