function getColorByShipmentState(state) {
  switch (state) {
    case "DELIVERED":
    case "DELIVERED_TO_SENDER":
      return "#1ac45e"; // Green
    default:
      return "#f6ad0a"; // Yellow
  }
}

export default function setColorByShipmentState(state) {
  return {
    color: getColorByShipmentState(state),
  };
}
