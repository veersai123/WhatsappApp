import React from 'react'
import { jwtDecode } from "jwt-decode";

import { GoogleLogin } from '@react-oauth/google';
import { Dialog ,Box,Typography,List,ListItem,styled} from '@mui/material'
const loginstyle={
    height:'96%',
    marginTop:'12%',
    width:'60%',
    maxWidth:'100%',
    maxHeight:'100%',
    overflow:'hidden'
}
const Cmp=styled(Box)`
    display: flex;
`
const StyledList=styled(List)`
   &>li{
    padding: 0px;
    margin-top: 15px;
    line-height: 28px;
   }
`
const Box1=styled(Box)`
padding: 56px 0px 56px 56px;
`
const QRcode=styled('img')({
  height:264,
  width:264,
  margin:'50px 0 0 40px'
})

const Title=styled(Typography)`
font-size: 26px;
color: #525252;
font-weight: 300px;
font-family: inherit;
margin-bottom: 25px;
`
function login() {
  return (
    <div>
        <Dialog open={true} PaperProps={{sx:loginstyle}}>
           <Cmp>
              <Box1>
                <Title>Download WhatsApp for Windows</Title>
                <List>
                  <ListItem>1.Opne Whatsapp In your Phone</ListItem>
                  <ListItem>2.Tap Menu on Android, or Settings on iphone</ListItem>
                  <ListItem>3.Tap linked device and link a device</ListItem>
                  <ListItem>4.Point Your Phone on the screen to capture the QR code</ListItem>
                </List>
              </Box1>
              <Box style={{position:'relative'}}>
                <QRcode src="https://i.stack.imgur.com/nGqGw.png" alt="" />
                <Box style={{position:"absolute",top:'50%',transform:'translateX(25%)'}}>
                <GoogleLogin
                    onSuccess={credentialResponse => {
                      const decoded = jwtDecode(credentialResponse.credential);
                      console.log(decoded);
                    }}
                    onError={() => {
                      console.log('Login Failed');
                    }}
                  />;
                </Box>
              </Box>
           </Cmp>
        </Dialog>
    </div>
  )
}

export default login