import { LightningElement } from 'lwc';

export default class ItratorFrameWork extends LightningElement {
    tasklist=[
        {taskId: '1', taskName: 'Prepare Script', taskPriorirty: 'High',taskProgress: 'In Progress'},
        {taskId: '2', taskName: 'Record Video', taskPriorirty: 'Medium',taskProgress: 'Pending'},
        {taskId: '3', taskName: 'Edit & Upload', taskPriorirty: 'Low',taskProgress: 'Pending'}
    ];
    
}