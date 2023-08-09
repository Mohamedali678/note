import { Route, Routes } from "react-router-dom";
import Form from './components/Form';
import UpdateForm from './components/UpdateForm';
import Main from './components/Main';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/addnote" element={<Form />} />
      <Route path="/update/:id" element={<UpdateForm />} />
    </Routes>
  );
}

export default App;
