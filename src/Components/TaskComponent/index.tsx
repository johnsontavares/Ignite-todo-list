import { useState } from "react";
import { CheckboxcComponent, DeleteButton, TaskItem, TaskName } from "./style";
import { Trash } from "@phosphor-icons/react";

export function TaskComponent(props: any) {
  const [isChecked, setIsChecked] = useState(props.TaskName.status);
  console.log("props", props);

  // useEffect(() => {
  //   setIsChecked(props.TaskName.status);
  // }, []);

  return (
    <>
      <TaskItem>
        <div
          style={{
            display: "flex",
            width: "32%",
            gap: 8,
            alignItems: "center",
          }}
        >
          <CheckboxcComponent
            type="checkbox"
            onChange={() => setIsChecked((prev: never) => !prev)}
            checked={isChecked}
          />
          <TaskName>{props.TaskName.name}</TaskName>
        </div>
        <DeleteButton
          type="button"
          onClick={() => props.DeleteItem(props.TaskName.id)}
        >
          <Trash size={20} color="white" />
        </DeleteButton>
      </TaskItem>
    </>
  );
}
