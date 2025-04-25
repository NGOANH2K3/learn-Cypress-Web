import FooterComponent from "../../models/components/FooterComponent";


describe('Footer Component Test', () => {
    
    let footerComp;

    beforeEach(()=> {
        cy.visit('/');
        footerComp = new FooterComponent();
    })

    it('Test for about us column', () => {
        const expectedAboutUsData = 
            {
                "header":"About Us",
                "desc":"We believe performance needs to be validated at every stage of the software development cycle and our open source compatible, massively scalable platform makes that a reality."
            }
        
        footerComp.getAboutUsData().then(actualAboutUsData => {
            cy.log(JSON.stringify(actualAboutUsData))
            cy.wrap('').then(()=>{
                expect(actualAboutUsData).to.eql(expectedAboutUsData)
            })
        }) 
    });
    it('Test for contact us column', () => {
        const expectedContactUsData = {
            header:"Get in Touch",
            address: "2390 El Camino Real" ,
            Phone: "+440 123456 ",
            Email: "demo@blazemeter.com ",
        }
        footerComp.getContactUsData().then(actualContactUsData => {
            cy.wrap('').then(() => {
                expect(actualContactUsData.header).to.equal(expectedContactUsData.header);
                expect(actualContactUsData.desc).to.contains(expectedContactUsData.address);
                expect(actualContactUsData.desc).to.contains(expectedContactUsData.Phone);
                expect(actualContactUsData.desc).to.contains(expectedContactUsData.Email);
            })
        }); 
    });

    
    
});