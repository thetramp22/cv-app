import { Header } from "./Header";
import { Resume } from "./Resume";
import { Sidebar } from "./Sidebar";
import "../styles/App.css";
import { useState } from "react";

export default function App() {
  const [fullName, setFullName] = useState("");

  function handleChange(e) {
    setFullName(e.target.value);
  }

  return (
    <>
      <Header />
      <Sidebar fullName={fullName} onChange={handleChange} />
      <div className="resume-wrapper">
        <Resume />
      </div>
    </>
  );
}
