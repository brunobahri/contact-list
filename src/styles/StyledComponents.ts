import styled from 'styled-components'

export const StyledApp = styled.div`
  text-align: center;
`

export const StyledHeader = styled.header`
  background-color: #282c34;
  min-height: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`

export const StyledTable = styled.table`
  margin: auto;
  width: 80%;
  border-collapse: collapse;

  th,
  td {
    text-align: left;
    padding: 8px;
  }

  th {
    background-color: #007bff;
    color: white;
  }

  tr:nth-child(even) {
    background-color: #f2f2f2;
  }
`

export const StyledButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 80%; // Mesma largura dos inputs para alinhamento
  max-width: 400px; // Mesmo max-width dos inputs para alinhamento
  box-shadow: 0px 2px 2px lightgray;
  transition: background-color 0.3s;
  margin-bottom: 16px;

  &:hover {
    background-color: #0056b3;
  }
`

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column; // Disposição dos elementos em coluna
  align-items: center; // Centraliza os elementos horizontalmente
  justify-content: center;
  gap: 10px; // Espaçamento entre os elementos
  margin: 20px auto;
`

export const StyledInput = styled.input`
  padding: 10px;
  margin-bottom: 10px; // Espaço entre os inputs
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 80%; // Largura relativa ao container do formulário
  max-width: 400px;
`
