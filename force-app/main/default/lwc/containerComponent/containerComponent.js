import { LightningElement, api } from 'lwc';

export default class ContainerComponent extends LightningElement {
    @api productsFound = false;
    // the variables we are using in parent component should be in the child component also which can be assigned from the parent component also or else you can assign it here also...
    // this means you are using parent's variable in child component.... 
    @api productList;
    // variable created for child method called from parent
    parentCalled =false;

    get hasProduct(){
        return this.productsFound == "true" ? true : false;
    }

    // Child method called by Parent
    @api handleParentCall(){
        if(this.parentCalled === false){
            this.parentCalled=true;
        }
        else{
            this.parentCalled=false;
        }
    }
}