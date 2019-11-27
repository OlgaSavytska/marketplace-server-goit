const path = require("path");
const fs = require("fs");
const url = require('url');
const querystring = require('querystring');


const productRequest = (request, response) => {
    let pathName;
    const queryArray = querystring.parse(request.url, '&', "=");
    for (let path in queryArray) {
        pathName = path;
    }

    switch (pathName) {
        case "/products":
            getAllProducts(request, response);
            break;
        case "/products/?ids":
            getProduct(request, response);
            break;
        case "/products/?category":
            getCategory(request, response);
            break;

        default:
            console.log("Nothing");




};


const getProducts = (request, response) => {
    if (request.query.ids !== undefined || request.params.id !== undefined) {
        response.writeHead(200, { "Contend-type": "application/json" });
        response.write(JSON.stringify(getProductById(request.query.ids || request.params.id)));
        response.end();
    } else if (request.query.category !== undefined) {
        response.writeHead(200, { "Contend-type": "application/json" });
        response.write(JSON.stringify(getElementByCategory(request.query.category)));
        response.end();
    }
    else {
        response.writeHead(200, { "Content-type": "application/json" });
        response.write(JSON.stringify(getAllProducts()));
        response.end();
    }

};

function getProductById(id) {
    const productsFile = path.join(__dirname, '../../../', '/src/db/products', '/all-products.json');
    const products = fs.readFileSync(productsFile);

    const responseObj = {
        "status": "success",
        "products": getElementId(id)
    };
    return responseObj;

}

function getAllProducts() {
    const productsFile = path.join(__dirname, '../../../', '/src/db/products', '/all-products.json');
    const products = fs.readFileSync(productsFile);
    const allProductsJS = JSON.parse(products);
    return allProductsJS;
}



const getIdProduct = url => {
    const lastIndex = url.lastIndexOf('=');

    if (lastIndex !== -1) {
        return url.slice(lastIndex + 1);
    }

};

const getProduct = (request, response) => {

    const productsFile = path.join(__dirname, '../../../', '/src/db/products', '/all-products.json');
    const products = fs.readFileSync(productsFile);

    const responseObj = {
        "status": "success",
        "products": getElementId(request.params.id)
    };

    response.writeHead(200, { "Contend-type": "application/json" });
    const parsedUrl = url.parse(request.url);
    const id = getIdProduct(parsedUrl.path);
    const idArray = id.split(',');
    const productsFile = path.join(__dirname, '../../../', '/src/db/products', '/all-products.json');
    const products = fs.readFileSync(productsFile);

    const allProductsJSBooll = products => {
        try {
            allProductsJS = JSON.parse(response);
            return allProductsJS;
        } catch (err) {
            console.error('Error: ', err);
        }
    }


    const responseObj = {
        "status": "success",
        "products": getElementId(id)
    };

    response.writeHead(200, { "Contend-type": "application/json" });
    //response.write(JSON.stringify({ getIdProduct: id}));



};

function getElementId(id) {
    const productsFile = path.join(__dirname, '../../../', '/src/db/products', '/all-products.json');
    const products = fs.readFileSync(productsFile);
    const allProductsJS = JSON.parse(products);
    const objectItems = [];
    const idArray = id.split(',');

    for (let idNumber of idArray) {
        for (let productItem of allProductsJS) {
            idNumber = Number(idNumber);
            if (idNumber === productItem.id) {
                objectItems.push(productItem);
            }
        }
    }
    return objectItems;

}

function getElementByCategory(category) {
    const productsFile = path.join(__dirname, '../../../', '/src/db/products', '/all-products.json');
    const allProductsJS = JSON.parse(products);
    const objectItems = [];
    const categoryArray = category.split(',');

    for (let category of categoryArray) {
        for (let productItem of allProductsJS) {

            if (category === productItem.categories[0]) {

                objectItems.push(productItem);
            }
        }
    }
    return objectItems;

}

const getCategory = (request, response) => {

    const parsedUrl = url.parse(request.url);
    const category = getIdProduct(parsedUrl.path);
    const productsList = getElementByCategory(category);
    let responseObj = {};


    if (productsList.length !== 0) {
        responseObj = {
            "status": "success",
            "products": productsList
        };
    } else {
        responseObj = {
            "status": "no products",
            "products": []
        };
    }






    response.writeHead(200, { "Contend-type": "application/json" });
    response.write(JSON.stringify(responseObj));
    response.end();
};


module.exports = productRequest;
module.exports = getProduct;
module.exports = getProducts;

}

