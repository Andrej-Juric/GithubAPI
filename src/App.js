import React, { useState } from "react";
import "./App.css";
import UserForm from "./UserForm";
import UserGithub from "./UserGithub";

function App() {
  const [username, setUsername] = useState("");

  const handleFormSubmit = (username) => {
    setUsername(username);
  };

  return (
    <div>
      <UserForm onSubmit={handleFormSubmit}></UserForm>
      <UserGithub username={username}></UserGithub>
    </div>
  );
}

export default App;
