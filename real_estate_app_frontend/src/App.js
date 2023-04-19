import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserSignInPage from './Components/EntryExitPages/UserSignInPage';
import UserSignUpPage from './Components/EntryExitPages/UserSignUpPage';
import CommonPage from './Components/CommonPages/CommonPage';
import Protected from './Components/EntryExitPages/Protected';
import Profile from './Components/PropertyListingPages/Profile';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<UserSignInPage />}></Route>
          <Route path='/signUp' element={<UserSignUpPage />}></Route>
          <Route path='/property' element={
            <Protected>
              <CommonPage />
            </Protected>
          }></Route>

          <Route path='/profile' element={
            <Protected>
              <Profile />
            </Protected>
          }></Route>

        </Routes>
      </Router>

    </div>
  );
}

export default App;
