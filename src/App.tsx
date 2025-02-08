import { box } from "../styled-system/jsx";
import { Base } from "./modules/Base";

export function App() {
  return (
    <box.div>
      <Base>
        <box.h1 css={{ color: "accent", bg: "base" }}>alpha light</box.h1>
      </Base>
      <Base mode="dark">
        <box.h1 css={{ color: "accent" }}>alpha dark</box.h1>
      </Base>
      <Base theme="beta">
        <box.h1 css={{ color: "accent" }}>beta light</box.h1>
      </Base>
      <Base theme="beta" mode="dark">
        <box.h1 css={{ color: "accent" }}>beta dark</box.h1>
      </Base>
    </box.div>
  );
}
