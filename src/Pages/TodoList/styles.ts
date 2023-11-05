import styled from "styled-components";

export const Header = styled.div`
  width: 100vw;
  background-color: #0d0d0d;
  height: 16%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  position: relative;
  color: white;
  gap: 8px;
`;

export const Page = styled.div`
  width: 100vw;
  height: 98vh;
  background-color: #1a1a1a;
  display: flex;
  align-items: center;
  position: relative;
  flex-direction: column;
`;

export const AddNewTaskComponent = styled.div`
  height: 32%;
  width: 32%;
  background-color: #262626;
  border: 1px solid #1a1a1a;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

  /* background-color: red; */
  border-color: transparent;
  border-radius: 8px;
`;

export const InputComponent = styled.input`
  width: 100%;
  height: 32px;
  background-color: #262626;
  color: white;
  border: 1px solid transparent;
  border-radius: 0;
  padding: 8px;

  &:focus {
    outline: none;
  }
`;

export const ButtonAddComponent = styled.button`
  height: 32%;
  background-color: #1e6f9f;
  border-radius: 8px;
`;

export const ButtonContet = styled.div`
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 8px;
  color: #f2f2f2;
`;

export const BodyContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const BodyContentForm = styled.form`
  flex-direction: column;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const TasksContent = styled.div`
  width: 36%;
  height: 16%;
  flex-direction: column;
  margin-top: 32px;
`;

export const TasksCreated = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24%;
  gap: 16px;
  /* color: #4ea8de;
  font-family: "Inter";
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal; */
`;

export const TasksConcluded = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 24%;
`;

export const TasksConcludedTitle = styled.div`
  color: #8284fa;
  font-family: Inter;
  font-size: 14px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 24%;
`;

export const TasksCreatedTitle = styled.div`
  color: #4ea8de;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const NumberOfTasks = styled.div`
  background-color: #333;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 24px;
  width: 24px;
  color: #d9d9d9;
  border-radius: 9px;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  gap: 10px;
`;

export const NumberOfTasksConcluded = styled.div`
  background-color: #333;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 24px;
  width: 56px;
  color: #d9d9d9;
  border-radius: 9px;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  gap: 10px;
`;

export const HeaderTasks = styled.div`
  margin-top: 32px;
  display: flex;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const TasksCreatedContent = styled.div`
  width: 36%;
  height: 32%;
  display: flex;
  flex-direction: column;
  border-width: 1px;
  border-top-color: #808080;
  border-radius: 8px;
  border-bottom-color: transparent;
  border-right-color: transparent;
  border-left-color: transparent;
  border-style: solid;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TasksCreatedContentCentralized = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 80%;
  height: 60%;
  gap: 8px;
`;

export const Description1 = styled.div`
  color: #808080;
  text-align: center;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
`;

export const Description2 = styled.div`
  color: #808080;
  text-align: center;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
`;
