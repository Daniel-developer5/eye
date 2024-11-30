import Openai from 'openai'

const analyzeResults = async (results: string[]): Promise<string | null> => {
  try {
    const openai = new Openai({
      apiKey: process.env.EYE_MODEL,
      project: 'proj_6sTWU3ZgL65kvd8IYNgGr4Fj',
    })

    const a = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'user',
          content: `
            ${results}
            \n
            here are search results according to my image search in google lens, what do you think about what architecture/cultural sight/place it tells me.
            give me just one the most possible result, just a name of the sight
          `,
        },
      ],
    })

    console.log(a)
  } catch (error) {
    console.log('error: ', error)

    return null
  }
}

export default analyzeResults
