import { LightningElement } from 'lwc';

export default class ReactivityCheck extends LightningElement {
    userAddress = 'Panchghara';

    updateAddress(){
        this.userAddress = 'Begampur';
    }
}