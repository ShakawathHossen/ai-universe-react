import React from "react";

const Button = ({children}) => { 
  return (
    <div className="py-6">
      <button className="btn btn-outline btn-accent">{children}</button>
    </div>
  );
};

export default Button;
