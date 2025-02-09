import {cva, RecipeVariant} from '../../styled-system/css'
import {box} from '../../styled-system/jsx'
import {SystemStyleObject} from '../../styled-system/types'

const buttonRecipe = cva({
  base: {
    py: '2',
    px: '3',
    borderWidth: '1',
    borderColor: 'transparent',
    rounded: 'sm',
  },
  variants: {
    mode: {
      ghost: {},
      outline: {},
      solid: {},
    },
    tone: {
      neutral: {},
      accent: {},
      critical: {},
    },
    size: {
      sm: {},
      md: {},
      lg: {},
    },
    shape: {
      rounded: {},
      square: {},
    },
  },
  compoundVariants: [
    {
      tone: 'neutral',
      mode: 'solid',
      css: {
        bg: 'fill.neutral.primary',
        color: 'text.neutral.on.neutral',
        borderColor: 'fill.neutral.primary',
      },
    },
    {
      tone: 'accent',
      mode: 'solid',
      css: {
        bg: 'fill.accent.primary',
        color: 'text.neutral.on.accent',
        borderColor: 'fill.accent.primary',
      },
    },
  ],
  defaultVariants: {
    mode: 'solid',
    tone: 'neutral',
    size: 'md',
    shape: 'square',
  },
})

export type ButtonVariant = RecipeVariant<typeof buttonRecipe>

export type ButtonProps = Readonly<
  React.ComponentPropsWithRef<'button'> & {
    variant?: Partial<ButtonVariant>
    css?: SystemStyleObject | SystemStyleObject[]
  }
>

export function Button({variant, ...props}: ButtonProps) {
  return (
    <box.button type="button" {...props} className={buttonRecipe(variant)} />
  )
}
