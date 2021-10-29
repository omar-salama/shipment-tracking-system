export default function getColorReflectingShipmentState(state) {
  switch (state) {
    case "DELIVERED":
      return "green";
    case "DELIVERED_TO_SENDER":
      return "red";
    default:
      return "yellow";
  }
}
