import logo from '../assets/images/logo-full.svg';  // Import the logo from src/assets

const LogoFull = ({   
  alt = 'Adaptiv Networks Logo',
  width = '150',
  height = '',
 }) => {
  return (
    <img 
      src={logo}  // Use the imported logo
      alt={alt} 
      width={width}
      height={height}
    />
  );
};

export default LogoFull;