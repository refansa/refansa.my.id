import { Text as Component } from '@mantine/core'

import classes from './Text.module.css'

export const Text = Component.extend({
  defaultProps: {
    className: classes.text,
  },
})
