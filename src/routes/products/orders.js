const path = require("path");
const fs = require("fs");


const getOrder = (request, response) => {
    const productsFile = path.join(__dirname, '../../../', '/src/db/products', '/all-products.json');
    const productsFileData = fs.readFileSync(productsFile);
    const products = JSON.parse(productsFileData);

    const usersFile = path.join(__dirname, '../../../', '/src/db/users', '/all-users.json');
    const usersFileData = fs.readFileSync(usersFile);
    const users = JSON.parse(usersFileData);
    let responseObj = {};

    console.log(arrNormal(request.body.products).length);

    if (getElementsById(request.body.products).length !== arrNormal(request.body.products).length) {
        responseObj = {
            'status': 'failed',
            'order': null
        }
    } else {
        responseObj = {
            "status": "success",
            "order": {
                "id": "id",
                "user": request.body.user,
                "products": request.body.products,
                "deliveryType": request.body.deliveryType,
                "deliveryAdress": request.body.deliveryAdress
            }
        };
    }


    response.writeHead(200, { "Content-Type": "application/json" });
    response.write(JSON.stringify(responseObj));
    response.end();



};

const arr = [];
fs.readFile(fileOrders, (err, data) => {
    if (err) {
        throw err;
    }
    if (data.length > 0) {
        JSON.parse(data).forEach(el => {
            arr.push(el);
        });
        arr.push(req.body);
        fs.writeFile(fileOrders, JSON.stringify(arr), err => {
            if (err) {
                throw err;
            }
        });
    } else {
        const arrOrd = [];
        arrOrd.push(req.body);
        fs.writeFile(fileOrders, JSON.stringify(arrOrd), err => {
            if (err) {
                throw err;
            }
        });
    }
});

function getElementsById(idArr) {
    const productsFile = path.join(__dirname, '../../../', '/src/db/products', '/all-products.json');
    const products = fs.readFileSync(productsFile);
    const allProductsJS = JSON.parse(products);
    let objectItems = [];

    let idArray = arrNormal(idArr);
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

module.exports = getOrder;