const app = require('express')();

const PORT = 3000;

app.listen(
    PORT,
    () => console.log(`Server running on ${PORT}`)
);

app.get('/data', (req, res) => {
    res.send([{ "id": "rec1JZlfCIBOPdcT2", "title": "APPLE iPhone 13", "price": "69,900", "img": "https://www.course-api.com/images/cart/phone-1.png", "amount": 1 }, { "id": "recB6qcHPxb62YJ75", "title": "vivo T2 5G", "price": "25,999", "img": "https://www.course-api.com/images/cart/phone-2.png", "amount": 1 }, { "id": "recdRxBsE14Rr2VuJ", "title": "OnePlus Nord CE 2 Lite", "price": "19,999", "img": "https://www.course-api.com/images/cart/phone-3.png", "amount": 1 }, { "id": "recwTo160XST3PIoW", "title": "SAMSUNG Galaxy F13", "price": "20,999", "img": "https://www.course-api.com/images/cart/phone-4.png", "amount": 1 }])
});