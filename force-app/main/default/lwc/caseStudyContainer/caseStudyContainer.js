import { LightningElement } from 'lwc';

export default class CaseStudyContainer extends LightningElement {

    selectedItemName = 'search';

    handleNavigation(event) {

        this.selectedItemName = event.detail;
    }

    get isSearch() {
        return this.selectedItemName === 'search';
    }

    get isCalc() {
        return this.selectedItemName === 'calc';
    }

    get isAll() {
        return this.selectedItemName === 'all';
    }

    get isGraph() {
        return this.selectedItemName === 'graph';
    }
}