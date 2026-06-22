import { LightningElement } from 'lwc';

export default class CaseStudyNavigation extends LightningElement {

    handleSelect(event) {

        const selectedItem = event.detail.name;

        this.dispatchEvent(
            new CustomEvent('navigation', {
                detail: selectedItem
            })
        );
    }
}