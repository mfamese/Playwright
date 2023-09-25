import { BeforeAll, Before, AfterAll, After, Status } from "@cucumber/cucumber";
import { Browser, BrowserContext, } from "@playwright/test";
import { fixture } from "./pageFixture";
import { invokeBrowser } from "../../../helper/browsers/browserManager";
import { getEnv } from "../../../helper/env/env";
import { options } from "../../../helper/util/logger";
import { createLogger } from "winston";
const fs = require("fs-extra");

let browser: Browser;
// let page: Page;
let context: BrowserContext;

BeforeAll(async function () {
  getEnv();
  browser = await invokeBrowser();
});

Before(async function ({ pickle }) {
  const scenarioName = pickle.name + pickle.id
  context = await browser.newContext({
    recordVideo: {
      dir: "test-results/Videos",
    }
  });
  const page = await context.newPage()
  fixture.page = page;
  fixture.logger = createLogger(options(scenarioName));
});

// AfterStep(async () => {
//   // Capture a screenshot and save it
//   await pageFixture.page.screenshot({ path: `test-result/screenshots.png` });
// });

After(async function ({ pickle, result }) {
  // screenshot, video
  let videoPath: string;
  let img: Buffer;
  if (result?.status === Status.FAILED) {
    img = await fixture.page.screenshot({ path: `test-results/screenshots/${pickle.name}.png`, });
    videoPath = await fixture.page.video().path();
  }
  await fixture.page.close();
  await context.close();
  if (result?.status == Status.FAILED) {
    await this.attach(img, "image/png");
    await this.attach(fs.readFileSync(videoPath), 'video/webm');
  }
});
AfterAll(async function () {
  await browser.close();
  // fixture.logger.close();
});
