var expect = require("chai").expect,
  directorySearch = require("../lib").default;

describe("Directory Search", () => {
  it("should return 0 matches when search 'TODOOOOOOO' in sample-folder directory", async () => {
    const results = await directorySearch("TODOOOOOOO", "sample-folder");
    expect(results).to.have.lengthOf(0);
  });
  it("should return 4 matches when search 'TODO' in sample-folder directory", async () => {
    const results = await directorySearch("TODO", "sample-folder");
    expect(results).to.have.lengthOf(4);
  });
  it("should return 2 matches when search 'TODO' in sample-folder/module1 directory", async () => {
    const results = await directorySearch("TODO", "sample-folder/module1");
    expect(results).to.have.lengthOf(2);
  });
  it("should return 1 match when search 'TODO' in sample-folder/module2 directory", async () => {
    const results = await directorySearch("TODO", "sample-folder/module2");
    expect(results).to.have.lengthOf(1);
  });
  it("should return 1 match when search 'TODO' in sample-folder/module3 directory", async () => {
    const results = await directorySearch("TODO", "sample-folder/module3");
    expect(results).to.have.lengthOf(1);
  });
  it("should return error when the directory is not available", async () => {
    try {
      const books = await directorySearch("TODO", "unknown");
    } catch (error) {
      expect(error.code).to.equal("ENOENT");
    }
  });
});
