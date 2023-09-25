import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { fixture } from "../support/hooks/pageFixture";
import { text } from "node:stream/consumers";


setDefaultTimeout(60 * 1000 * 5)


// Given("a user visits the fifa homepage", async function () {
//   await pageFixture.page.goto("https://www.fifa.com/fifaplus/");
// });
// Given(
//   "the user selects the sign in icon to navigate to the sign up page",
//   async function () {
//     await pageFixture.page.getByRole("button", { name: "Reject All" }).click();
//     await pageFixture.page.locator("svg").first().click();
//     await pageFixture.page.locator("#headerFirstRowID").getByRole("img").nth(3).click();
//     await pageFixture.page.getByRole("link", { name: "Sign In" }).click();
//     // await pageFixture.page.pause();
//   }
// );
Given("the user types their {string}", async function (emailAddress) {
  await fixture.page.getByLabel("Email").fill(emailAddress);
});
Given("provides a {string}", async function (passwordLogin) {
  await fixture.page.locator("#password").fill(passwordLogin);
  // awaitpageFixture.page.pause();
  // await pageFixture.page.setDefaultTimeout (5000)
});

When("the user selects the sign in button", async function () {
  await fixture.page.getByRole("button", { name: "SIGN IN" }).click();
  fixture.logger.info("User already sign in")

  // await pageFixture.page.pause();
  // await browser.close();
});

Then(
  "user should sees the following {string} on the screen",
  async function (messageType) {
    fixture.logger.info("email: " + text);

    // const assert = await pageFixture.page.getByText('The Best FIFA Football Awards™').nth(1)
    // expect(assert).toHaveText(messageType)
  }
);