import { Page } from 'puppeteer'
import { selectors as s } from './const'

const extractResults = async (page: Page): Promise<string[] | null> => {
  try {
    await page.waitForSelector(s.searchResult)
    const result = await page.$eval(s.searchResult, el => el.textContent)
    
    const results = await page.$$eval(s.searchResults, els => els.map(el => el.textContent))
    // console.log(results)

    return results
  } catch (error) {
    console.log('error: ', error)

    return null
  }
}

export default extractResults
