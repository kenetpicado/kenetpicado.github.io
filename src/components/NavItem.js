export function NavItem(props) {
  return (
    <li className="nav-item">
      <a
        className="nav-link active text-dark"
        aria-current="page"
        href={props.href}
      >
        {props.title}
      </a>
    </li>
  );
}
