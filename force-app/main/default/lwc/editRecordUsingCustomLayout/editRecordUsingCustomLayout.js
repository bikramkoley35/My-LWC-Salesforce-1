import { LightningElement, api } from 'lwc';

export default class EditRecordUsingCustomLayout extends LightningElement {
     @api recordId; // by only using this we can see whcih record id has which things only by opening it in salesforce after adding this from edit page
        objectApiName = 'Case'; // If you by mistakenly put another object api name then it will automatically rectify you by telling which object holds that record Id....
        //fields = ['CaseNumber', 'Priority', 'Status']; This is not needed for custom View record form
        handleFormSuccess(event){
            // As soon as success happens, Reset the form
            this.template.querySelector('lightning-record-edit-form').reset();
        }
}