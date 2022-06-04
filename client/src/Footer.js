const Footer = () => {
  return (
    <footer>
      <a href="mailto:yguthrie.dev@gmail.com">yguthrie.dev@gmail.com</a>
      <p className="year">
        © <span>{new Date().getFullYear()}</span> All rights reserved
      </p>
    </footer>
  );
};
export default Footer;
