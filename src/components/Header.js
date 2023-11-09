import React,{useState} from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
export default function Header() {
  const [BurgerStatus,setBurgerStatus]=useState(false);
  return (
    <Container>
      <a>
        <img src="./images/logo.svg" alt="Logo"/>
      </a>
    <Menu>
          <a href='#'>Model S</a>
          <a href=''>Model 3</a>
           <a href='#'>Model X</a>
          <a href='#'>Model Y</a>
    </Menu>
    <RightMenu>
          <a href='#'>Shop</a>
          <a href='#'>Tesla Account</a>
          <CustomMenu onClick={()=>
            setBurgerStatus(!BurgerStatus)
          }/>
    </RightMenu>
    <BurgerNav show={BurgerStatus}>
    <CloseWrapper>
      <CustomClose onClick={()=>
            setBurgerStatus(!BurgerStatus)
          } />
    </CloseWrapper>
      <li><a href="#">Existing Inventary</a></li>
      <li><a href="#">Used Inventry </a></li>
      <li><a href="#">Trade In</a></li>
      <li><a href="#">Cyber Truck</a></li>
      <li><a href="#">Roadster</a></li>
    </BurgerNav>
    </Container>
    
  )
}
const Container=styled.div
`
top:0;
left:0;
right:0;
margin-top:10px
margin-left:0px;
min-height:60px;
display:flex;
position:fixed;
align-items:center;
padding:0 20px;
z-index=1;
`

const Menu=styled.div
`
display:flex;
align-items:center;
justify-content:center;
flex:1;
a
{
  font-weight:center;
  text-transform:uppercase;
  padding: 0 10px;
  flex-wrap:nowrap;
}
@media(max-width:768px){
  display:none;
}

`
const RightMenu = styled.div
`a
{
  font-weight:center;
  text-transform:uppercase;
  padding: 0 10px;
  flex-wrap:nowrap;
}
`
const CustomMenu=styled(MenuIcon)
`
margin-top:10px;
cursor:pointer;
`
const BurgerNav=styled.div
`
position:fixed;
background:white;
top:0;
bottom:0;
right:0;
width:300px;
z-index:16;
list-style:none;
padding:20px;
display:flex;
flex-direction:column;

text-align:start;
transform:${props=>props.show?'translateX(100%)':'translateX(0)'};
transition:transform .2s ease-in-out;
li{
  padding:15px 0;
  border-bottom:1px solid rgba(0,0,0,0.2);
}
 a{
font-weight:600;
 } 
`
const CustomClose=styled(CloseIcon)
`
cursor:pointer;
`
const CloseWrapper=styled.div
`
display:flex;
justify-content:flex-end;
`

