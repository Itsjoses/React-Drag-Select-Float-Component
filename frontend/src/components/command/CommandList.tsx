import { CommandListProps } from '../../DataTypes/GlobalInterface'

export default function CommandList({ commandItem, onHoverProp,handleBlur}: CommandListProps) {
    const handleOnClick = () =>{
        handleBlur()
    }

    return (
        <>

        <div className='cursor-pointer hover:bg-slate-100'>
            <div>
                <div onMouseOver={onHoverProp} onClick={() => {handleOnClick()}} className="w-full p-2 m-1 flex flex-row">
                    <div><i className={commandItem.task_icon == undefined ? 'fa fa-question' : commandItem.task_icon}/></div>
                    <div className="flex-1 mx-8" >{commandItem.task_name == "" ? "[Unnamed Command]" : commandItem.task_name}</div>
                    <div className='mx-1'>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
