import { LightningElement, api, track } from 'lwc';

export default class VariableUnderstanding extends LightningElement {
    //Private Variables
    memberName = 'Bikram';
    myListofBooks =[];
    @track myPersonality={
        age : 35,
        height : '180cm',
        profession : 'Engineer'
    };

    //Public Variable
    @api myFavTeam = 'France';
}