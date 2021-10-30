import "./Stepper.css";

function Stepper() {
  return (
    <div class="Stepper">
      <div class="stepper-item completed">
        <div class="step-counter">1</div>
        <div class="step-name">تم إنشاء الشحنة</div>
      </div>
      <div class="stepper-item completed">
        <div class="step-counter">2</div>
        <div class="step-name">تم وصول الشحنة للمخازن</div>
      </div>
      <div class="stepper-item">
        <div class="step-counter">3</div>
        <div class="step-name">الشحنة خرجت للتسليم</div>
      </div>
      <div class="stepper-item">
        <div class="step-counter">4</div>
        <div class="step-name">تم التسليم</div>
      </div>
    </div>
  );
}

export default Stepper;
