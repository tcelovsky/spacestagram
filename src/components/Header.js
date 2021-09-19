import MonthYear from './MonthYear';
import '../styles/Header.css';

const Header = () => {
  return (
    <header>
        <h1>Spacestagram</h1>
        <h3>
          NASA Astronomy Picture of the Day for <MonthYear />
        </h3>
    </header>
  );
}

export default Header;
