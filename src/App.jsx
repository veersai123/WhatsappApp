import React from 'react'
import Messenger from './components/Messenger'
import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {
  const clientId=''
  return (
   <GoogleOAuthProvider clientId={clientId}>
     <Messenger/>
   </GoogleOAuthProvider>
  )
}
export default App
