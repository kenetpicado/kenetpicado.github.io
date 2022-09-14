export function Container(props) {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="card border-0 mb-5">
            <div className="card-body">{props.children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
