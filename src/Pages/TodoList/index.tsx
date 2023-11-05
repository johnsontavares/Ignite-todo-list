import { useState } from "react";
import {
  AddNewTaskComponent,
  BodyContent,
  BodyContentForm,
  ButtonAddComponent,
  ButtonContet,
  Description1,
  Description2,
  Header,
  HeaderTasks,
  InputComponent,
  NumberOfTasks,
  NumberOfTasksConcluded,
  Page,
  TasksConcluded,
  TasksConcludedTitle,
  TasksContent,
  TasksCreated,
  TasksCreatedContent,
  TasksCreatedContentCentralized,
  TasksCreatedTitle,
} from "./styles";
import { TaskComponent } from "../../Components/TaskComponent";

interface Task {
  id: number;
  status: boolean;
  name: string;
}

let tasksConcluded: number = 0;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
let tasksTotal: number = 0;

export function Main() {
  const [tasks, SetTasks] = useState<Task[]>([
    { id: 0, status: true, name: "task01" },
    { id: 1, status: false, name: "task02" },
    { id: 2, status: false, name: "task03" },
    { id: 3, status: true, name: "task04" },
    { id: 4, status: true, name: "task05" },
  ]);
  tasksConcluded = tasks.filter((task) => task.status == true).length;
  tasksTotal = tasks.length;

  const [taskName, SetTaskName] = useState("");

  function DeleteItem(id: number) {
    console.log("DeleteItem", id);
    SetTasks((state) => state.filter((item) => item.id != id));
  }

  function ChangeTaskInput(NewTask: React.FormEvent<HTMLFormElement>) {
    console.log("NewTask", NewTask);
    NewTask.preventDefault();

    const NewProject: Task = {
      id: tasks.length + 1,
      status: false,
      name: taskName,
    };

    console.log("NewProject", NewProject);
    SetTasks([...tasks, NewProject]);
    SetTaskName("");
  }

  return (
    <>
      <Page>
        <Header></Header>
        <BodyContentForm onSubmit={ChangeTaskInput}>
          <BodyContent>
            <div
              style={{
                marginTop: -16,
                position: "absolute",
                display: "flex",
                flexDirection: "row",
                width: "98%",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
              }}
            >
              {/* <button onClick={() => DeleteItem(0)} type="button">
                Delete
              </button> */}
              <AddNewTaskComponent>
                <InputComponent
                  placeholder="Adicione uma tarefa"
                  value={taskName}
                  onChange={(event) => SetTaskName(event.target.value)}
                />
              </AddNewTaskComponent>
              <ButtonAddComponent type="submit">
                <ButtonContet>
                  Criar
                  <img src="/src/assets/plus.svg" />
                </ButtonContet>
              </ButtonAddComponent>
            </div>

            <TasksContent>
              <HeaderTasks>
                <TasksCreated>
                  <TasksCreatedTitle>Tarefas criadas</TasksCreatedTitle>
                  <NumberOfTasks>{tasksTotal}</NumberOfTasks>
                </TasksCreated>

                <TasksConcluded>
                  <TasksConcludedTitle>Concluídas</TasksConcludedTitle>
                  <NumberOfTasksConcluded>
                    {tasksConcluded} de {tasksTotal}
                  </NumberOfTasksConcluded>
                </TasksConcluded>
              </HeaderTasks>
            </TasksContent>
            {tasks.length == 0 ? (
              <TasksCreatedContent>
                <TasksCreatedContentCentralized>
                  <img src="src/assets/Clipboard.svg" alt="" />
                  <Description1>
                    Você ainda não tem tarefas cadastradas
                  </Description1>
                  <Description2>
                    Crie tarefas e organize seus itens a fazer
                  </Description2>
                </TasksCreatedContentCentralized>
              </TasksCreatedContent>
            ) : (
              tasks.map((task) => (
                <TaskComponent
                  TaskName={task}
                  key={task.id}
                  DeleteItem={DeleteItem}
                />
              ))
            )}
          </BodyContent>
        </BodyContentForm>
      </Page>
    </>
  );
}
