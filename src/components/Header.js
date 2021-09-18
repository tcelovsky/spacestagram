import MonthYear from './MonthYear';
import Navbar from './Navbar';

const Header = () => {
  return (
    <header>
        <h1>Spacestagram</h1>
        <h3>
          NASA Astronomy Picture of the Day for <MonthYear />
        </h3>
        <Navbar />
    </header>
  );
}

export default Header;
