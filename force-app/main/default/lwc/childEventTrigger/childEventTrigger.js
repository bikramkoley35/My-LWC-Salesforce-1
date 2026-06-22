import { LightningElement } from 'lwc';

export default class ChildEventTrigger extends LightningElement {

    selectedProduct={};
    activeProduct;
    handleFiringEvent(){
        this.selectedProduct = {id: '1', name: 'Iphone 17'};
        this.activeProduct = 'Macbook';
        // Now it's showing in the child component but.... 
        // To pass the data/value from child to parent "Custom Events" come in Picture....
        // I am in a child event so if student needs extra sheet in exam he needs to raise hand.... 
        const event = new CustomEvent('sendproductselected', { // sendproductselected is a name for my custom event
            detail: {
                selectedProduct: this.selectedProduct,
                timestamp: new Date().toISOString(),
                selectedBy: 'Bikram Koley',
                activeProd: this.activeProduct
            } // passing the variable/data as a parameter to the parent from child
        });

        // Now my answer sheet is completely full now i have to raise my hand -> so that teacher notices
        this.dispatchEvent(event); // Dispatching event from child to parent is done

    }
}