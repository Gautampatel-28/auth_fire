import './App.css';
import SignupForm from './SignupForm';
import Login from './Login';
import { BrowserRouter,Routes,Route } from 'react-router-dom'

function App() {
  return (
    <>
    <BrowserRouter >
      <Routes>
        <Route path="/signup" element={<SignupForm />}/>
        <Route path="/login" element={<Login />}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
