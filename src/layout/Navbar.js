/* eslint-disable jsx-a11y/anchor-is-valid */
import "./Navbar.css";
import ShipmentInqueryForm from "../components/shared/ShipmentInqueryForm";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <a className="navbar-brand" href="https://bosta.co/">
          <img
            src="https://bosta.co/wp-content/uploads/2019/08/Component.svg"
            alt="Bosta Logo"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="navbar-nav">
            <a className="nav-link">الرئيسية</a>
            <a className="nav-link">الأسعار</a>
            <a className="nav-link">كلم المبيعات</a>
          </div>
          <div className="navbar-nav me-auto left-nav">
            <div className="nav-item dropdown">
              <a
                className="nav-link"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                تتبع شحنتك
              </a>
              <div
                className="dropdown-menu mt-4"
                aria-labelledby="navbarDropdown"
              >
                <ShipmentInqueryForm />
              </div>
            </div>
            <a className="nav-link">تسجيل الدخول</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
