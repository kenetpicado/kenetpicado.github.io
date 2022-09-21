export function LinkLi(props) {
  return (
    <li>
      {props.label}{" "}
      <a
        href={`http://${props.link}`}
        target="_blank"
        rel="noreferrer"
      >
        {props.text}
      </a>
    </li>
  );
}
