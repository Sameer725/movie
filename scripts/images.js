const fs = require('fs')

const imageFileNames = () => {
  const array = fs.readdirSync('src/assets/images').map(file => {
    const extension =
      file.substring(file.lastIndexOf('.') + 1, file.length) || file
    const name = file.replace(`.${extension}`, '').replace(/\W+/g, '')

    return { extension, name }
  })

  return Array.from(new Set(array))
}

const generate = () => {
  const properties = imageFileNames()
    .map(({ name, extension }) => {
      return `'${name}': require('assets/images/${name}.${extension}')`
    })
    .join(',\n  ')
  const string = `export const IMAGES = {
  ${properties}
}
`
  fs.writeFileSync('src/assets/images.ts', string, 'utf8')
}

generate()
