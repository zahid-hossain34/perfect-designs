const Wrapper = ({ children, className }) => {
  return (
    <section className={`mx-auto w-[90%] max-w-[1800px] ${className}`}>
      {children}
    </section>
  );
};

export default Wrapper;
