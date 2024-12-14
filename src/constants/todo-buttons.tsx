import { PiDotsThreeOutlineThin } from "react-icons/pi";
import { CiEdit } from "react-icons/ci";
import { GoComment } from "react-icons/go";
import { HiOutlineCalendarDateRange } from "react-icons/hi2";

export const todoButtons = [
  {action: 'edit', icon: <CiEdit />},
  {action: 'date', icon: <HiOutlineCalendarDateRange />},
  {action: 'comment', icon: <GoComment />},
  {action: 'more', icon: <PiDotsThreeOutlineThin />}
]