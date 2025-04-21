const SEARCH_TXT_BX_SEL = '#twotabsearchtextbox'
const SEARCH_BTN_SEL = '#nav-search-submit-button'

class AmazonHomePages {
    get searchTxtBxElem(){
        return cy.get(SEARCH_TXT_BX_SEL)
    }

    get searchBtnElem(){
        return cy.get(SEARCH_BTN_SEL)
    } 
}

module.exports = AmazonHomePages