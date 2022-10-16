import { Route, Routes } from "react-router-dom";
import "./App.css";

import Form from "./components/Form";
import Enter from "./components/Enter";
import NotFound from "./components/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Form />} />
      <Route path="/entry" element={<Enter />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
