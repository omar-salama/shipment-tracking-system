import "./Stepper.css";
import setColorByShipmentState from "./utils/changeStyle";

function Stepper({ currentShipmentState, TransitEvents }) {
  const steps = [
    "تم إنشاء الشحنة",
    "تم وصول الشحنة للمخازن",
    "الشحنة خرجت للتسليم",
    "تم التسليم",
  ];
  const currentStepNumber = (state) => {
    switch (state) {
      case "TICKET_CREATED":
        return 1;
      case "PACKAGE_RECEIVED":
        return 2;
      case "OUT_FOR_DELIVERY":
        return 3;
      case "DELIVERED_TO_SENDER":
      case "DELIVERED":
        return 4;
      default:
        return 0;
    }
  };
  const isComplete = (stepNumber) => {
    return currentStepNumber(currentShipmentState) > stepNumber
      ? " stepper-item completed"
      : "stepper-item";
  };

  for (let TE of TransitEvents)
    if (TE.reason && currentShipmentState === "WAITING_FOR_CUSTOMER_ACTION") {
      var reason = TE.reason;
    }
  return (
    <div className="Stepper">
      {steps.map((step, index) => (
        <div key={index} className={isComplete(index)}>
          <div className="step-counter">{index + 1}</div>
          <div className="step-name">
            {step}
            <p style={setColorByShipmentState(currentShipmentState)}>
              {index === 2 && reason}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Stepper;
