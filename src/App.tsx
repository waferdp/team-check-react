import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import Team from './components/Team';
import Survey from "./components/Survey";
import './App.css';
import Assessment from "./components/Assessment";

function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="team" element={<Team />} />
          <Route path="survey" element={<Survey />} />
          <Route path="assessment" element={<Assessment />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
