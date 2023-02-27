const { NavLink } = require('react-router-dom');

const Navigation = () => {
  return (
    <nav>
      <NavLink to="/" exact>
        Main
      </NavLink>
      <NavLink to="/contacts" exact>
        Contacts
      </NavLink>
    </nav>
  );
};

export default Navigation;
