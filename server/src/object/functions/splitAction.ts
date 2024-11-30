const splitAction = (
  amount: number, interval: number, subject: string, action: (part: string) => void | Promise<void>
): Promise<boolean> => {
  return new Promise(async resolve => {
    const rest = amount % interval
    const iterations = (amount - rest) / interval + rest

    for (let i = 0; i < iterations; i++) {
      await action(
        subject.slice(i * interval, interval + i * interval)
      )
    }

    resolve(true)
  })
}

export default splitAction
