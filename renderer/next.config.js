const withWorkers = require("@zeit/next-workers");

// module.exports = {
//   exportPathMap() {
//     // Let Next.js know where to find the entry page
//     // when it's exporting the static bundle for the use
//     // in the production version of your app
//     return {
//       "/": { page: "/" },
//       "/deckfinder": { page: "/deckfinder" },
//       "/sysinfo": { page: "/sysinfo" },
//       "/decklist": { page: "/decklist" }
//     };
//   }
// };

// module.exports = withWorkers()

const nextJsConfig = {
  exportPathMap() {
    // Let Next.js know where to find the entry page
    // when it's exporting the static bundle for the use
    // in the production version of your app
    return {
      "/": { page: "/" },
      "/deckfinder": { page: "/deckfinder" },
      "/sysinfo": { page: "/sysinfo" },
      "/decklist": { page: "/decklist" }
    };
  }
};

module.exports = withWorkers(nextJsConfig);
