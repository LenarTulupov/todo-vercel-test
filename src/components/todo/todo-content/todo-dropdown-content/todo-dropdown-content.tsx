import { tasksProgress } from "../../../../constants/tasks-progress";
import Button from "../../../ui/button/button";
import Dropdown from "../../../ui/dropdown/dropdown";
import DropdownItem from "../../../ui/dropdown/dropdown-item/dropdown-item";
import DropdownList from "../../../ui/dropdown/dropdown-list/dropdown-list";
import { nanoid } from "nanoid";

export default function TodoDropdownContent() {
  return (
    <Dropdown>
      <DropdownList>
        {tasksProgress.map((task) => (
          <DropdownItem key={nanoid()}>
            <Button>
              {task.status}
            </Button>
          </DropdownItem>
        ))}
      </DropdownList>
    </Dropdown>
  )
};
