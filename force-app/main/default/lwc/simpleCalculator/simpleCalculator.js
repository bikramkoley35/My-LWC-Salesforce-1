import { LightningElement } from 'lwc';

export default class SimpleCalculator extends LightningElement {
    firstnumber=0;
    secondnumber=0;
    result=0;
    handleFirstNumber(event){
        this.firstnumber = Number(event.target.value);
    }
    handleSecondNumber(event) {
        this.secondnumber = Number(event.target.value);
    }

    add() {
        this.result = this.firstnumber + this.secondnumber;
    }

    sub() {
        this.result = this.firstnumber - this.secondnumber;
    }

    mult() {
        this.result = this.firstnumber * this.secondnumber;
    }

    div() {
        if (this.secondnumber !== 0) {
            this.result = this.firstnumber / this.secondnumber;
        } else {
            this.result = 'Cannot divide by zero';
        }
    }
}