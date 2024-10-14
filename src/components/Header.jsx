import { useState, useRef, useEffect } from "react";
import "/src/styles/styleHeader.scss";

function Header() {
  const [showMenu, setshowMenu] = useState(false);

  const menuRef = useRef(null);

  const handleshowMenuClass = () => {
    setshowMenu(!showMenu);
  };

  const handleClickOutside = event => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setshowMenu(false);
    }
  };

  useEffect(() => {
    // Attach the Event Listener
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

//   return () => {
    
//     document.removeEventListener('mousedown', handleClickOutside);
//   ;
// }, [];

  // , [showMenu]
  const category = [
    "chantelle",
    "unstiched",
    "shawls",
    "ready to wear",
    "special prices",
    "bottoms",
    "dupattas",
  ];

  const socials = ["facebook", "instagram", "twitter-x", "whatsapp", "youtube"];

  return (
    <>
      <div className={`header ${showMenu ? 'transparentHeader' : ''}`}>
        <a href="#" className="header__icon" onClick={handleshowMenuClass}>
          <i className="ri-menu-line"></i>
        </a>

        <img
          src="/images/logo_elegancia-removebg.png"
          alt=" Elegancia Logo"
          className="header__logo"
        />

        <div className="header__icons">
          <a href="#" className="header__icon">
            <i className="ri-user-line"></i>
          </a>
          <a href="#" className="header__icon">
            <i className="ri-search-line"></i>
          </a>
          <a href="#" className="header__icon">
            <i className="ri-shopping-cart-line"></i>
          </a>
        </div>
      </div>

      <div className={`menu ${showMenu ? "" : "showMenu"}`} ref={menuRef}>
        <div className="menu__categories">
          {category.map((item, i) => (
            <a href="#" className="menu__category" key={i}>
              {item.toUpperCase()}
            </a>
          ))}
        </div>

        <div className="menu__socials">
          {socials.map((item, i) => (
            <a href="#" className="menu__social" key={i}>
              <i className={`ri-${item}-line`}></i>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

export default Header;
