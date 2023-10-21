import "../styles/Sidebar.css";
import { InputField } from "./InputField";

export function Sidebar() {
  return (
    <aside className="sidebar">
      <h2 className="sidebar-title">Personal Details</h2>
      <InputField />
    </aside>
  );
}
