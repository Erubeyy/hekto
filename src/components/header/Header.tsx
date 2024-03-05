import { NavLink } from 'react-router-dom';
import {
  MagnifyingGlass as Magnifying,
  Mail,
  Phone,
  Arrow,
  User,
  Heart,
  MarketCar,
} from '../../assets/icons';
import Logo from '../../assets/logos/Logo.svg';
import './Header.scss';

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header__topBar">
          <div className="header__topBar-contacts">
            <div className="header__topBar-mail">
              <img src={Mail} width={16} height={16} alt="Mail icon" />
              <span>mhhasanul@gmail.com</span>
            </div>
            <div className="header__topBar-phone">
              <img src={Phone} width={16} height={16} alt="Phone icon" />
              <span>(12345)67890</span>
            </div>
          </div>
          <ul className="header__topBar-menu">
            <li>
              English
              <img src={Arrow} width={16} height={16} alt="Phone icon" />
            </li>
            <li>
              USD <img src={Arrow} width={16} height={16} alt="Phone icon" />
            </li>
            <li>
              Login <img src={User} width={16} height={16} alt="Phone icon" />
            </li>
            <li>
              Wishlist
              <img src={Heart} width={16} height={16} alt="Phone icon" />
            </li>
            <li>
              <NavLink to="/cart">
                <img src={MarketCar} width={16} height={16} alt="Phone icon" />
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="header__navBar">
          <div className="header__navBar-leftSide">
            <NavLink to="/">
              <img src={Logo} width={100} height={28} alt="Hekto Logo" />
            </NavLink>
            <ul className="header__navBar-menu">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/products">Products</NavLink>
              </li>
              <li>
                <a>Blog</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
            </ul>
          </div>
          <div className="header__navBar-searchBar">
            <input type="text" placeholder="Search" />
            <a>
              <img src={Magnifying} width={20} height={20} alt="MagnifyGlass" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
