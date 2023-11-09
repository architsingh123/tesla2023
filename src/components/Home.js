import React from 'react'
import Section from './Section'
import styled from 'styled-components'
export default function Home() {
  return (
    <Container>
    <Section
      title="Model S"
      description="Ordering the touchless Delivery"
      backgroundimage="model-s.jpg"
      leftBtnText="Custom order"
      rightBtnText="Existing inventory" />
    <Section
      title="Model Y"
      description="Ordering the touchless Delivery"
      backgroundimage="model-y.jpg"
      leftBtnText="Custom order"
      rightBtnText="Existing inventory" />
    
    <Section
      title="Model 3"
      description="Ordering the touchless Delivery"
      backgroundimage="model-3.jpg"
      leftBtnText="Custom order"
      rightBtnText="Existing inventory" />
    
    <Section
     title="Model X"
      description="Ordering the touchless Delivery"
      backgroundimage="model-x.jpg"
      leftBtnText="Custom order"
      rightBtnText="Existing inventory" />
      <Section
      title="Lowest Cost Solar Panel in America"
      description="Money back gurantee"
      backgroundimage="solar-panel.jpg"
      leftBtnText="Order Now"
      rightBtnText="Learn More" />
      <Section
      title="Solar Roof"
      description="Produce Clean Energy From Your Roof"
      backgroundimage="solar-roof.jpg"
      leftBtnText="Order Now"
      rightBtnText="Learn More" />
      <Section
      title="Accessories"
      description=""
      backgroundimage="accessories.jpg"
      leftBtnText="Shop Now"
      rightBtnText=" " />
    </Container>
     
  )
}
const Container = styled.div
`
height:100vh;

`
        

