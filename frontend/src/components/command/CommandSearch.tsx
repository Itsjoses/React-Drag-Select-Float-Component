import { MutableRefObject, useEffect, useState } from "react"
import GroupList from "./CommandGroupList";
import CommandList from "./CommandList";
import { CommandGroup, CommandItem, CommandSearchProps } from "../../DataTypes/GlobalInterface";

export default function CommandSearch({queryProp, commandProps, handleMouseOver, handleMouseOverList, handleBlur}:CommandSearchProps) {

    const [commandGroup, setCommandGroups] = useState<CommandGroup[]>([]);
    const [commandItems, setCommandItems] = useState<CommandItem[]>([]);

    useEffect(() =>{
        var groupArr:CommandGroup[] = []
        var itemArr:CommandItem[] = []
        if(commandProps.length == 0) return undefined        

        commandProps.forEach((commandGroup) => {

            if (commandGroup.group_name.toLowerCase().includes(queryProp.toLowerCase())) {
                console.log(commandGroup.group_name);
                groupArr.push(commandGroup)
            } else {
                commandGroup.task.forEach((task) => {
                    if (task.task_name.toLowerCase().includes(queryProp.toLowerCase())) {
                        itemArr.push(task)
                    }
                })
            }
        })
        setCommandGroups(groupArr)
        setCommandItems(itemArr)
        // eslint-disable-next-line react-hooks/exhaustive-deps 
    },[queryProp])


    return (

        <>
            {
                commandGroup.map((item, index) => {
                    return (
                        <GroupList key={index} group={item} onHoverProp={handleMouseOver} ></GroupList>
                    )
                })
            }
            {
                commandItems.map((item, index) => {
                    return (
                        <CommandList key={index} commandItem={item} onHoverProp={handleMouseOverList} handleBlur={handleBlur}></CommandList>
                    )
                })
            }
        </>

    )

}
