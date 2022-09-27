const Default: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return <div className="flex flex-col h-screen">{children}</div>;
};

export default Default;
