const {  DemoBlazePage } = require("../models/pages/demoBlazePage");

describe('SR HomePage', () => {

    const PRODUCT_DATA = [
        {"itemName": "Samsung galaxy s6", "itemPrice": "$360"},
        {"itemName": "Nokia lumia 1520","itemPrice": "$820"},
        {"itemName": "Nexus 6", "itemPrice": "$650"}, 
        {"itemName": "Samsung galaxy s7","itemPrice": "$800"}, 
        {"itemName": "Iphone 6 32gb", "itemPrice": "$798"}, 
        {"itemName": "Sony xperia z5","itemPrice": "$328"}, 
        {"itemName": "HTC One M9", "itemPrice": "$706"}, 
        {"itemName": "Sony vaio 15","itemPrice": "$790"},
        {"itemName": "Sony vaio 17", "itemPrice": "$790"}
    ]
    it('should be able to get hero card title', () => {
        cy.visit('https://www.demoblaze.com/');
        new DemoBlazePage().getAllCaraData().then(allCardData => {
            cy.wrap('').then(()=>{
                expect(allCardData).to.be.deep.eq(PRODUCT_DATA);
            }); 
        })
    })
});