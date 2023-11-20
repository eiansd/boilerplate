import React from 'react'
import styled from 'styled-components'
import Tabs from './Tabs'

const StBack = styled.div`
  background-color: green;
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StTitle = styled.div`
  font-size: 40px;
  font-weight: 700;
  color: yellow;
  flex: 1;
  display: flex;
  align-items: center;
`

function Headers() {
  

  return (
    <div>
      <StBack>
      <StTitle>
        에스파 팬래터 함
      </StTitle>
      <Tabs />
      
    </StBack>
    </div>
  )
}

export default Headers