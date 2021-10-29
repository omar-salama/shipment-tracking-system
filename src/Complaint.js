function Complaint() {
  return (
    <div className="Complaint mt-2">
      <div className="row">
        <div className="col-3 align-self-center d-block d-md-none d-xl-block">
          <img src="questionMark.png" alt="Question Mark" />
        </div>
        <div className="col-9 col-md-12 col-xl-9 align-self-center">
          <p>هل يوجد مشكلة في شحنتك ؟!</p>
          <button className="btn">إبلاغ عن مشكلة</button>
        </div>
      </div>
    </div>
  );
}

export default Complaint;
