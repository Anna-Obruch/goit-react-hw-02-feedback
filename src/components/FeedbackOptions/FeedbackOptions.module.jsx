import styled from '@emotion/styled';

export const OptionsList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 20px;

  margin-top: 20px;
  padding: 0;
`;

export const OptionsItem = styled.li`
list-style-type: none;`;

export const Button = styled.button`
background-color: #CCE5FF;
border: 2px solid #CCE5FF;
border-radius: 8px;
padding: 10px 20px;
font-size: 16px;
color: #000000;
cursor: pointer;

&:hover {
  background-color: #A9D6FF;
  border-color: #A9D6FF;
}
`;