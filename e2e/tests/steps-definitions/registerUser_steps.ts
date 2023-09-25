import { Given, When, Then } from "@cucumber/cucumber";
import RegisterPage from "../../pages/registerPage";
import { fixture } from "../support/hooks/pageFixture"; 
import Assert from "../../wrapper/assert";
import * as data from "../../helper/util/test-data/registerUser.json"

let registerPage: RegisterPage;
let assert: Assert;

Given('I navigate to the register page', async function () {
    registerPage = new RegisterPage(fixture.page);
    assert = new Assert(fixture.page);
    await registerPage.navigateToRegisterPage();
});

When('I creates a new user', async function () {
    const username = data.userName + Date.now().toString();
    await registerPage.registerUser(data.firstName, data.lastName,
        username, data.password, data.confirmPassword, "m");
});

Then('I can confirm that user registration is success', async function () {
    await assert.assertURL("https://bookcart.azurewebsites.net/login");
});