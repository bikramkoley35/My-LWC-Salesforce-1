import { LightningElement, wire } from 'lwc';
// for creating record i have to import createRecord function from uiRecord api module
import { createRecord } from 'lightning/uiRecordApi';
// To get object information directly we have to use getObjectInfo method
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
// we have to import the object api name
import CASE_OBJECT from '@salesforce/schema/Case';
// For dynamically creation of fields
import SUBJECT from '@salesforce/schema/Case.Subject';
import PRIORITY from '@salesforce/schema/Case.Priority';
import DESC from '@salesforce/schema/Case.Description';
import RECID from '@salesforce/schema/Case.RecordTypeId';

export default class CustomCaseCreator extends LightningElement {
    // at first variable creation needed
    subject ='';
    priority='';
    description='';
    recordTypeId='';

    // To fetch the data from object api info we have to use wire method
    @wire(getObjectInfo,{
        objectApiName : CASE_OBJECT
    })caseRecord({data,error}){ // as we know this variable consist data and error we are doing work with data now..
        if(data){
            console.log('Data recieved: '+JSON.stringify(data)); // at first we do a console log from there we understood that there is two type of recordInfos
            let recordTypeDetails = data.recordTypeInfos; // we stored those here in a object named recordTypeDetails
            Object.keys(recordTypeDetails).forEach((key) => { // object.keys enables to look upon the keys of any object and forEach is the loop and key is the variable we created we could have take any other name also
                const recordTypeInfo = recordTypeDetails[key]; // now for every iteration it stores the record based on the key value untill we are not finding that one
                if(recordTypeInfo.name == 'SMS_Community_Cases'){ // whose name matches with this record type info name
                    this.recordTypeId = recordTypeInfo.recordTypeId; // from here we fetched the recordtype id of that info
                }
            })
        }
    }; 
    
    // we are fetching info from Case object and storing it in caseRecord Variable
    // Now from Case record I want to get only recordTypeName
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
        fields[RECID.fieldApiName]=this.recordTypeId;
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

// we can see the record type in Developer Console by using this query
// select id, subject, priority, recordType.Name from case where Createddate = today