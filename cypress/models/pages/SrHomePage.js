import { HeroComponent } from "../components/sr/heroComponent";

export class SRHomePage{
    HeroComponent(){
        return new HeroComponent(cy.get(HeroComponent.COMP_SEL))
    }
}