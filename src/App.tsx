import {useState} from 'react'
import {box} from '../styled-system/jsx'
import {Base} from './modules/Base'

export function App() {
  const [mode, setMode] = useState(() => {
    return document.body.getAttribute('data-mode')
  })
  return (
    <box.div
      css={{
        p: '8',
        display: 'flex',
        flexDirection: 'column',
        gap: '8',
        maxW: '[60ch]',
        mx: 'auto',
      }}
    >
      <button
        type="button"
        onClick={() => {
          const nextMode = mode === 'light' ? 'dark' : 'light'
          document.body.setAttribute('data-mode', nextMode)
          setMode(nextMode)
        }}
      >
        {mode}
      </button>
      <box.h1 css={{color: 'accent'}}>current theme</box.h1>
      <Base>
        <box.h1 css={{color: 'accent'}}>alpha light</box.h1>
      </Base>
      <Base variant={{mode: 'dark'}}>
        <box.h1 css={{color: 'accent'}}>alpha dark</box.h1>
      </Base>
      <Base variant={{theme: 'beta'}}>
        <box.h1 css={{color: 'accent'}}>beta light</box.h1>
      </Base>
      <Base variant={{mode: 'dark', theme: 'beta'}}>
        <box.h1 css={{color: 'accent'}}>beta dark</box.h1>
      </Base>
    </box.div>
  )
}
