export function Card(props) {
  return (
    <div className="card mb-5">
      <div
        id={`carousel${props.img}`}
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={require(`../img/${props.img}-1.png`)}
              className="d-block w-100"
              alt={"Imagen: " + props.title}
            />
          </div>
          <div className="carousel-item">
            <img
              src={require(`../img/${props.img}-2.png`)}
              className="d-block w-100"
              alt={"Imagen: " + props.title}
            />
          </div>
          <div className="carousel-item">
            <img
              src={require(`../img/${props.img}-3.png`)}
              className="d-block w-100"
              alt={"Imagen: " + props.title}
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target={`#carousel${props.img}`}
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target={`#carousel${props.img}`}
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="card-body">
        <h5 className="card-title fw-bolder">{props.title}</h5>
        <p className="card-text">{props.children}</p>
      </div>
      <div className="card-footer">
        <span className="badge bg-dark">{props.technology}</span>
      </div>
    </div>
  );
}
