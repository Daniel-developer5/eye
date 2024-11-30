import { Injectable } from '@nestjs/common'
import puppeteer from 'puppeteer'

import acceptCookies from './functions/acceptCookies'
import search from './functions/search'
import uploadImg from './functions/uploadImg'
import removeImg from './functions/removeImg'
import extractResults from './functions/extractResults'
import { pages as p } from './functions/const'
import analyzeResults from './functions/analyzeResults'

@Injectable()
export class ObjectService {
  async getResults(object: string) {
    const browser = await puppeteer.launch({ headless: true, })
    const page = await browser.newPage()

    await page.goto(p.searchPage)

    await acceptCookies(page)

    const { id, url } = await uploadImg(object)
    await search(url, page)

    const result = await extractResults(page)

    await analyzeResults(result)

    if (id) {
      await removeImg(id)
    }

    await browser.close()

    // console.log(result)
  }
}
