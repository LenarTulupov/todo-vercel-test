import { createPortal } from "react-dom";
import styles from './dropdown.module.scss';
import { CSSProperties, ReactNode, useEffect, useRef, useState } from "react";
import Divider from "../divider/divider";
import Button from "../button/button";
import { tasksProgress } from "../../../constants/tasks-progress";
import { nanoid } from "nanoid";

interface IDropdown {
  // targetRef: React.RefObject<HTMLElement>;
  // position?: 'top' | 'bottom' | 'left' | 'right';
  children: ReactNode;
}

export default function Dropdown({ /* targetRef, position = 'bottom', */ children }: IDropdown) {
  // const dropdownRoot = document.getElementById("dropdown");
  // const anchorRef = useRef<HTMLDivElement>(null);
  // const [dropdownStyle, setDropdownStyle] = useState<CSSProperties>({});
  const dropdownRoot = document.getElementById("dropdown");


  // useEffect(() => {
  //   if (targetRef.current && anchorRef.current) {
  //     const targetRect = targetRef.current.getBoundingClientRect();
  //     const tooltipRect = anchorRef.current.getBoundingClientRect();

  //     let style: React.CSSProperties = { position: 'absolute' };

  //     switch (position) {
  //       case 'top':
  //         style = { ...style, top: targetRect.top - tooltipRect.height, left: targetRect.left + targetRect.width / 2 - tooltipRect.width / 2 };
  //         break;
  //       case 'bottom':
  //         style = { ...style, top: targetRect.bottom, left: targetRect.left + targetRect.width / 2 - tooltipRect.width / 2 };
  //         break;
  //       case 'left':
  //         style = { ...style, top: targetRect.top + targetRect.height / 2 - tooltipRect.height / 2, left: targetRect.left - tooltipRect.width };
  //         break;
  //       case 'right':
  //         style = { ...style, top: targetRect.top + targetRect.height / 2 - tooltipRect.height / 2, left: targetRect.right };
  //         break;
  //     }

  //     setDropdownStyle(style);
  //   }
  // }, [targetRef, position]);

  if (!dropdownRoot) {
    console.error("Dropdown root element is not found");
    return null;
  }
  return createPortal(
    <div>

    {/* <div
      className={`${styles.dropdown} ${styles[`tooltip-${position}`]}`}
      ref={anchorRef}
      style={dropdownStyle}
    >
      <Button variant="dropdown">Edit</Button>
      <Divider />
      <div>Status:</div>
      <ul>
        {tasksProgress.map((task) => (
            <li key={nanoid()}>
              <Button variant="dropdown">
                {task.status}
              </Button>
            </li>
          ))}
        </ul>
        <Divider />
        <Button variant="dropdown">Delete</Button>
      </div> */}
      </div>,
      dropdownRoot
    )
  };
  