
import styles from '../../styles/logo.module.css';

interface AnimatedLogoProps {
  src: string; 
  alt: string; 
}

export default function AnimatedLogo({ src, alt }: AnimatedLogoProps) {

  const logoStyle = {
    '--logo-image-url': `url(${src})`,
  } as React.CSSProperties;

  return (
    <div
      className={styles.logoContainer}
      style={logoStyle}
      role="img"
      aria-label={alt}
    >
    </div>
  );
};

