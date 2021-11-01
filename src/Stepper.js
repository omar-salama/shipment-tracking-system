import "./Stepper.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faTicketAlt } from "@fortawesome/free-solid-svg-icons";
import { faBoxOpen } from "@fortawesome/free-solid-svg-icons";
import { faTruck } from "@fortawesome/free-solid-svg-icons";
import { faSave } from "@fortawesome/free-solid-svg-icons";
import setColorByShipmentState from "./utils/changeStyle";

function Stepper({ currentShipmentState, TransitEvents }) {
  currentShipmentState = "DELIVERED";
  const steps = [
    "تم إنشاء الشحنة",
    "تم وصول الشحنة للمخازن",
    "الشحنة خرجت للتسليم",
    "تم التسليم",
  ];
  const icons = [
    <FontAwesomeIcon icon={faTicketAlt} />,
    <FontAwesomeIcon icon={faBoxOpen} />,
    <FontAwesomeIcon icon={faTruck} flip="horizontal" />,
    <FontAwesomeIcon icon={faSave} />,
    <FontAwesomeIcon icon={faCheck} />,
  ];
  const currentStepNumber = (state) => {
    switch (state) {
      case "TICKET_CREATED":
        return 1;
      case "PACKAGE_RECEIVED":
        return 2;
      case "OUT_FOR_DELIVERY":
      case "WAITING_FOR_CUSTOMER_ACTION":
        return 3;
      case "DELIVERED_TO_SENDER":
      case "DELIVERED":
        return 4;
      default:
        return 0;
    }
  };

  // adds class names according to the shipment state
  const isComplete = (stepNumber) => {
    if (currentStepNumber(currentShipmentState) > stepNumber) {
      // add special class to the last shipment state
      if (stepNumber + 1 === currentStepNumber(currentShipmentState)) {
        return "completed current-state";
      }
      return "completed";
    }
    return "";
  };
  function renderIcons(index, icon) {
    if (!isComplete(index)) return icon[index];
    // render last shipment state icon instead of the checkmark ( √ ) icon
    if (
      isComplete(index) === "completed current-state" &&
      currentStepNumber(currentShipmentState) !== 4
    )
      return icon[index];
    return icon[4];
  }

  const changeStepperColor = () => {
    if (currentStepNumber(currentShipmentState) === 4) return "delivered";
    // TODO: set color to red if the shipment was cancelled (not provided in the assestment's test cases)
    return "";
  };

  for (let TE of TransitEvents)
    if (TE.reason && currentShipmentState === "WAITING_FOR_CUSTOMER_ACTION") {
      var delayReason = TE.reason;
    }

  return (
    <div className="Stepper">
      {steps.map((step, index) => (
        <div key={index} className={"stepper-item " + isComplete(index)}>
          <div className={"progress-bar " + changeStepperColor()}></div>
          <div className={"step-counter " + changeStepperColor()}>
            {renderIcons(index, icons)}
          </div>
          <div className="step-name">
            {step}
            {delayReason && index === 2 && (
              <p
                className="step-reason"
                style={setColorByShipmentState(currentShipmentState)}
              >
                {delayReason}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Stepper;
