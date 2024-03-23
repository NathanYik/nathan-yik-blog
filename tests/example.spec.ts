import { test, expect } from "@playwright/test";

test("homepage has title and links to flower page", async ({ page }) => {
  await page.goto("/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Qwik/);

  await expect(page.getByText("Hi", { exact: true })).toBeVisible();

  await expect(page.getByText("Home")).not.toBeVisible();
  await expect(page.getByText("Blog")).not.toBeVisible();
  await expect(page.getByText("About")).not.toBeVisible();
  await expect(page.getByText("Resume")).not.toBeVisible();

  await page.getByTestId("menu-button").click();

  await expect(page.getByText("Home")).toBeVisible();
  await expect(page.getByText("Blog")).toBeVisible();
  await expect(page.getByText("About")).toBeVisible();
  await expect(page.getByText("Resume")).toBeVisible();

  await page.getByTestId("menu-button").click();

  await expect(page.getByText("Home")).not.toBeVisible();
  await expect(page.getByText("Blog")).not.toBeVisible();
  await expect(page.getByText("About")).not.toBeVisible();
  await expect(page.getByText("Resume")).not.toBeVisible();
});
