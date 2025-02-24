import { Ripple } from "react-css-spinners";

export default function Loading() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "1000px",
      }}
    >
      <Ripple color="rgba(160,156,160,1)" size={300} thickness={7} />
    </div>
  );
}
