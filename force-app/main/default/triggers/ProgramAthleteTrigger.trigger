trigger ProgramAthleteTrigger on Program_Athlete__c (before insert,before update){

    for(Program_Athlete__c pa : Trigger.new){

        if(Trigger.isInsert){
            pa.Registration_Status__c='Confirmed';
        }

        if(Trigger.isUpdate){

            Program_Athlete__c oldRec =Trigger.oldMap.get(pa.Id);

            if(oldRec.Registration_Status__c != 'Withdrawn'
                && pa.Registration_Status__c=='Withdrawn'){

                pa.Registration_Status__c='Withdrawn';
            }
        }
    }
}