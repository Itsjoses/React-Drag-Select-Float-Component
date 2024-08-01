import { MutableRefObject, useEffect, useRef, useState } from "react"
import InputComponent from "./InputComponent"
import { calculateLeftSubPos, calculateRightSubPos, commandCaculationPos, isOverflowRight, isSelectCheck } from "../../libs/CommandLibs"
import CommandGroupList from "./CommandGroupList"
import CommandList from "./CommandList"
import { CommandContextMenuProps, CommandGroup, CommandItem, TaskType } from "../../DataTypes/GlobalInterface"
import CommandSearch from "./CommandSearch"
import { commandGroupsHolder } from "../../DataTypes/GlobalValue"

export default function CommandContextMenu({containerRef}:CommandContextMenuProps) {
    const searchRef: MutableRefObject<any> = useRef()
    const subContextAreaRef: MutableRefObject<any> = useRef()
    const contextAreaRef: MutableRefObject<any> = useRef()
    const contextContainer: MutableRefObject<any> = useRef()
    const subContextContainerRef: MutableRefObject<any> = useRef()
    const [commandItems, setCommandItems] = useState<CommandItem[]>([])
    const [commandGroups, setCommandGroups] = useState<CommandGroup[]>([])
    const [query, setQuery] = useState<string>("");

    useEffect(() =>{
        setCommandGroups(commandGroupsHolder)
        console.log(commandGroups);
    },[])

    const handleContextMenu = (e: any) => {
        e.preventDefault()
        e.stopPropagation();

        if(containerRef.current == null) return
        if(isSelectCheck() == false) return
        if (containerRef.current.contains(e.target)) {
            contextContainer.current.style.left = commandCaculationPos(e, containerRef, contextContainer, subContextAreaRef)
            contextAreaRef.current.classList.remove('hidden')
        }
        searchRef.current.focus()
    }

    const handleMouseOver = async (e: any, commands: CommandItem[]) => {
        const containerDiv = e.target.closest(".command-group-container");
        subContextAreaRef.current.style.removeProperty("bottom")

        if (containerDiv) {
            setCommandItems(commands)
            subContextAreaRef.current.classList.remove('hidden');
            // await new Promise(f => setTimeout(f, 50));
            if (isOverflowRight(contextContainer, subContextAreaRef))
                subContextAreaRef.current.style.left = calculateLeftSubPos(contextContainer, subContextAreaRef) + "px"
            else
                subContextAreaRef.current.style.left = calculateRightSubPos(contextContainer, subContextAreaRef) + "px"

            
            /**
             * Subcontext size (fill window)
            */
           subContextAreaRef.current.style.top = containerDiv.getBoundingClientRect().top + "px"
           const subContext = subContextAreaRef.current.getBoundingClientRect()

            if(subContext.height >= window.innerHeight){
                subContextAreaRef.current.style.top = 0 + "px"
                subContextAreaRef.current.style.bottom = window.innerHeight
            }else if(subContext.bottom >= window.innerHeight ){
                
                const calcBot = containerDiv.getBoundingClientRect().bottom 
                const calcTop = containerDiv.getBoundingClientRect().bottom - subContext.height

                if(calcTop <= 0){
                    subContextAreaRef.current.style.top = 0 + "px"
                }else{
                    // console.log(calcBot, calcTop);
                    subContextAreaRef.current.style.top = calcTop + "px"
                }
            }

        }
    }

    const handleOnOverList = (e:any) => {
        subContextAreaRef.current.classList.add('hidden')
    }

    const handleOnBlur = () => {
        setQuery("")
        if(!subContextAreaRef.current || !contextAreaRef.current) return
        subContextAreaRef.current.classList.add('hidden');
        contextAreaRef.current.classList.add('hidden');
    }

    const handleMouseDown = (e: any) => {
        if(contextAreaRef.current == null || subContextAreaRef.current == null) return;
        if (contextAreaRef.current.contains(e.target) || subContextContainerRef.current.contains(e.target)) {
            if (!contextAreaRef.current.classList.contains("hidden"))
                e.stopPropagation()
            e.preventDefault()
        }
    }

    useEffect(() => {
        window.addEventListener('contextmenu', handleContextMenu);
        window.addEventListener('resize', handleOnBlur);
        window.addEventListener('mousedown', handleMouseDown)
        window.addEventListener('scroll', handleOnBlur)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

  return (
    <div ref={contextContainer} draggable="false" className="z-50 flex fixed top-0 bg-white" style={{ maxHeight: '80vh', maxWidth: '100vh' }}>
            <div ref={contextAreaRef} className="hidden">
                <InputComponent searchRef={searchRef} onBlurProp={handleOnBlur} queryProp={query} setQueryProp={setQuery} subContextAreaRef={subContextAreaRef}></InputComponent>
           
                <div className="bg-white drop-shadow-md overflow-y-auto overflow-x-hidden min-h-fit max-h-full">
                       { (query.trim() == "")
                            ? commandGroups.map((item, index) => {
                               return (
                                   <CommandGroupList key={index} onHoverProp={handleMouseOver} group={item}></CommandGroupList>
                                   )
                                })
                            : <CommandSearch handleBlur={handleOnBlur} queryProp={query} commandProps={commandGroups} handleMouseOver={handleMouseOver} handleMouseOverList={handleOnOverList}/>
                            } 
                            
                </div>
            </div>
            <div ref={subContextAreaRef} className="hidden z-50 fixed top-0 overflow-y-auto overflow-x-hidden min-h-fit max-h-full drop-shadow-md">
                <div ref={subContextContainerRef} className="bg-white drop-shadow-md overflow-y-auto overflow-x-hidden min-h-fit max-h-full">
                    {commandItems.map((item, index) => {
                        return (
                            <CommandList key={index} handleBlur={handleOnBlur} commandItem={item} onHoverProp={null}></CommandList>
                        )
                    })}
                </div>
            </div>
        </div>
  )
}
