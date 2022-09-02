
import React from 'react';
import './app.scss';
import AppRoutes from './Routes/index';
const LayoutPage= React.lazy(()=> import("./Layout/index")) 
function App() {
  return (
    <div className='App'>
       <LayoutPage>
       <AppRoutes/>
       </LayoutPage>
      
    </div>
  );
}

export default App;
