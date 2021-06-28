import React, { useState } from "react";
import Routes from "./components/Routes";
import { UidContext } from "./components/AppContext.js";
// import axios from "axios";
import { useDispatch } from "react-redux";
import { getUser } from "./actions/user.actions";


const App = () => {
  const [uid, setUid] = useState(null);
  const dispatch = useDispatch(); 


  const readStorage =() => {
    const user = sessionStorage.getItem("userID")
    if (user) {
      console.log(user)
      setUid(user)
    }
  }

  React.useEffect(() => {
    readStorage();  
    if (uid) dispatch(getUser(uid));
  }, [uid, dispatch]);

  
  return (
    <UidContext.Provider value={uid}>
      <Routes />
    </UidContext.Provider>
  );
};

export default App;
 