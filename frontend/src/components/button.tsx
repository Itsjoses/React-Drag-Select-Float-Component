import { CustomButtonProps } from "../DataTypes/GlobalInterface";



export function BlueButton({ children, Icon, callback }: CustomButtonProps) {
  return (
    <button
      className="bg-blue-600 hover:bg-[#338DF3] text-white px-2.5 py-1.5 rounded-lg min-w-[60px] drop-shadow-md select-none"
      onClick={callback}
    >
      <div className="flex items-center">
        <p className="px-2">{children}</p>

        {Icon && (
          <div className="flex items-center">
            <Icon className="text-xl " />
          </div>
        )}
      </div>
    </button>
  );
}

export function RedButton({ children,Icon, callback }: CustomButtonProps) {
  return (
    <button
      className="bg-red-600 hover:bg-[#338DF3] text-white px-2.5 py-1.5 rounded-lg min-w-[60px] drop-shadow-md "
      onClick={callback}
    >
      <div className="flex items-center">
        <p className="px-2">{children}</p>

        {Icon && (
          <div className="">
            <Icon className="text-xl font-black" />
          </div>
        )}
      </div>
    </button>
  );
}
