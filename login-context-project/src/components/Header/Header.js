import Logo from "./Logo";
import Nav from "./Nav";
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <Logo />
      <Nav />
    </header>
  )
}

export default Header;