import { Route, Routes } from 'react-router-dom';

import './App.scss';
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import AboutPage from './pages/about/about.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import SettingsPage from './pages/settings/settings.component';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact={true} path='/' element={<HomePage />} />
        <Route exact={true} path='/about' element={<AboutPage />} />
        <Route exact={true} path='/signin' element={<SignInAndSignUpPage />} />
        <Route exact={true} path='/settings' element={<SettingsPage />} />
      </Routes>
    </div>
  )
}

export default App;
