import fs from 'fs/promises'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'pathe'

const dir = dirname(fileURLToPath(import.meta.url))

export async function generateInlineTest(templatePath, testpath) {
  const template = await fs.readFile(templatePath, 'utf8')
  await fs.writeFile(testpath, template)
  console.log(`Generated ${testpath}`)
}

const filepath = resolve(dir, '../test-update/snapshots-inline-js.test.js')
const template = resolve(dir, './inline-test-template.js');

(async () => {
  await generateInlineTest(template, filepath)
})()
