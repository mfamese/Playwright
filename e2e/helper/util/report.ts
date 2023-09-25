const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "test-results",
  reportPath: "test-results/reports/",
  reportName: "Playwright Automation report",
  pageTitle: "Fifa test report",
  displayDuration: true,
  metadata: {
    browser: {
      name: "chrome",
      version: "116",
    },
    device: "EA-Rl7b95CJJa5X",
    platform: {
      name: "Windows",
      version: "11",
    },
  },
  customData: {
    title: "Test info",
    data: [
      { label: "Project", value: "Fifa Application" },
      { label: "Release", value: "1.2.3" },
      { label: "Cycle", value: "smoke-test" },
    ],
  },
});