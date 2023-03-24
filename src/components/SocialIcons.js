const SocialIcons = () => {
  const styles = {
    icon: {
      textDecoration: "none",
      fontSize: "22px",
      padding: "10px",
      transition: "0.2s ease-in",
      
    },
  };
 
  return (
    <div className="socialIcons" style={styles.socialIcons}>
      <a className="icon" style={styles.icon} href="https://www.instagram.com/michael.yeates/">
        <i className="fa-brands fa-facebook" aria-hidden="true" title="Michael Yeates' Instagram Profile"></i>
      </a>      
      
      <a className="icon" style={styles.icon} href="https://www.instagram.com/michael.yeates/">
        <i className="fa-brands fa-instagram" aria-hidden="true" title="Michael Yeates' Instagram Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://twitter.com/mdyeates">
        <i className="fa-brands fa-whatsapp" aria-hidden="true" title="Michael Yeates' Twitter Profile"></i>
      </a>
    </div>
  );
};

export default SocialIcons;
