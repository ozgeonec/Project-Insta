import * as React from "react";

function SvgFavact(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="1em"
      height="1em"
      viewBox="0 0 40 40"
      {...props}
    >
      <image
        width={40}
        height={40}
        xlinkHref="data:image/png;base64,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 MGz5zxoAAAAASUVORK5CYII="
      />
    </svg>
  );
}

export default SvgFavact;
