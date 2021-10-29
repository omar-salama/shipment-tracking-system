function Complaint() {
  return (
    <div className="Complaint mt-2">
      <div className="row">
        <div className="col-3">
          <img src="questionMark.png" alt="Question Mark" />
        </div>
        <div className="col-9">
          <p>هل يوجد مشكلة في شحنتك ؟!</p>
          <button className="btn">إبلاغ عن مشكلة</button>
        </div>
      </div>
    </div>
  );
}

export default Complaint;
