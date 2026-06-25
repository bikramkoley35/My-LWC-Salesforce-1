import { LightningElement, wire, track } from 'lwc';
import getSportsPrograms from '@salesforce/apex/SportsProgramController.getSportsPrograms';
import deleteSportsProgram from '@salesforce/apex/SportsProgramController.deleteSportsProgram';

import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { refreshApex } from '@salesforce/apex';

export default class SportsProgramManager extends LightningElement {

    @track programOptions = [];

    selectedProgramId;
    wiredResult;

    @wire(getSportsPrograms)
    wiredPrograms(result) {

        this.wiredResult = result;

        if(result.data){

            this.programOptions = result.data.map(item => {
                return {
                    label: item.Name,
                    value: item.Id
                };
            });
        }
    }

    handleChange(event){
        this.selectedProgramId = event.detail.value;
    }

    handleDelete(){

        deleteSportsProgram({
            programId: this.selectedProgramId
        })
        .then(() => {

            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Success',
                    message: 'Sports Program Deleted Successfully',
                    variant: 'success'
                })
            );

            this.selectedProgramId = null;

            return refreshApex(this.wiredResult);
        })
        .catch(error => {

            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Error',
                    message: error.body.message,
                    variant: 'error'
                })
            );
        });
    }
}