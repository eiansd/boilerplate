import React, { useState } from 'react'
import styled from 'styled-components'
import uuid from 'react-uuid'
import dummy from '../Assets/fakeData.json'


const StBack = styled.div`
  background-color: green;
  width: auto;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: end;
`
const StHeader = styled.div`
  background-color: yellow;
  width: 500px;
  height: 80px;
  margin-bottom: 40px;
`
const StName = styled.div`
  width : 17%;
  height: 40px;
  background-color: white;
  margin: 20px 20px;
  float: left;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
`
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

  const [names, setNames] = useState([
    {
      id: uuid(),
      contnets: "카리나",
    },
    {
      id: uuid(),
      contnets: "윈터",
    },
    {
      id: uuid(),
      contnets: "닝닝",
    },
    {
      id: uuid(),
      contnets: "지젤",
    }
  ])

  return (
    <>
    <StBack>
      <StHeader>
        <div>
          {
            names.map((name) => {
              return (
                <StName>
                  <div>{name.contnets}</div>
                </StName>
              )
            })
          }
        </div>
      </StHeader>
    </StBack>
    <div>
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
    </div>
    
    </>
  )
}
export default Home