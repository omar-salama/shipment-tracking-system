export default function mapToArabic(string) {
  switch (string) {
    case "TICKET_CREATED":
      return "تم إنشاء الشحنة";
    case "PACKAGE_RECEIVED":
      return "تم وصول الشحنة للمخازن";
    case "IN_TRANSIT":
      return "الشحنة خرجت من المخازن";
    case "NOT_YET_SHIPPED":
      return "لم يتم الشحن";
    case "OUT_FOR_DELIVERY":
      return "الشحنة خرجت للتسليم";
    case "WAITING_FOR_CUSTOMER_ACTION":
      return "لم يتم تسليم الشحنة";
    case "DELIVERED_TO_SENDER":
      return "تم إسترجاع الشحنة"; // Not so sure.
    case "RECEIVED_DELIVERY_LOCATION":
      return "تم إستلام مكان التسليم"; // ??
    case "DELIVERED":
      return "تم التسليم";
    default:
      return string;
  }
}
