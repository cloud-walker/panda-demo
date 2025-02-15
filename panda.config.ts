import {makeConfig} from 'panda-lib/panda'

const config = makeConfig({
  include: ['./src/**/*.{ts,tsx}'],
})
console.log(config)
export default config
