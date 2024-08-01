import { useEffect, useRef, useState } from "react";
import { BlueButton, RedButton } from "../components/button.tsx";
import DynamicLayout from "../layouts/DynamicLayout.tsx";
import Header from "../layouts/header.tsx";
import Navbar from "../layouts/navbar.tsx";
import {
  GetCursorCoordinate,
  aabbCollision,
  computerColor,
  deselectOnDrag,
  dragChange,
  noneAll,
  resetDrag,
  selectAll,
  selectOnUp,
} from "../libs/DragSelectLibs.ts";
import Computer from "../components/card/computer.tsx";
import { XYCoord } from "../DataTypes/GlobalInterface.ts";
import { computerState } from "../DataTypes/GlobalValue.ts";
import { FaCheck } from "react-icons/fa6";
import { MdCleaningServices } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import InputComputer from "../components/InputComputer.tsx";
import CommandContextMenu from "../components/command/CommandContextMenu.tsx";


export default function Home() {
  const [computerSelected, setComputerSelected] = useState<string[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const divRef = useRef<HTMLDivElement | null>(null);

  let pointerListener: (event: MouseEvent) => void;
  let upListener: (event: MouseEvent) => void;

  let clickState: boolean = false;
  let startCursor: XYCoord = { x: 0, y: 0 };

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.addEventListener("mousedown", handleMouseDown);
      return () => {
        containerRef.current?.removeEventListener("mousedown", handleMouseDown);
      };
    }
  }, []);

  const handleMouseDown = (e: MouseEvent) => {
    if(e.button !== 0) return;
    clickState = true;
    startCursor = GetCursorCoordinate(e, containerRef) ?? { x: 0, y: 0 };
    pointerListener = (event: MouseEvent) => handleMouseMove(event);
    upListener = (event: MouseEvent) => handleMouseUp(event);
    window.addEventListener("pointermove", pointerListener);
    window.addEventListener("mouseup", upListener);
  };

  const handleMouseMove = (e: MouseEvent) => {
    e.preventDefault();
    dragChange(startCursor!, e, containerRef, divRef);
    const gridElements = document.querySelectorAll(".computer");
    gridElements.forEach((element) => {
      if (aabbCollision(element, startCursor!, e, containerRef)) {
        computerColor(element, computerState.tempSelectedComputer);
      } else if (!element.classList.contains(computerState.selectedComputer))
        deselectOnDrag(element);
    });
  };

  const handleMouseUp = (e: MouseEvent) => {
    resetDrag(divRef);
    const gridElements = document.querySelectorAll(".computer");
    gridElements.forEach((element) => {
      selectOnUp(element);
    });
    window.removeEventListener("pointermove", pointerListener);
    window.removeEventListener("mouseup", upListener);
  };
  return (
    <div className="min-h-screen bg-[#EBF0F9] ">
      <CommandContextMenu containerRef={containerRef}/>
      <Header />
      <Navbar />
      <DynamicLayout border={false}>
        <div className="w-full mx-auto m-4 px-4 py-2 flex justify-between bg-white rounded-md drop-shadow-md items-center">
          <div>
            <InputComputer/>
          </div>
          <div className="flex gap-2 items-center">
            <BlueButton Icon={MdCleaningServices} callback={selectAll}>Clear Status</BlueButton>
            <span>|</span>
            <BlueButton Icon={FaCheck} callback={selectAll} >All</BlueButton>
            <RedButton Icon={RxCross2} callback={noneAll}>None</RedButton>
            <span>|</span>
            <BlueButton Icon={FaCheck} callback={selectAll}>Success</BlueButton>
            <RedButton Icon={RxCross2}callback={noneAll}>Failed</RedButton>
          </div>
        </div>
      </DynamicLayout>
      <DynamicLayout border={false}>
        <div className="w-full mx-auto m-4 p-4 bg-white rounded-md drop-shadow-md">
          <div className="border-b border-slate-200 pb-4 flex justify-between items-center">
            <div className="left text-blue-600 font-bold select-none">
              Computers
            </div>
            <div className="right gap-2 flex items-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-2.5 py-1 rounded-md drop-shadow-md">
                Upload File
              </button>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-2.5 py-1 rounded-md drop-shadow-md">
                Request Internet
              </button>
            </div>
          </div>
          <div ref={containerRef} className="relative">
            <div
              className="absolute top-0 left-0 border-dotted border border-black hidden"
              ref={divRef}
            ></div>
            <div className="grid xl:grid-cols-10 lg:grid-cols-8 md:grid-cols-5 sm:grid-cols-4 gap-2 px-4 py-5">
              {Array.from({ length: 41 }, (_, index) => (
                <Computer key={index} id={String(index + 1)}>
                  {index + 1}
                </Computer>
              ))}
            </div>
          </div>
        </div>
      </DynamicLayout>
    </div>
  );
}
