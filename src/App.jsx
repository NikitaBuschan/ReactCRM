import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import "./App.css";
import Admin from "./pages/Admin/Admin";
import Main from "./pages/Main/Main";

const StyledApp = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: lightgray;
`;

function App() {
  return (
    <StyledApp>
      <div className="wrapper">
        <Routes>
          <Route exact path="" element={<Main />} />
          <Route exact path="/admin" element={<Admin />} />
          <Route path="*" element={<Main />} />
        </Routes>
      </div>
    </StyledApp>
  );
}

export default App;
