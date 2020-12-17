import * as React from "react";

function SvgDownArrow(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 14 8"
      {...props}
    >
      <path d="M3.7 4L7 7.5 10.3 4 13.5.5l-3.2 3L7 6.4 3.8 3.5.5.5 3.7 4z" />
    </svg>
  );
}

export default SvgDownArrow;
