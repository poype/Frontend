import { useState } from "react";

interface Props {
  maxChars?: number;
  children: string;
}

// the default value of maxChars is 100
const ExpandableText = ({ children, maxChars = 100 }: Props) => {
  const [isExpanded, setExpanded] = useState(false);

  const text = isExpanded ? children : children.substring(0, maxChars) + "...";
  const buttonText = isExpanded ? "Less" : "More";

  return (
    <p>
      {text}
      <button onClick={() => {setExpanded(!isExpanded);}}>
        {buttonText}
      </button>
    </p>
  );
};

export default ExpandableText;
