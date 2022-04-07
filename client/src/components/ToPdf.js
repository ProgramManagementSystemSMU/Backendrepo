import React, { useRef } from "react";
import ReactToPrint, {
  PrintContextConsumer,
  useReactToPrint,
} from "react-to-print";
import Scheduel from "./Scheduel";

function ToPdf() {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <div>
      <div ref={componentRef}>
        <Scheduel />
      </div>
      {/* <Scheduel ref={componentRef} /> */}
      <button onClick={handlePrint}>Print this out!</button>
    </div>
  );
}

export default ToPdf;
