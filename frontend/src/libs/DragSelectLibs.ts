import { XYCoord } from "../DataTypes/GlobalInterface";
import { computerState } from "../DataTypes/GlobalValue";

export const getWidthHeightReal = (startCursor: XYCoord, move : XYCoord) =>{
    return {width : move.x - startCursor.x, height: move.y - startCursor.y}
  } 

  export const resetDrag = (divRef: React.MutableRefObject<HTMLDivElement | null>) =>{
    divRef.current!.style.display = "none";
    divRef.current!.style.height = 0 + "px";
    divRef.current!.style.width = 0 + "px";
  }

export const GetCursorCoordinate = (e: MouseEvent, divRef: React.MutableRefObject<HTMLDivElement | null>) => {
    if (divRef.current) {
      return {
        x: e.clientX - divRef.current.getBoundingClientRect().left,
        y: e.clientY - divRef.current.getBoundingClientRect().top,
      };
    } else {
      return null;
    }
  };

export const dragChange = (startCursor: XYCoord,e: MouseEvent, containerRef: React.MutableRefObject<HTMLDivElement | null>,divRef: React.MutableRefObject<HTMLDivElement | null>) =>{
  if(divRef.current == null) return;
  divRef.current!.style.display = "block";
  const move = GetCursorCoordinate(e,containerRef);
  const XYReal = getWidthHeightReal(startCursor,move!)
  if(divRef.current == null) return
  divRef.current.style.left = Math.min(startCursor.x, move!.x) + "px";
  divRef.current.style.top = Math.min(startCursor.y, move!.y) + "px";
  divRef.current.style.height = Math.abs(XYReal.height) + "px";
  divRef.current.style.width = Math.abs(XYReal.width) + "px";
}

export const aabbCollision = (element: Element,startCursor: XYCoord, e: MouseEvent, containerRef: React.MutableRefObject<HTMLDivElement | null>) => {
  const move = GetCursorCoordinate(e,containerRef)
  const XYReal = getWidthHeightReal(startCursor,move!)
  const rect = element.getBoundingClientRect();
  return (
    Math.min(startCursor.x, move!.x) < rect.left - containerRef.current!.getBoundingClientRect().left + rect.width &&
    Math.min(startCursor.y, move!.y) < rect.top - containerRef.current!.getBoundingClientRect().top + rect.height &&
    Math.min(startCursor.x, move!.x) + Math.abs(XYReal.width) > rect.left - containerRef.current!.getBoundingClientRect().left &&
    Math.min(startCursor.y, move!.y) + Math.abs(XYReal.height) > rect.top - containerRef.current!.getBoundingClientRect().top
  );
};

export const deselectOnDrag = (element: Element) => {
  computerColor(element,computerState.defaultComputer)
};

export const selectOnUp = (element: Element) => {
	if (element.classList.contains(computerState.tempSelectedComputer)) {
    computerColor(element,computerState.selectedComputer)
	}
};

export const selectAll = () => {
	const gridElements = document.querySelectorAll(".computer");

	gridElements.forEach((element) => {
		if (!element.classList.contains("selected")) {
      computerColor(element,computerState.selectedComputer)
		}
	});
};

export const noneAll = () => {
	const gridElements = document.querySelectorAll(".computer");
	gridElements.forEach((element) => {
    computerColor(element,computerState.defaultComputer)
	});
};
export const clearStatus = () => {
	const gridelements = document.querySelectorAll(".computer");
	gridelements.forEach((element) => {
		element.classList.remove("bg-success");
		element.classList.remove("bg-failed");
		element.classList.remove("ui-loading");
	});
};

export const computerColor = (element: Element, state:string) => {
  element.classList.remove("default-computer")
  element.classList.remove("selected-computer")
  element.classList.remove("temp-selected-computer")
  element.classList.remove("failed-computer")
  element.classList.remove("success-computer")
  element.classList.add(state)
}