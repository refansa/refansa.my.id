import { Drawer as Component } from '@mantine/core'
import classes from './Drawer.module.css'

export const Drawer = Component.extend({
  classNames: {
    title: classes.title,
    header: classes.header,
    content: classes.content,
  },
})
