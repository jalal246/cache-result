"use_strict";

function cache() {
  let cacheTree = {};

  function get({ branch, key }) {
    return cacheTree[branch] ? cacheTree[branch][key] || null : null;
  }

  function set({ branch, key }, result) {
    if (!cacheTree[branch]) {
      cacheTree[branch] = {};
    }

    const activeBranch = cacheTree[branch];

    activeBranch[key] = result;
  }

  function clear({ branch, key }) {
    if (branch) {
      if (key) {
        /**
         * destroy key vale
         */
        if (cacheTree[branch][key]) cacheTree[branch][key] = undefined;
      } else {
        /**
         * destroy branch
         */
        cacheTree[branch] = undefined;
      }
    } else {
      /**
       * destroy all
       */
      cacheTree = {};
    }

    return null;
  }

  return { set, get, clear };
}

module.exports = cache;
