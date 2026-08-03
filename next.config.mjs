import nextra from "nextra";

const withNextra = nextra({
  // Nextra 4 reads content from the `content/` directory by default
  defaultShowCopyCode: true,
});

export default withNextra({
  reactStrictMode: true,
});
