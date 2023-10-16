import { Button as Component } from '@mantine/core'
import classes from './Button.module.css'

export const Button = Component.extend({
  defaultProps: {
    className: classes.button,
  },
})
