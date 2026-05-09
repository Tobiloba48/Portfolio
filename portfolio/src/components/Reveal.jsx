import useReveal from '../hooks/useReveal';

const Reveal = ({ children, delay = 0, style = {} }) => {
  const [ref, visible] = useReveal();

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : 'translateY(28px)',
        transition: `opacity .8s ease ${delay}s, transform .8s ease ${delay}s`,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default Reveal;
