const Wrapper = ({ children, className, id }) => {
  return (
    <section id={id} className={`relative max-w-[1800px] ${className}`}>
      {children}
    </section>
  );
};

export default Wrapper;
