import React, {memo} from "react";
import {
   
    Routes,
    Route,
   
  } from "react-router-dom";
const LandingPage = React.lazy(() => import("../Modules/index"));
const AppRoutes =memo((props)=>{
 
    return(
      <Routes>
          <Route path="/" element={<LandingPage />}/>
        
      </Routes>
    )
  }
  
  )
  
  export default AppRoutes;