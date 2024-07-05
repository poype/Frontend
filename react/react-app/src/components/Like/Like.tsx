import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useState } from "react";

interface Props {
  onClick: () => void;
}

function Like({ onClick }: Props) {
  const [status, setStatus] = useState(false);

  const handleClick = () => {
    setStatus(!status);
    onClick();
  };

  if (status) {
    return <FaHeart color="ff6b81" size={20} onClick={handleClick} />;
  }
  return <FaRegHeart size={20} onClick={handleClick} />;
}

export default Like;
