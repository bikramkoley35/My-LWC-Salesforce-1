import { LightningElement } from 'lwc';

export default class ConditionalRendering extends LightningElement {
    likeStateInverse = false;
    answerStateInverse = false;
    likeStateFilled = false;
    answerStateFilled = false;
    //Conditional rendering
    displaySetting = true;
    displayfirst=false;
    displaysecond=false;
    // Conditional rendering Functions
    handleOption1(event){
        this.displayfirst=true;
        this.displaysecond=false;
    }
    handleOption2(event){
        this.displaysecond=true;
        this.displayfirst=false;
    }

    //Default functions taken from LWC Component library
    handleLikeButtonInverseClick() {
        this.likeStateInverse = !this.likeStateInverse;
    }

    handleAnswerButtonInverseClick() {
        this.answerStateInverse = !this.answerStateInverse;
    }

    handleLikeButtonFilledClick() {
        this.likeStateFilled = !this.likeStateFilled;
    }

    handleAnswerButtonFilledClick() {
        this.answerStateFilled = !this.answerStateFilled;
    }

    
}