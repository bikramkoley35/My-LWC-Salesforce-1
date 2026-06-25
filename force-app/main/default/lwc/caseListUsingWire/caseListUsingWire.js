import { LightningElement, wire } from 'lwc';

import getCaseInSequence from '@salesforce/apex/caseController.getCaseInSequence';

export default class CaseListUsingWire extends LightningElement {
    caseList;
    @wire(getCaseInSequence)wiredCases({data,error}){
        if(data){
            this.caseList = data;
        }
        if(error){
            alert('Something went wrong!!!'+ error.body.message);
        }
    };
}