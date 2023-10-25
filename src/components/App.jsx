import "../styles/App.css";
import GeneralInputSection from "./InputSection";
import Resume from "./Resume";

const App = () => {
  return (
    <>
      <header>
        <h1 className="page-title">Resume Builder</h1>
      </header>
      <main>
        <GeneralInputSection />
        <Resume />
      </main>
    </>
  );
};

export default App;
