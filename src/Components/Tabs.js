import React from 'react'
import { useState } from 'react'
import styled, { css } from 'styled-components'

const StNameWrap = styled.ul`
  background-color: yellow;
  width: 500px;
  height: 80px;
  margin-bottom: 40px;
`
const StName = styled.li`
  ${(props) => {
    if(props.$names == props.children){
      return css`
        background-color: red;
        color: blue; 
      `
    }
      return css`
        background-color: white;
        color: black;
      `;
    }
  }
  width : 17%;
  height: 40px;
  margin: 20px 20px;
  float: left;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  cursor: pointer;
`

function Tabs() {
  const [names, setNames] = useState("카리나");
  const onStName = (event) => {
    if(event.target === event.currentTarget) return;

    setNames(event.target.textContent)
  }
     
  return (
    <StNameWrap onClick={onStName}>
      <StName $names={names}>카리나</StName>
      <StName $names={names}>윈터</StName>
      <StName $names={names}>닝닝</StName>
      <StName $names={names}>지젤</StName>
    </StNameWrap>
  )
}

export default Tabs