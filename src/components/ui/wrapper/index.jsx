const Wrapper = ({ children, className }) => {
  return (
    <section className={`w-[90%] max-w-[1800px] mx-auto ${className}`}>
      {children}
    </section>
  );
};

export default Wrapper;
