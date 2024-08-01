import {MutableRefObject} from 'react'
import { IconType } from "react-icons";

export interface XYCoord {
  x: number;
  y: number;
}

export interface CommandContextMenuProps{
  containerRef: MutableRefObject<any>, 
}

export interface CommandGroupListProps{
  onHoverProp:(e: any, commands: CommandItem[]) => Promise<void>
  group:CommandGroup
}

export interface CommandGroup {
  group_id: string;
  group_name: string;
  group_icon: string;
  task: CommandItem[];
}

export interface CommandItem {
  task_id: string;
  task_name: string;
  task_icon: string;
  type: TaskType;
}

export interface CommandListProps{
  commandItem:CommandItem
  handleBlur: () => void
  onHoverProp:any | undefined | null
}

export interface CommandSearchProps{
  queryProp:string,
  commandProps: CommandGroup[],
  handleMouseOver: any,
  handleMouseOverList: any,
  handleBlur: ()=>void
}

export interface CommandInputProps{

  onBlurProp:any,
  searchRef: MutableRefObject<any>,
  setQueryProp:any,
  queryProp:string,
  subContextAreaRef:MutableRefObject<any>
}


export interface TaskType {
  type_id: string;
  type_name: string;
  type_description: string;
}


export interface CustomButtonProps {
  Icon: IconType;
  children: React.ReactNode;
  callback: () => void;
}

export interface ComputerProps{
    children: React.ReactNode,
    id: string
}

export interface UserContextType {
  user: string;
  setUser: React.Dispatch<React.SetStateAction<string>>;
}
export interface ChildrenProps {
  children: React.ReactNode
}

export interface DynamicLayoutProps {
  border: boolean;
  children: React.ReactNode;
}

export interface AxiosTypeProps{
  endpoint: string,
  method: string,
  headers:any,
  body?: any
}
