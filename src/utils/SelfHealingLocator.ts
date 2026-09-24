import { expect, Locator, Page, TestInfo } from "@playwright/test";
import { LocatorDefination } from "./types";

export class SelfHealingLocator {
    constructor(
        private readonly page: Page,
        private readonly testInfo: TestInfo
    ) { };


    async resolve(defination: LocatorDefination, timeout = 2500): Promise<Locator> {

        const selectors = [defination.primary, ...(defination.fallbacks ?? [])];
        const failures: string[] = [];

        for (const selector of selectors) {
            const locator = this.page.locator(selector);
            try {
                await expect(locator).toBeVisible({ timeout });
                if (selector != defination.primary) {
                    const message = `Self-healded locator for ${defination.description} using fallback: ${selector}`;

                    await this.testInfo.attach('select-healing-locator', {
                        body: message,
                        contentType: 'text/plain'
                    });
                }
                return locator;

            }
            catch (error: unknown) {
                failures.push(`${selector} -> ${error}`)
            }
        }

        throw new Error(`Unable to resolve locators`);
    }


}