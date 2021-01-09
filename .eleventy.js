module.exports = (config) => {
  config.addPassthroughCopy({ "src/public": "./" });
  config.setDataDeepMerge(true);

  config.setBrowserSyncConfig({
    files: ["dist/**/*"],
    open: true,
  });
  // config.setDataDeepMerge(true)
  return {
    dir: {
      input: "src",
      output: "dist",
    },
  };
};