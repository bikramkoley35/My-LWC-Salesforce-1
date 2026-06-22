import { LightningElement, api } from 'lwc';

export default class LoadARecord extends LightningElement {
    @api recordId; // by only using this we can see whcih record id has which things only by opening it in salesforce after adding this from edit page
    objectApiName = 'Case'; // If you by mistakenly put another object api name then it will automatically rectify you by telling which object holds that record Id....
    fields =['CaseNumber','Priority','Status'];
}