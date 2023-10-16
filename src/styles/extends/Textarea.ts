import { Textarea as Component } from '@mantine/core'

import classes from './Textarea.module.css'

export const Textarea = Component.extend({
  defaultProps: {
    classNames: {
      input: classes.input,
    },
  },
})
