import {test, expect, Locator} from "@playwright/test"

test("Verify playwright locators", async ({page}) => {

    await page.goto("https://demo.nopcommerce.com/")
    const logo : Locator = page.getByAltText("nopCommerce demo store")
    await expect(logo).toBeVisible()

    // const text : Locator = page.getByText("Welcome to our store")
    // await expect(page.getByText("Welcome to our store")).toBeVisible()
    // await expect(page.getByText(/Welcome\s+To\s+Our\s+Store/i)).toBeVisible()

    // await page.getByRole("link", {name: 'Register'}).click()
    // await expect(page.getByRole("heading", {name: 'Register'})).toBeVisible()

    // await page.getByLabel("First name:").fill("John")
    // await page.getByLabel("Last name:").fill("Doe")
    // await page.getByLabel("Email:").fill("abc@gmail.com")

    // await page.getByPlaceholder("Search store").fill("Apple Macbook Pro")

    // page.goto("playwright-locators.html")

    // await expect(page.getByTitle("Home page link")).toHaveText("Home")
})