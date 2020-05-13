const cache = require("../src");

const { set, get, clear } = cache();

describe("Name of the group", () => {
  it("stores the results ", () => {
    set({ branch: "test1", key: "foo1" }, "result-1");
    set({ branch: "test1", key: "foo2" }, "result-2");
    set({ branch: "test1", key: "foo3" }, "result-3");
    set({ branch: "test1", key: "foo4" }, "result-4");

    let result = get({ branch: "test1", key: "foo2" });
    expect(result).toBe("result-2");

    result = get({ branch: "test1", key: "foo4" });
    expect(result).toBe("result-4");
  });

  it("updates the results", () => {
    set({ branch: "test1", key: "foo1" }, "result-1-new");
    set({ branch: "test1", key: "foo2" }, "result-2-new");
    set({ branch: "test1", key: "foo3" }, "result-3-new");
    set({ branch: "test1", key: "foo4" }, "result-4-new");

    let result = get({ branch: "test1", key: "foo1" });
    expect(result).toBe("result-1-new");

    result = get({ branch: "test1", key: "foo4" });
    expect(result).toBe("result-4-new");
  });

  it("adds new branch and preserves the old ones", () => {
    set({ branch: "test2", key: "bar1" }, "result-1");
    set({ branch: "test2", key: "bar2" }, "result-2");

    // old still there
    let result = get({ branch: "test1", key: "foo1" });
    expect(result).toBe("result-1-new");

    result = get({ branch: "test1", key: "foo4" });
    expect(result).toBe("result-4-new");

    // new is add
    result = get({ branch: "test2", key: "bar2" });
    expect(result).toBe("result-2");
  });

  it("deletes key in a branch preserves the reset", () => {
    // it exists before delete
    let result = get({ branch: "test1", key: "foo1" });
    expect(result).toBe("result-1-new");

    // delete
    clear({ branch: "test1", key: "foo1" });

    // null has been deleted
    result = get({ branch: "test1", key: "foo1" });
    expect(result).toBe(null);

    // still there, not deleted
    result = get({ branch: "test1", key: "foo2" });
    expect(result).toBe("result-2-new");
  });

  it("deletes entire branch preserves the reset", () => {
    clear({ branch: "test1" });

    let result = get({ branch: "test1", key: "foo1" });
    expect(result).toBe(null);

    result = get({ branch: "test1", key: "foo2" });
    expect(result).toBe(null);
  });

  it("deletes all", () => {
    clear({ isDestroy: true });
  });
});
