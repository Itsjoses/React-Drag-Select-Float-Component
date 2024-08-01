import React from 'react'
import { CommandGroupListProps } from '../../DataTypes/GlobalInterface'

export default function CommandGroupList({ onHoverProp, group }: CommandGroupListProps) {
  return (
    <div className='cursor-pointer hover:bg-slate-100 command-group-container'>
    <div className='w-full fixed'></div>
    <div>
        <div onMouseEnter={(e) => {onHoverProp(e, group.task)}} className="w-full p-2 m-1 flex flex-row">
            <div><i className={'fa fa-question' }/></div>
            <div className="flex-1 mx-8" >{group.group_name}</div>
            <div className='mx-1'>
            <div><i className={'fa fa-caret-right'}/></div>
            </div>
        </div>
    </div>
</div>
  )
}
