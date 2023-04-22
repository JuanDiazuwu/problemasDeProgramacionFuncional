const fs = require('fs');

class Product {
    constructor(id, description, price, classification, existence, minimumExistence, maximumExistence) {
        this.id = id;
        this.description = description;
        this.price = price;
        this.classification = classification;
        this.existence = existence;
        this.minimumExistence = minimumExistence;
        this.maximumExistence = maximumExistence;
    }
}

class ProductDAO {

    constructor(fileName){
        this.products = [];
        const lines = fs.readFileSync(fileName, 'utf-8').split('\n');
        lines.forEach(lines =>{
            const data = lines.trim().split(',');
            const product = new Product(data[0], data[1], parseFloat(data[2]), data[3], parseInt(data[4]), parseInt(data[5]), parseInt(data[6]));
            this.products.push(product);
        });
    }

    showData(){
        return this.products;
    }

    existenceGreaterThanTwenty(){
        return this.products
        .filter(product => product.existence > 20)
        .length;
    }

    existenceLessThanFifteen(){
        return this.products
        .filter(product => product.existence < 15)
        .length;
    }   

    sameClassificationAndHigherPriceFifteenPointFifty(classification){
        return this.products
        .filter(product => product.classification === classification && product.price > 15.50);
    }

    priceBetweenTwentyPointThirtyAndFortyFive(){
        return this.products
        .filter(product => product.price > 20.30 && product.price < 45.00)
        .map(product => ({
            description: product.description, number: product.id
        }));
    }

    groupedByTheirClassification(){
        const groupedProducts = {};
        this.products.forEach(product =>{
            if(!groupedProducts[product.classification]){
                groupedProducts[product.classification] = 0;
            }
            groupedProducts[product.classification]++;
        });
        return groupedProducts;
    }

}

function main(){
    const dao = new ProductDAO('info.txt');
    console.log(`1) Número de productos con existencia mayor a 20 es: ${dao.existenceGreaterThanTwenty()}`);
    console.log(`2) Número de productos con existencia menos a 15 es: ${dao.existenceLessThanFifteen()}`);
    console.log(`3) Lista de productos con la misma clasificación y precio mayor 15.50 es: ${JSON.stringify(dao.sameClassificationAndHigherPriceFifteenPointFifty(' Higiene '))}`);
    console.log(`4) Lista de productos con precio mayor a 20.30 y menor a 45.00 es: ${JSON.stringify(dao.priceBetweenTwentyPointThirtyAndFortyFive())}`);
    console.log(`5) Número de productos agrupados por su clasificación es: ${JSON.stringify(dao.groupedByTheirClassification())}`)
}

main();