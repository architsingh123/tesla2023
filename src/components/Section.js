import React from 'react'
import styled from 'styled-components'
//
function Section({title,description,leftBtnText,rightBtnText,backgroundimage}) {
  
  return (
    <Wrap bgImage={backgroundimage}>
    
    <ItemText>
        <h1>{title}</h1>
        <p>{description}</p>
      </ItemText>
    
     
      <Buttons>
           <ButtonGroup>
            <LeftButton>
            {leftBtnText}
            </LeftButton>
            {rightBtnText &&
             <RightButton>
            {rightBtnText}
            </RightButton>
            }
            <RightButton>
            {rightBtnText}
            </RightButton>
            </ButtonGroup>
      <DownArrow src='/images/down-arrow.svg'/>
      </Buttons>
    </Wrap>
  )
}

export default Section
const Wrap=styled.div
`
width:100vw;
height:100vh;
background-size:cover;
background-position:center;
background-repeat:no-repeat;
background-image:url({background-image});
display:flex;
flex-direction:column;
justify-content:space-between;
overflow-x:hidden;
background-image: ${props => `url("/images/${props.bgImage}")`};

`
const ItemText=styled.div
`
padding-top:15vh;
text-align:center;

`
const ButtonGroup=styled.div
` display:flex;
flex-direction:column;
align-items:center;
margin-bottom:30px;
@media (max-width:768px){
  flex-direction:column;
}
`
const LeftButton=styled.div
` background-color:rgba(23,26,32,0.8);
cursor:pointer;
height:40px;
width:256px;
color:white;
display:flex;
justify-content:center;
align-item:center;
border-radius:100px;
opacity:0.85;
text-transform:uppercase;
font-size:12px;
margin-bottom:10px;
margin:8px;
`

const RightButton=styled(LeftButton)
`
background-color:white;
opacity:0.65;
color:black;

`
const DownArrow=styled.img
`
height:40px;
animation:animateDown infinite 1.5s;
cursor:pointer;
overflow-x:hidden;
`
const Buttons=styled.div
`
align-items:center;
`