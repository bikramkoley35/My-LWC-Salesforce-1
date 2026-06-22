import { LightningElement } from 'lwc';

export default class ChildToParentEvents extends LightningElement {
    showFinalValue={};
    selectedProduct = {};
    timestamp;
    selectedBy ='Unkown As of now';
    activeProd;
    // it's the custom function which is handling by the custom event we have created to pass the value from child to parent
    // To access this we have to take event as a parameter as we created that as a variable in child component
    handleProductSelection(event){
        //this.showFinalValue = event.detail;
        const {selectedProduct, timestamp, selectedBy, activeProd} = event.detail;
        this.selectedProduct = selectedProduct;
        this.timestamp=timestamp;
        this.selectedBy = selectedBy;
        this.activeProd = activeProd;
    }
}