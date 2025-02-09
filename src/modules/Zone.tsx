import {cva} from '../../styled-system/css'
import {box} from '../../styled-system/jsx'
import {vstack} from '../../styled-system/patterns'

const zoneRecipe = cva({
  base: {
    p: '4',
    ...vstack.raw(),
  },
  variants: {
    level: {
      raised: {
        bg: 'base.raised',
        boxShadow: '0 2px {colors.shadow.neutral.2}',
        borderWidth: '[2px]',
        borderStyle: 'solid',
        borderColor: 'border.neutral.tertiary.alpha',
        rounded: '[8px]',
      },
      sunken: {
        bg: 'base.sunken',
      },
      default: {
        bg: 'base',
      },
    },
  },
})

export type ZoneProps = Readonly<
  React.ComponentPropsWithRef<'div'> & {
    variant?: {
      theme?: 'alpha' | 'beta'
      mode?: 'light' | 'dark'
      level?: 'sunken' | 'raised' | 'default'
    }
  }
>

export function Zone(props: ZoneProps) {
  const {variant, ...rest} = props
  const theme = variant?.theme ?? 'alpha'
  const mode = variant?.mode ?? 'light'

  return (
    <box.div
      data-theme={theme}
      data-mode={mode}
      css={zoneRecipe.raw({level: variant?.level ?? 'default'})}
      {...rest}
    >
      <box.h1 css={{color: 'text.accent', fontWeight: 'medium'}}>
        {theme} {mode} zone
      </box.h1>
      {rest.children}
    </box.div>
  )
}
