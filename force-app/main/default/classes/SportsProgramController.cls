public with sharing class SportsProgramController {

    @AuraEnabled(cacheable=true)
    public static List<Sports_Program__c> getSportsPrograms() {
        return [
            SELECT Id, Name
            FROM Sports_Program__c
            ORDER BY Name
        ];
    }

    @AuraEnabled
    public static void deleteSportsProgram(Id programId) {

        Sports_Program__c program = [
            SELECT Id
            FROM Sports_Program__c
            WHERE Id = :programId
            LIMIT 1
        ];

        delete program;
    }
}