import "../styles/Sidebar.css";

export function Sidebar({ fullName }) {
  return (
    <aside className="sidebar">
      <h2 className="sidebar-title">Personal Details</h2>
      <input
        type="text"
        className="text-input"
        aria-label="full name"
        id="full-name"
        placeholder="Full Name"
        value={fullName}
      />
    </aside>
  );
}
