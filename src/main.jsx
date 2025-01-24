import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';


import Home from './Home';



const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
]);



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <main>{children}</main>
        {/* <Toaster /> */}
      </body>
    </html>
  );
}


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);