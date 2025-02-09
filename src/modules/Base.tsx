import {cva} from '../../styled-system/css'
import {box} from '../../styled-system/jsx'
import {vstack} from '../../styled-system/patterns'

const baseRecipe = cva({
  base: {
    p: '4',
    fontWeight: 'medium',
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
