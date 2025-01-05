import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/functions"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-[rgba(25,25,25,5)] text-primary-foreground",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof badgeVariants> {
  circle?: boolean
}

function Badge({circle, className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props}>
      {circle && <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-t from-primary to-violet-400 animate-spin mr-1.5" />}
      {props.children}
    </div>
  )
}

export { Badge, badgeVariants }
