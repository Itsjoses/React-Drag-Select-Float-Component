import { MutableRefObject } from "react";

export function commandCaculationPos(
    e: any,
    containerRef: MutableRefObject<any>,
    contextContainer: MutableRefObject<any>,
    subContextAreaRef: MutableRefObject<any>
) {

    const mouseX = e.clientX
    const containerLeft = containerRef.current.getBoundingClientRect().left

    const offset = 30;

    //Relative position to computer container
    const relativePos = mouseX - containerLeft

    // Width of context container
    const contextWidth = contextContainer.current.offsetWidth;

    // Width of context submenu
    const subContextWidth = subContextAreaRef.current.offsetWidth;

    // total width of context
    const totalWidth = contextWidth + subContextWidth + offset

    if (relativePos < containerLeft + totalWidth)
        contextContainer.current.style.left = mouseX + totalWidth + "px";
    else
        contextContainer.current.style.left = relativePos - totalWidth + "px";

}

export const isSelectCheck = () => {
	const gridElements = document.querySelectorAll(".computer");
	let isCheck = false;
	gridElements.forEach((element) => {
		if (element.classList.contains("selected-computer")) isCheck = true;
	});
	return isCheck;
};


export function isOverflowRight(
    contextContainer: MutableRefObject<any>,
    subContextAreaRef: MutableRefObject<any>,
) {

    const totalFill = contextContainer.current.getBoundingClientRect().right + subContextAreaRef.current.offsetWidth
    return window.innerWidth < totalFill

}

export function calculateLeftSubPos(
    contextContainer: MutableRefObject<any>,
    subContextAreaRef: MutableRefObject<any>,
) {

    const leftPost = contextContainer.current.getBoundingClientRect().left - subContextAreaRef.current.offsetWidth

    return leftPost

}

export function calculateRightSubPos(
    contextContainer: MutableRefObject<any>,
    subContextAreaRef: MutableRefObject<any>,
) {

    const rightPost = contextContainer.current.getBoundingClientRect().right

    return rightPost


}