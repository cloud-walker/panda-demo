import {Button} from 'panda-lib'
import {css} from 'panda-lib/css'
import {hstack} from 'panda-lib/patterns'

export function App() {
  return (
    <div className={hstack({p: '6'})}>
      <h1 className={css({textStyle: '3xl', fontWeight: 'bold'})}>Hello</h1>
      <Button>Click me</Button>
      <span className={css({textDecoration: 'underline'})}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum,
        eveniet? Reiciendis quo eum voluptatem a! Nemo ad, doloribus, facere
        harum provident nam voluptates architecto sint aperiam blanditiis
        aliquid, quisquam iure.
      </span>
    </div>
  )
}
