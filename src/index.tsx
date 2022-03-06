import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

import { ChakraProvider } from '@chakra-ui/react'
import { Auth0Provider } from '@auth0/auth0-react'

import { RecoilRoot } from 'recoil'

ReactDOM.render(
  <Auth0Provider
    domain={'dev-73n2c2pf.us.auth0.com'}
    clientId={'6XluBarjpQGJ7rXMbL2vKKUNjngcvayd'}
    redirectUri={window.location.origin}
  >
    <React.StrictMode>
      <RecoilRoot>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </RecoilRoot>
    </React.StrictMode>
  </Auth0Provider>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
