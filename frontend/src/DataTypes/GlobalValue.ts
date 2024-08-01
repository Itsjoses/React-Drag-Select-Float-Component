// export const defaultComputer: string = r

import { CommandGroup, CommandItem, TaskType } from "./GlobalInterface";

export const computerState = {
    defaultComputer : "default-computer",
    selectedComputer : "selected-computer",
    tempSelectedComputer : "temp-selected-computer",
    successComputer : "success-computer",
    failedComputer : "failed-computer"
}


/**
 * testing vlaue only, prod wil not use this value
 */
export const taskType: TaskType = {type_id:"12", type_name:"predefined", type_description:"bad"}
export  const commandTaskHolder: CommandItem[] = [{task_id:"2", task_name:"task_a", task_icon:"fa fa-skull", type:taskType},{task_id:"2", task_name:"task_a", task_icon:"fa fa-skull", type:taskType},{task_id:"2", task_name:"task_a", task_icon:"fa fa-skull", type:taskType},{task_id:"2", task_name:"task_a", task_icon:"fa fa-skull", type:taskType},{task_id:"2", task_name:"task_a", task_icon:"fa fa-skull", type:taskType}]
export  const commandGroupsHolder: CommandGroup[] = [{group_id:"1", group_name:"Group testing", group_icon:"fa fa-skull", task:commandTaskHolder},{group_id:"1", group_name:"asd", group_icon:"fa fa-skull", task:commandTaskHolder},{group_id:"1", group_name:"Group testing", group_icon:"fa fa-skull", task:commandTaskHolder},{group_id:"1", group_name:"asd", group_icon:"fa fa-skull", task:commandTaskHolder},{group_id:"1", group_name:"Group testing", group_icon:"fa fa-skull", task:commandTaskHolder},{group_id:"1", group_name:"asd", group_icon:"fa fa-skull", task:commandTaskHolder},{group_id:"1", group_name:"Group testing", group_icon:"fa fa-skull", task:commandTaskHolder},{group_id:"1", group_name:"asd", group_icon:"fa fa-skull", task:commandTaskHolder}];
