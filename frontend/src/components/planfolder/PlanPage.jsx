import React from 'react'
import "./Planpage.css"
import { Button,  Radio, RadioGroup, Stack } from '@chakra-ui/react'
import { useState } from 'react'
import { CheckIcon, CloseIcon } from '@chakra-ui/icons'
const PlanPage = () => {
const [hideprev,sethide]=useState("none")
  const [value, setValue] =useState('USD per Year - billed annually')
//  value==="USD per Year - billed annually"?setmoney(0):setmoney( 39)
const hide=()=>{
hideprev==="none"?sethide("block"):sethide("none")
}
  return (
    <div>
   <h1 style={{"fontSize":"40px","textAlign":"left" ,"marginLeft":"10%"}}>Plans for Individuals</h1>
   <div className='Cronogold' >
    <div>    <img src="https://cdn1.cronometer.com/plans/gold-no-icon-logo.svg" alt="CronometerGold" />
  <h3>Reach your goals faster with Gold.</h3>
  <ul><li>No ads!</li>
  <li>Import recipes via URL</li>
  <li>Diary groups and timestamps</li>
  <li>Target schedlier</li>
  <li>Fasting timer</li>
  <li>Nutrition scores</li>
  <li>Plus all our premium features!</li></ul>
  <Button colorScheme='teal' variant='ghost' onClick={hide}>
    VIEW ALL FEATURES
  </Button>
   </div>

    <div>
{value==="USD per Year - billed annually"?<h1 style={{"fontWeight":"bold","fontSize":"30px"}}>${49.99}</h1>:<h1 style={{"fontWeight":"bold","fontSize":"30px"}}>${8.99}</h1>}
      <h3>{value}</h3>
    <RadioGroup onChange={setValue} value={value}>
      <Stack direction='row'>
        <Radio value='USD per Year - billed annually'>Yearly</Radio>
        <Radio  value='USD per Month - billed monthly'>Monthly</Radio>
        
      </Stack>
    </RadioGroup>
      <Button colorScheme='blue'>SUBSCRIBE NOW</Button>
      <img src="https://cdn1.cronometer.com/plans/gold-panel-dots.svg" alt="style" />
   
   
   
    </div>
<div style={{"display":hideprev}} className="hide">


<table style={{"textAlign":"left"}}>
  <tr>
    <th>
    <div>
<h1 style={{"fontSize":"30px","fontWeight":"bold"}}>Gold Features</h1>
    <p>USD per Year - billed annually</p>
     </div>
    </th>
    <th> <div>
  <img src="https://cdn1.cronometer.com/plans/basic-logo.svg" alt="Basic" />
<h1 style={{"fontWeight":"bold"}}>$0.00</h1>
  </div></th>
    <th> <div>
  <img src="https://cdn1.cronometer.com/plans/gold-logo.svg" alt="Basic" />
<h1 style={{"fontWeight":"bold"}}>$8.99</h1>
  </div></th>
  </tr>
  <tr>
    <td>Log foods, exercise, biometrics and notes</td>
    <td><CheckIcon/></td>
       <td><CheckIcon/></td>

  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td><CheckIcon/></td>
       <td><CheckIcon/></td>

  </tr>
  <tr>
    <td>Ernst Handel</td>
    <td><CheckIcon/></td>
      <td><CheckIcon/></td>

  </tr>
  <tr>
    <td>Island Trading</td>
    <td><CheckIcon/></td>
      <td><CheckIcon/></td>

  </tr>
  <tr>
    <td>Laughing Bacchus Winecellars</td>
    <td><CheckIcon/></td>
        <td><CheckIcon/></td>

  </tr>
  <tr>
    <td>Magazzini Alimentari Riuniti</td>
    <td><CloseIcon/></td>
    <td><CheckIcon/></td>

  </tr>
  <tr>  <td>Log foods, exercise, biometrics and notes</td>
    <td><CloseIcon/></td>
       <td><CheckIcon/></td>

  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td><CloseIcon/></td>
       <td><CheckIcon/></td>

  </tr>
  <tr>
    <td>Ernst Handel</td>
    <td><CloseIcon/></td>
      <td><CheckIcon/></td>

  </tr>
  <tr>
    <td>Island Trading</td>
    <td><CloseIcon/></td>
      <td><CheckIcon/></td>

  </tr>
  <tr>
    <td>Laughing Bacchus Winecellars</td>
    <td><CloseIcon/></td>
        <td><CheckIcon/></td>

  </tr>
  <tr>
    <td>Magazzini Alimentari Riuniti</td>
    <td><CloseIcon/></td>
    <td><CheckIcon/></td>

  </tr>
</table>
</div>
   </div>






    </div>
  )
}

export default PlanPage

