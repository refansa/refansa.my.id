import { ReactNode } from 'react'

import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'

export interface Props {
  children: ReactNode
  /**
   * The description of the term word.
   */
  description: string
}

export default function TermWord({ children, description }: Props) {
  return (
    <Tooltip>
      <TooltipTrigger>
        <span className="underline decoration-dashed underline-offset-2">{children}</span>
      </TooltipTrigger>
      <TooltipContent>
        <span className="not-italic">{description}</span>
      </TooltipContent>
    </Tooltip>
  )
}
