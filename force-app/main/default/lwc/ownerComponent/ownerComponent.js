import { LightningElement } from 'lwc';

export default class OwnerComponent extends LightningElement {
    productList = [
        {id:'1', name:'MacBook Air', rating:'3/5'},
        {id:'2', name:'MacBook Pro', rating:'4/5'},
        {id:'3', name:'MacBook Neo', rating:'2/5'}
    ];

    callChildMethod(){
        // if the component is multiple or multiple time used then we have to take queryselectorAll method and should be handled in a forEach method to handle all of them
        this.template.querySelector('c-container-component').handleParentCall(); // queryselector will return wnenever first the component name will show up 
        //console.log('Parent Method called the call child method from here');
    }
}