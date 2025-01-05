import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { TodoProvider } from './Context/TodoContext.tsx'
import {SnackbarProvider} from 'notistack';
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SnackbarProvider>
    <TodoProvider>
      <App />
    </TodoProvider>
    </SnackbarProvider>
  </StrictMode>,
)
