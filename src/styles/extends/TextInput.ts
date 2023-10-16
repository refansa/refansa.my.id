import { TextInput as Component } from '@mantine/core'

import classes from './TextInput.module.css'

export const TextInput = Component.extend({
  defaultProps: {
    classNames: {
      input: classes.input,
    },
  },
})
