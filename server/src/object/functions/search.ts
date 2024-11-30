import { Page } from 'puppeteer'
import { selectors as s } from './const'

const search = async (url: string, page: Page) => {
  try {
    await page.locator(s.searchInput).fill(url)
    await page.locator(s.searchBtn).click()
  } catch (error) {
    console.log('error: ', error)
  }
}

export default search
