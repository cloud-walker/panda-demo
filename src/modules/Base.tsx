import {cva} from '../../styled-system/css'
import {box} from '../../styled-system/jsx'

const baseRecipe = cva({
  variants: {
    level: {
      raised: {
        bg: 'base.raised',
        shadowColor: 'shadow.neutral.1',
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

export type BaseProps = Readonly<
  React.ComponentPropsWithRef<'div'> & {
    variant?: {
      theme?: 'alpha' | 'beta'
      mode?: 'light' | 'dark'
      level?: 'sunken' | 'raised' | 'default'
    }
  }
>

export function Base(props: BaseProps) {
  const {variant, ...rest} = props

  return (
    <box.div
      data-theme={variant?.theme ?? 'alpha'}
      data-mode={variant?.mode ?? 'light'}
      css={baseRecipe.raw({level: variant?.level ?? 'default'})}
      {...rest}
    />
  )
}
