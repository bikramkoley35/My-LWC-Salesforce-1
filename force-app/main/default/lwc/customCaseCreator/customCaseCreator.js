import { LightningElement } from 'lwc';
// for creating record i have to import createRecord function from uiRecord api module
import { createRecord } from 'lightning/uiRecordApi';
// we have to import the object api name
import CASE_OBJECT from '@salesforce/schema/Case';
// For dynamically creation of fields
import SUBJECT from '@salesforce/schema/Case.Subject';
import PRIORITY from '@salesforce/schema/Case.Priority';
import DESC from '@salesforce/schema/Case.Description';

export default class CustomCaseCreator extends LightningElement {
    // at first variable creation needed
    subject ='';
    priority='';
    description='';
    // Getter for Options For Priority field
    get options() {
        return [
            { label: 'Low', value: 'low' },
            { label: 'Medium', value: 'medium' },
            { label: 'High', value: 'high' },
        ];
    }

    // After creating values i have to assign them to respective fields with onchange
    populateSubject(event){
        this.subject=event.detail.value;
    }
    populatePriority(event){
        this.priority=event.detail.value;
    }
    populateDescription(event){
        this.description=event.detail.value;
    }

    // After fetching the values now i have to actually talk to the server and create the case record
    // To write await alwas make the function async
    async handleCreateCase(){
        // to pass fields we have to create fields object
        const fields={};
        fields[SUBJECT.fieldApiName]=this.subject;
        fields[PRIORITY.fieldApiName]=this.priority;
        fields[DESC.fieldApiName]=this.description;
        // I have to pass here object api name and the list of fields...
        let recordInput={apiName : CASE_OBJECT.objectApiName, fields};
        await createRecord(recordInput)  // Await basically tells that system have to wait untill this method runs...
        .then((record) => {
            alert('Your Case has been successfully created. The case record id is '+record.id);
        })
        .catch(error => {
            alert('Something went wrong!!!'+ error.body.message);
        });
        // handling error here.. 
    }
}