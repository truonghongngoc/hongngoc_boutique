const ratio = 4

interface ISpace {
  [key: string]: string
}

export const space: ISpace = {
  px: '1px',
}

for (let i = 0; i <= 100; i++) {
  space[i] = `${i * ratio}px`
}
