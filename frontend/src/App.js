import React, { useState } from "react";
import Routes from "./components/Routes";
import { UidContext } from "./components/AppContext.js";
// import axios from "axios";

const App = () => {
  const [uid, setUid] = useState(null);

  const readStorage =() => {
    const user = sessionStorage.getItem("userID")
    if (user) {
      console.log(user)
      setUid(user)
    }
  }

  React.useEffect(() => {
    readStorage();
  }, [uid])

  return (
    <UidContext.Provider value={uid}>
      <Routes />
    </UidContext.Provider>
  );
};

export default App;
 