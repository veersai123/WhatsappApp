import React from 'react'
import Login from './account/login'
import {AppBar,Toolbar,styled,Box} from '@mui/material'

const Header=styled(AppBar)`
height: 200px;
background-color: rgb(0,168,132);
box-shadow: none;
`
const Cmp=styled(Box)`
height: 100vh;
background-color: rgb(240,242,245);
`

function Messenger() {
  return (
   <Cmp>
     <Header>
     <Toolbar>
     </Toolbar>
     </Header>
    <Login/>
   </Cmp>
  )
}
export default Messenger