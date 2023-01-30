const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '57rpba',
  e2e: {
    baseUrl: "https://petstore.swagger.io/v2/user"
  },
});
