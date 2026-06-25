trigger contactTrigger on Contact (before insert, after insert, before update) {
    if(Trigger.isUpdate){
        System.debug('Inside Insert Scenario');
        if(Trigger.isBefore){
            System.debug('Inside Before');
            System.debug('New Record: '+Trigger.new);
            System.debug('Old Record: '+Trigger.old);
        }
        else{
            System.debug('Inside After');
        }
    }
}