import * as React from "react";

function SvgDots(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="1em"
      height="1em"
      viewBox="0 0 20 20"
      {...props}
    >
      <image
        width={20}
        height={20}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAQAAAAngNWGAAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElN RQfkDBELIQTr8xDUAAAAlElEQVQoz+3QvQnCYACE4ccfUhhsROysFQLpnUNwBisXsHAFJ8gcbmBh JYiFGUBQsEmhheGzMGQCQQvf7j2uOI4/n6AlMjVzdquSnrmJkztoGFkYyFkqBQf9qpgJgqyyvoOg tGQnCAoJiCrfiUCieHvLXsdVZuOJ0kVXbu0ICg9NWysYSsX16raxsXbtsdTw21f+PC8iVCiAJmWj ewAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMC0xMi0xN1QxMTozMzowNCswMzowMLOmBn8AAAAldEVY dGRhdGU6bW9kaWZ5ADIwMjAtMTItMTdUMTE6MzM6MDQrMDM6MDDC+77DAAAAAElFTkSuQmCC"
      />
    </svg>
  );
}

export default SvgDots;
