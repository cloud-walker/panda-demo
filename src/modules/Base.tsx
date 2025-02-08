import { box } from "../../styled-system/jsx";

export function Base(
  props: React.ComponentPropsWithRef<"div"> & {
    theme?: "alpha" | "beta";
    mode?: "light" | "dark";
  }
) {
  const { theme = "alpha", mode = "light", ...rest } = props;

  return (
    <box.div
      css={{ bg: "base" }}
      data-theme={theme}
      data-mode={mode}
      {...rest}
    />
  );
}
