import { Given, When, Then } from "@cucumber/cucumber";
import { fixture } from "../support/hooks/pageFixture"; 
import { text } from "node:stream/consumers";

Given("a new user visits fifa homepage", async function () {
  await fixture.page.goto(process.env.BASEURL);
  fixture.logger.info("Navigated to the application")
});
Given(
  "the user clicks the sign in icon to navigate to the sign up page",
  async function () {
    await fixture.page.getByRole("button", { name: "Reject All" }).click();
    await fixture.page.locator("svg").first().click();
    await fixture.page.locator("#headerFirstRowID").getByRole("img").nth(3).click();
    await fixture.page.getByRole("link", { name: "Sign In" }).click();
    // await fixture.page.pause();
  }
);
Given("clicks the sign up button", async function () {
  await fixture.page.locator("#registerBtn").click();
  await fixture.page.locator("#btnSubmitRegister").scrollIntoViewIfNeeded();
});

Given("the user enters their {string}", async function (firstName) {
  await fixture.page.locator("#firstname").fill(firstName);
});
Given("type their {string}", async function (email) {
  await fixture.page.locator("#email").fill(email);
});
Given("choose a {string},", async function (day) {
  await fixture.page.locator("select#day").selectOption(day);
});

Given("selects a {string}", async function (month) {
  await fixture.page.locator("select#month").selectOption(month);
});

Given("a {string}", async function (year) {
  await fixture.page.locator("select#year").selectOption(year);
  // await fixture.page.pause();
});

Given("selects a {string} of resident", async function (country) {
  await fixture.page.locator("select#country").selectOption(country);
});

Given("selects their preferred {string}", async function (language) {
  await fixture.page.locator("#preferredLanguage").selectOption(language);
});
Given("the user selects the continue button", async function () {
  await fixture.page.locator("#btnSubmitRegister").click();
});

Given("type a {string}", async function (nickName) {
  await fixture.page.locator("input#nickname").fill(nickName);
  // await fixture.page.pause();
});

Given("Choose their favorite {string}", async function (team) {
  await fixture.page.getByLabel("Favourite").selectOption(team);
});
Given("clicks the contiue button", async function () {
  await fixture.page.getByRole("button", { name: "CONTINUE" }).click();
});

Given("enter a {string}", async function (password) {
  await fixture.page.locator("input#password").fill(password);
});
Given("{string}", async function (confirmPassword) {
  await fixture.page.locator("#confirm-password").fill(confirmPassword);
});

Given("check the terms of service checkbox", async function () {
  await fixture.page.locator("#TandC").check();
});

When("the user clicks create account button", async function () {
  await fixture.page.locator("#btnSubmitRegister").click();
});

Then(
  "user should recieve a link to complete their registration",
  async function () {
    fixture.logger.info("email: " + text);

  }
);
