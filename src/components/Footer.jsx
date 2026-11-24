
import "./Footer.css";

function Footer() {
  return (
    <footer className="site-footer">
      <p>Made with love by Aarya.</p>

      <p>© {new Date().getFullYear()}</p>
    </footer>
  );
}

export default Footer;
