export function Section(props) {
  return (
    <>
      <div className="mb-4">
        <h4 className="fw-bolder">{props.title}</h4>
        {props.children}
        <hr className="text-secondary mt-3 mb-5 w-75 mx-auto" />
      </div>
    </>
  );
}
