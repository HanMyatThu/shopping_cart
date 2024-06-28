import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

interface ToolTipsProps {
  children: React.ReactNode
  label: string
}

export const CustomToolTip = ({
  children,
  label,
}: ToolTipsProps) => {
  return (
    <TooltipProvider skipDelayDuration={100}>
      <Tooltip>
        <TooltipTrigger>
          {children}
        </TooltipTrigger>
        <TooltipContent>
          <p>{label}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}