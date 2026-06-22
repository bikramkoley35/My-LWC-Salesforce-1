// getRecord, getFieldValue -> uiRecordApi
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
import { LightningElement, api, wire } from 'lwc';
// We have to import the fields using schema
import CASE_NUMBER from '@salesforce/schema/Case.CaseNumber';
import STATUS from '@salesforce/schema/Case.Status';
import PRIORITY from '@salesforce/schema/Case.Priority';

export default class LoadRecordWithoutOutputField extends LightningElement {
    // We don not want to use output fields or view-form or anything else like that 
    // We want to load some specific data from a specific record on our page...
    @api recordId;
    fields = [CASE_NUMBER,STATUS,PRIORITY];

    // $ symbol is used for bifurcation of string literal and variable... we use it to say that it is not string it is variable we want...
    @wire(getRecord, {
        recordId: '$recordId',
        fields: '$fields'
    }) caseVar; // Basically here we are fetching data using wire and caseVar is the variable where the data is storing after fetching... 

    // we have to create a getter to get the data using getFieldValue method
    get casenumber(){
        return getFieldValue(this.caseVar.data, CASE_NUMBER);
    }

    get status(){
        return getFieldValue(this.caseVar.data, STATUS);
    }

    // In wire method when we are assigning it to a variable 
    // wire: variable
    // data + error there are two parts
    // caseVar.data will come if successfully executed
    // caseVar.error will come when there is an error

}