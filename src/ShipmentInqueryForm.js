import "./ShipmentInqueryForm.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
function ShipmentInqueryForm({ onShipmentChange }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onShipmentChange(e.target.track_num.value);
  };
  return (
    <div className="ShipmentInqueryForm">
      <h4>تتبع شحنتك</h4>
      <p>اكتب رقم الشحنة وتابع شحنتك خطوة بخطوة</p>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="رقم الشحنة" name="track_num" />
        <button type="submit">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </form>
    </div>
  );
}
export default ShipmentInqueryForm;
