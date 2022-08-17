import Button from './Button';
import Header from './Header';

import ThemeContext, { useTheme } from '../context/ThemeContext';
import Profile from './Profile';

function Container() {
  const {theme} = useTheme();

  

  return (
    <div className={`app ${theme === "dark" ? theme : ""}`}>
      <Header/>
      <hr/>
      <Button/>
      <Profile/>
    </div>
  )
}

export default Container;

