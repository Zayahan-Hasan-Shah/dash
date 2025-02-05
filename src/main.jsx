import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <GoogleOAuthProvider clientId='43684949576-g8trinu1vfii2tnkjsf3ona1o4ckd2g0.apps.googleusercontent.com'>
      <App />
    </GoogleOAuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
