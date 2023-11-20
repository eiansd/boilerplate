import React, { useState } from 'react'
import styled from 'styled-components'
import uuid from 'react-uuid'
import dummy from '../Assets/fakeData.json'
import Headers from '../Components/Headers'
import AddForm from '../Components/AddForm'
import LetterList from '../Components/LetterList'



const StNameClick = styled.div`
  width : 20%;
  height: 40px;
  background-color: black;
  color: white;
  margin: 20px 30px;
  float: left;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
`
const StListCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const StList = styled.div`
  width: 600px;
  height: 150px;
  border: 2px solid black;
  margin: 5px;
`
const StNicName = styled.div`
  font-size: 25px;
  font-weight: bold;
  margin: 15px 10px;
`

const StCreatedAt = styled.div`
 font-size: 20px;
 margin: 0px 0px 15px 10px;
`

const StContents = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 15px;
  padding: 10px;
`

function Home() {

  

  return (
    <>
    <Headers>
    
    </Headers>
    
    <LetterList>
      {dummy.map((data) => {        
        return(
          <StListCenter>
            <StList>
              <StNicName>{data.nickname}</StNicName>
              <StCreatedAt>{data.createdAt}</StCreatedAt>
              <StContents>{data.content}</StContents>
           </StList>
          </StListCenter>
        )      
      })} 
    </LetterList>
    <AddForm>

    </AddForm>
    
    </>
  )
}
export default Home