import {useState} from 'react'

import {box} from '../styled-system/jsx'
import {Base} from './modules/Base'
import {grid, hstack} from '../styled-system/patterns'
import {Button} from './modules/Button'

export function App() {
  const [mode, setMode] = useState(() => {
    return document.body.getAttribute('data-mode')
  })
  const [theme, setTheme] = useState(() => {
    return document.body.getAttribute('data-theme')
  })
  return (
    <box.div
      css={{
        p: '4',
        display: 'flex',
        flexDirection: 'column',
        gap: '4',
        maxW: 'prose',
        mx: 'auto',
      }}
    >
      <box.div className={hstack()}>
        <Button
          variant={{tone: 'accent'}}
          onClick={() => {
            const nextTheme = theme === 'alpha' ? 'beta' : 'alpha'
            document.body.setAttribute('data-theme', nextTheme)
            setTheme(nextTheme)
          }}
        >
          {theme}
        </Button>
        <Button
          onClick={() => {
            const nextMode = mode === 'light' ? 'dark' : 'light'
            document.body.setAttribute('data-mode', nextMode)
            setMode(nextMode)
          }}
        >
          {mode}
        </Button>
      </box.div>
      <box.h1 css={{color: 'text.accent'}}>base theme</box.h1>
      <box.div
        css={grid.raw({
          rowGap: '4',
          columnGap: '4',
          columns: 2,
          _first: {
            p: '2',
          },
        })}
      >
        <Base variant={{level: 'raised'}}>
          <box.h1 css={{color: 'text.accent'}}>alpha light</box.h1>
          <Base variant={{level: 'raised', mode: 'dark'}}>
            <box.h1 css={{color: 'text.accent'}}>alpha dark</box.h1>
          </Base>
        </Base>

        <Base variant={{level: 'raised', mode: 'dark'}}>
          <box.h1 css={{color: 'text.accent'}}>alpha dark</box.h1>
          <Base variant={{level: 'raised'}}>
            <box.h1 css={{color: 'text.accent'}}>alpha light</box.h1>
          </Base>
        </Base>

        <Base variant={{level: 'raised', theme: 'beta'}}>
          <box.h1 css={{color: 'text.accent'}}>beta light</box.h1>
          <Base variant={{level: 'raised', mode: 'dark', theme: 'beta'}}>
            <box.h1 css={{color: 'text.accent'}}>beta dark</box.h1>
          </Base>
        </Base>

        <Base variant={{level: 'raised', mode: 'dark', theme: 'beta'}}>
          <box.h1 css={{color: 'text.accent'}}>beta dark</box.h1>
          <Base variant={{level: 'raised', theme: 'beta'}}>
            <box.h1 css={{color: 'text.accent'}}>beta light</box.h1>
          </Base>
        </Base>
      </box.div>
    </box.div>
  )
}
