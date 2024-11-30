import { Page } from 'puppeteer'
import { selectors as s } from './const'

const acceptCookies = async (page: Page) => {
  try {
    await page.locator(s.acceptBtn).click()
  } catch (error) {
    console.log('No cookies', error)
  }
}

export default acceptCookies
