const AmazonHomePages = require("../models/pages/AmazonHomePages");
const AmazonSearchResultPage = require("../models/pages/AmazonSearchResultPage");

describe('Amz Search Test', () => {
    it('should be able to search dining table', () => {
        const SEARCH_TEXT = "Dinning table"
        cy.visit("/");
        let amzHomePage = new AmazonHomePages();
        amzHomePage.searchTxtBxElem.type(SEARCH_TEXT);
        amzHomePage.searchBtnElem.click();

        let amzSearchResultPage = new AmazonSearchResultPage();
        amzSearchResultPage.searchItemElemList.should("not.have.length",0)
    });
});