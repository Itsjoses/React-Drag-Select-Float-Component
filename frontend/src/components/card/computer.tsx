import { useRef } from 'react'
import { computerColor } from '../../libs/DragSelectLibs';
import { computerState } from '../../DataTypes/GlobalValue';
import { ComputerProps } from '../../DataTypes/GlobalInterface';


export default function Computer({children, id} : ComputerProps) {
  const computerRef = useRef<HTMLDivElement | null>(null);

const toggleSelected = () => {
  if(computerRef.current == null) return

  if (computerRef.current?.classList.contains(computerState.selectedComputer)) {
    computerColor(computerRef.current,computerState.defaultComputer)
  }else{
    computerColor(computerRef.current,computerState.selectedComputer)
  }
};

  return (
    <div ref={computerRef} onClick={toggleSelected} id={id} className='computer border-1 shadow-[0_1px_2px_rgba(0,0,0,0.3)] rounded-sm py-3 px-4 select-none flex flex-col jusitfy-center items-center'>
        <p className='flex justify-center items-center'><i className='fa fa-desktop py-0.5'/></p>
        <p>{children}</p>
      </div>
  )
}
