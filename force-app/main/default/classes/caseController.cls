public with sharing class caseController {

    @AuraEnabled(cacheable=true)
    public static List<Case> getCaseInSequence(){
        return [SELECT Id, Origin, Reason, Priority, Subject
        FROM Case
        ORDER BY CreatedDate
        LIMIT 10
        ];
    }
}