export default function Header({ title }) {
  return (
    <nav>
      <ul>
        <li className="nav-item logo">
          <img src="/logo.png" alt="Burlington Electronics Repair logo" />
        </li>
        <li className="nav-item">
          <a href="/">Home</a>
        </li>
        <li className="nav-item">
          <a href="/services">Services</a>
        </li>
        <li className="nav-item">
          <a href="/contact">Contact</a>
        </li>

        <li>
          <a href="/about">About</a>
        </li>

        <li>
          <a href="https://venmo.com/u/repairbtn">Pay</a>
        </li>

      </ul>
    </nav>

  );
}
