import styled from "styled-components";

export const TaskItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 8px;
  width: 36%;
  margin-top: 16px;
  height: 32px;
  height: 56px;
  background-color: #262626;

  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.06);
  border: #333;
  color: #f2f2f2;
  font-family: Inter;
  font-size: 14px;
  font-weight: 400;
`;

export const TaskName = styled.div`
  color: #f2f2f2;
  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  height: 32px;
  display: flex;
  align-items: center;
`;

export const CheckboxcComponent = styled.input.attrs({ type: "checkbox" })`
  /* creating a custom design */

  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: white;
  border: 1px solid #ddd;
  /* -webkit-appearance: none; */
  cursor: pointer;
`;

export const DeleteButton = styled.button`
  background-color: transparent;
  outline: none;
  height: 32px;
  width: 32px;
  cursor: pointer;
`;
