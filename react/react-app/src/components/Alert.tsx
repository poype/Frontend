import { ReactNode } from "react";

interface Props {
  // using the children prop, we can pass children to a component
  children: ReactNode;
}

function Alert({ children }: Props) {
  return <div className="alert alert-primary">{children}</div>;
}

export default Alert;
