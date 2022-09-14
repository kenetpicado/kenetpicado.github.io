export function LinkLi(props) {
  return (
    <li>
      {props.label}{" "}
      <a
        href={`https://${props.img}`}
        target="_blank"
        rel="noreferrer"
      >
        {props.text}
      </a>
    </li>
  );
}
