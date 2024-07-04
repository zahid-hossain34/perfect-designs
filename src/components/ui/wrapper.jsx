const Wrapper = ({ children, className }) => {
  return <div className={`px-[3%] ${className}`}>{children}</div>;
};

export default Wrapper;
