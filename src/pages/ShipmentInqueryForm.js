import "./ShipmentInqueryForm.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
function ShipmentInqueryForm() {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/track-shipment/${e.target.track_num.value}`);
  };

  return (
    <div className="ShipmentInqueryForm center">
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
