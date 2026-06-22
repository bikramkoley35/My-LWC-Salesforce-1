import { LightningElement } from 'lwc';

export default class LifecycleHooks extends LightningElement {
    userName = 'Bikram';

    handleNameChange(){
        this.userName='Neha';
    }
    // constructor is called when the component is created. Immediately it is called.
    constructor(){
        super(); // super should be called before calling derived class's constructor as this is derived from LightningElement class....
        console.log('Constructor is called.');
    }
    // connectedCallback is called when the component is inserted into DOM. means when LWC Starts work like fetching data, setting timers or event listeners...
    connectedCallback(){
        console.log('Connected callback is called');
    }
    // renderedCallback is called every time the component is rendered or re-rendered.
    renderedCallback(){
        console.log('Rendered callback is called');
    }
    // disconnectedCallback is called when the component is removed from the DOM. Means we want to do any other things outside the LWC then.... Perfect for cleanup, remove timers, listeners etc..
    disconnectedCallback(){
        console.log('Disconnected callback is called');
    }
    // errorCallback is called when child component throws an error. You can catch and handle it here...
    errorCallback(stack, trace){
        console.log(stack + '---' + trace);
    }
}