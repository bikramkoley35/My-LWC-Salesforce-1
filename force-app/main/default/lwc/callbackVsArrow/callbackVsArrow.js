import { LightningElement } from 'lwc';
 
export default class CallbackVsArrow extends LightningElement {
 
    todaysDateTime = new Date();
 
    updateDateTimeUsingCallback(){
        setInterval(function(){
            this.todaysDateTime = new Date();
            console.log(this.todaysDateTime);
 
        },1000);
 
        }
 
        updateDateTimeUsingLocalVariableApproach(){
            let localThis = this;
            setInterval(function(){
                localThis.todaysDateTime = new Date();
                console.log(localThis.todaysDateTime);
            },1000);
            }
 
            updateDateTimeUsingBindApproach(){
                setInterval(function(){
                    this.todaysDateTime = new Date();
                    console.log(this.todaysDateTime);
                }.bind(this),1000);
 
            }
 
            updateDateTimeUsingArrow()
            {
                setInterval(()=>{
                    this.todaysDateTime = new Date();
                },1000);
            }
 
 
           
 
       
    }