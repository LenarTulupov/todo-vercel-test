import InputText from "../../ui/input-text/input-text";
import TodoButtons from "./todo-buttons/todo-buttons";
import TodoDropdownContent from "./todo-dropdown-content/todo-dropdown-content";
import TodoItemText from "./todo-item-text/todo-item-text";
import TodoItem from "./todo-item/todo-item";
import TodoList from "./todo-list/todo-list";

export default function TodoContent() {
  return (
    <>
      <div className={styles['todo__input-container']}>
        <InputText
          placeholder="What needs to be done?"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          full
        />
      </div>
      <TodoList full>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            className={styles.item}
            onMouseEnter={() => handleMouseEnter(todo.id)}
            onMouseLeave={handleMouseLeave}
          >
            <TodoItemText text={todo.text} />
            {hoveredItem === todo.id
              ? <TodoButtons />
              : null}
            {hoveredItem === todo.id && isOptionOpen && (
              // <Dropdown targetRef={buttonRef} />
              <TodoDropdownContent />
            )}
            {/* {isOptionOpen ? <Dropdown/> : null} */}
          </TodoItem>
        ))}
      </TodoList >
    </>
  )
};
