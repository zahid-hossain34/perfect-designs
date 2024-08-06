const Wrapper = ({ children, className, id }) => {
  return (
    <section id={id} className={`mx-auto w-[90%] max-w-[1800px] ${className}`}>
      {children}
    </section>
  );
};

export default Wrapper;
