import { LightningElement } from 'lwc';

export default class CreateRecordsUsingRecordEditForm extends LightningElement {
    handleSubmit(event){
        event.preventDefault(); // It allows you to prevent the default working of the record and after that you can do your things
    }
    handleSuccess(event){
        alert('Your New Case Record has been created.');
    }
}