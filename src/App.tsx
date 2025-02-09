import {useState} from 'react'

import {box} from '../styled-system/jsx'
import {Zone} from './modules/Zone'
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
        })}
      >
        <Zone variant={{level: 'raised'}}>
          <Zone variant={{level: 'raised', mode: 'dark'}} />
        </Zone>

        <Zone variant={{level: 'raised', mode: 'dark'}}>
          <Zone variant={{level: 'raised'}} />
        </Zone>

        <Zone variant={{level: 'raised', theme: 'beta'}}>
          <Zone variant={{level: 'raised', mode: 'dark', theme: 'beta'}} />
        </Zone>

        <Zone variant={{level: 'raised', mode: 'dark', theme: 'beta'}}>
          <Zone variant={{level: 'raised', theme: 'beta'}} />
        </Zone>
      </box.div>
    </box.div>
  )
}
