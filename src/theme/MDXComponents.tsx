import React from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

function ZoomableImg(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  const className = props.className ?? "";

  if (className.includes("no-zoom")) {
    return <img {...props} />;
  }

  const { style, ...rest } = props;

  return (
    <Zoom zoomMargin={24}>
      <img
        {...rest}
        className={`doc-image ${className}`.trim()}
        style={{
          ...style,
          maxWidth: "100%",
          height: "auto",
          width: "auto",
          display: "block",
          cursor: "zoom-in",
        }}
      />
    </Zoom>
  );
}

export default {
  img: ZoomableImg,
};
