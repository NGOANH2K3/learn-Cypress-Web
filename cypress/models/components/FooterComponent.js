export default class FooterComponent {
    getColumns = () => {
        return cy.get("#fotcont .caption")
    }
    getColumnHeader = () => {
        return cy.get("h4")
    }
    getDesc = ()=>{
        return cy.get("p")
    }
    getAboutUsData(){
        let aboutusData = {};
        this.getColumns().eq(0).within(()=> {
            this.getColumnHeader().then($header => aboutusData.header = $header.text().trim())
            this.getDesc().then($desc => aboutusData.desc = $desc.text().replace(/\n\s+/g, " ").trim())

        })
        return new Cypress.Promise(resovel => {
            cy.wrap('').then(()=> resovel(aboutusData))
        })
    }
    getContactUsData(){
        let contactusData = {};
        this.getColumns().eq(1).within(()=> {
            this.getColumnHeader().then($header => contactusData.header = $header.text().trim())
            let desc = ""
            this.getDesc().each($descLine => {
                desc = desc + $descLine.text().trim() + " ";
            })
            contactusData.desc = desc ;
            this._getMutiDesc().then(desc => contactusData.desc = desc)

        })
        return new Cypress.Promise(resovel => {
            cy.wrap('').then(()=> resovel(contactusData))
        })
    }

    _getMutiDesc(){
        let desc = ""
        this.getDesc().each($descLine => {
            desc = desc + $descLine.text().trim() + " ";
        })
        return new Cypress.Promise(resovel => {
            cy.wrap('').then(()=> resovel(desc))
        })
    }
    
}