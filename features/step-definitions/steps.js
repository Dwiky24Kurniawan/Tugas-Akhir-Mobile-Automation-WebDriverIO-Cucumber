const { Given, When, Then } = require('@wdio/cucumber-framework');

import HomePage from '../pageobjects/home.page';
import WelcomePage from '../pageobjects/welcome.page';

Given("I am on the welcome page", async () => {
    await expect(WelcomePage.splashScreen).toExist()
    await expect(WelcomePage.splashScreen).toHaveText('Empat Sehat, Lima Sempurna')
    await expect(WelcomePage.headerWelcome).toExist()
    await expect(WelcomePage.headerWelcome).toHaveText('Welcome...')
    await expect(WelcomePage.headerDesc).toExist()
    await expect(WelcomePage.headerDesc).toHaveText('Isi formulir untuk membuat/menambahkan user')
});

When("I input {string}, {string}, {string} and choose gender", async (name, weight, height) => {
    await WelcomePage.inputName.setValue(name)
    await WelcomePage.inputWeight.setValue(weight)
    await WelcomePage.inputHeight.setValue(height)
    await WelcomePage.chooseSexMale.click()
    await WelcomePage.buttonNext.click()
});

When("I choose activity", async () => {
    await WelcomePage.chooseActivity.click()
    await WelcomePage.buttonSelesai.click()
});

Then("I should see error message", async () => {
    await WelcomePage.errorMessageName.isDisplayed()
    await driver.closeApp()
    await driver.launchApp()
});

Then("I should see home page", async () => {
    await expect(HomePage.hiHomeScreen).toExist()
    await expect(HomePage.hiHomeScreen).toHaveText('Hi,')
    await expect(HomePage.hiHomeScreenDescription).toExist()
    await expect(HomePage.hiHomeScreenDescription).toHaveText('Ready to some calories today?')
    await expect(HomePage.buttonHome).toExist()
    await expect(HomePage.buttonHome).toHaveText('Home')
});