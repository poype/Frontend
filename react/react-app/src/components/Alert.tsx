import { ReactNode } from "react";

interface Props {
  // using the children prop, we can pass children to a component
  children: ReactNode;
  onClose: () => void
}

function Alert({ children, onClose }: Props) {
  return (
    <div className="alert alert-primary alert-dismissible">
      {children}
      <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={onClose}/>
    </div>
  );
}

export default Alert;
