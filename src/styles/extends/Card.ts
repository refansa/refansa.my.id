import { Card as Component } from '@mantine/core'
import classes from './Card.module.css'

export const Card = Component.extend({
  defaultProps: {
    className: classes.card,
  },
})
