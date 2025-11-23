import { HTMLAttributes, ReactNode } from 'react'

import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'

export interface Props extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode
  /**
   * The description of the term word.
   */
  description: string
}

export default function TermWord({ children, description, ...rest }: Props) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <span className="underline decoration-dashed underline-offset-2 cursor-help" {...rest}>
          {children}
        </span>
      </TooltipTrigger>
      <TooltipContent>
        <span className="not-italic font-normal">{description}</span>
      </TooltipContent>
    </Tooltip>
  )
}
