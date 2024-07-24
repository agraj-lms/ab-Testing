import CardList from "./CardList";
import Navbar from "./Navbar";
import { cards } from "./constant";
import { useFlag, useVariant } from "@unleash/proxy-client-react";

const Bpage = () => {
  const enabled = useFlag("test.0");
  const variant = useVariant("test.0");
  console.log(variant);

  if (variant && variant.enabled && variant.name === "BlueButton") {
    return (
      <>
        <button style={{ background: "blue", color: "white" }}>
          Blue button
        </button>
      </>
    );
  }
  if (variant && variant.enabled && variant.name === "BlueButton") {
    return (
      <>
        <button style={{ background: "green", color: "white" }}>
          Green button
        </button>
      </>
    );
  }
  return (
    <>
      <button style={{ background: "grey", color: "white" }}>
        Default button
      </button>
    </>
  );
};

export default Bpage;
