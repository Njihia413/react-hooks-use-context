import React, { useState } from "react";
import Header from "./Header";
import Profile from "./Profile";
import { UserProvider } from "../context/user";
import { ThemeContext } from "../context/theme";

function App() {
  const { theme } = useState(ThemeContext);
  
  return (
    <main className={theme}>
      <UserProvider>
        <Header/>
        <Profile/>
      </UserProvider>
    </main>
  );
}

export default App;
