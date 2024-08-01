import { CommandInputProps } from '../../DataTypes/GlobalInterface';

export default function InputComponent({ onBlurProp,searchRef, queryProp, setQueryProp, subContextAreaRef }: CommandInputProps) {

    const handleOnChange = (value:any) =>{

        setQueryProp(value)
        subContextAreaRef.current.classList.add('hidden');

    }

    return (
        <div>
            <div>
                <div className="relative shadow-sm p-2 bg-white">
                    <input 
                        ref={searchRef}
                        onBlur={(e) => {onBlurProp()}}
                        onChange={e => handleOnChange(e.target.value)}
                        value={queryProp}

                        className="rounded-md w-full py-1.5 pl-2 pr-2"
                        placeholder="Search Command...">
                    </input>
                </div>
            </div>
        </div>

    )

}