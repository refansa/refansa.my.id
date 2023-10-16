import { Title as Component } from '@mantine/core'

import classes from './Title.module.css'

export const Title = Component.extend({
  defaultProps: {
    className: classes.title,
  },
})
