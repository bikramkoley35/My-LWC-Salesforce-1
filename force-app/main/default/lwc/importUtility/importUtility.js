import { LightningElement } from 'lwc';
// import from static resources
import gojo from "@salesforce/resourceUrl/Gojo_Logo";
// import from custom label -> always remember for this you have to write "c.yourlabelname"
import showInProd from "@salesforce/label/c.Show_in_Production"; // now if we edit the custom label from salesforce setup then it will show the required details
// import a SVG like static resource only upload it there and import here

//We can get the current logged in user informations using import command
import UserId from "@salesforce/user/Id"; // we can get user id 
//import UserName from "@salesforce/user/Name";
import UserPermission from "@salesforce/userPermission/ViewSetup"; // we can get user permissions from the default permissions set not from custom permission set. Note: We have to give the correct Permission name to see..
// for Custom permission we have to use "@salesforce/customPermission/" in place of userPermission

// To import Device Info we can use formFactor
import DeviceInfo from "@salesforce/client/formFactor";
// We can import locale, lang, dir and currency info using "@salesforce/i18n" 
import lang from "@salesforce/i18n/lang";
import locale from "@salesforce/i18n/locale";
import dir from "@salesforce/i18n/dir";
import currency from "@salesforce/i18n/currency";

export default class ImportUtility extends LightningElement {
    src = gojo;
    id = UserId;
    deviceInfo = DeviceInfo;
    langInfo = lang;
    localeInfo = locale;
    dirInfo = dir;
    currencyInfo = currency;
    
    get showInProduction(){
        return showInProd == "true" ? true : false;
    }

    get hasPermission(){
        //console.log('Imported from permission set' + UserPermission);
        return UserPermission;
    }
}