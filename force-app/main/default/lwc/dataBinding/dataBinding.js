import { LightningElement } from 'lwc';

export default class DataBinding extends LightningElement {

    //One Way Binding
    username ='Ravi';
    currentTime = new Date().toLocaleDateString();
    score = 9;
    maxScore=10;
    

    //Two Way Binding
    memberStatus ;
    updateMemberStatus(event){
        this.memberStatus=event.target.value;
        //event.target.value is handy when html is involved otherwise not.
        //event.detail.value also can be used when we are using custom events.
        //alert('I was Changed!!!')
        console.log('Event recieved: '+ typeof(event.target));
        console.log('Event recieved: '+ JSON.stringify(event.target));
        console.log('Event recieved: '+ typeof(event.detail));
        console.log('Event recieved: '+ JSON.stringify(event.detail));
        // JSON.stringify() : Object -> string [Javascript]
        // JSON.serialize() : Object -> string [Apex]
        // JSON.parse() : Parse something in JS.
    }

    //Getter
    totalLessonsWatched = 50;
    _minutesWatched = this.totalLessonsWatched*10; //Backing variable Useful for getters as well as for setters...
    get minutesWatched(){
       return `The Total Watch duration is ${this._minutesWatched} minutes.`;
    }

    //Setter
    set minutesWatched(value){
        this._minutesWatched = value < 1000 ? value : 5000;
    }
    handleWatchChanged(event){
        this.minutesWatched = event.target.value;
    }
}