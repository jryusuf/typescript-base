import React from "react"
import { cn } from "@/lib/utils"

interface BodyProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode
}

const Body = React.forwardRef<HTMLDivElement, BodyProps>(
    ({ className, children, ...props }, ref) => {
        return (
            <main
                ref={ref}
                className={cn(
                    "flex-grow p-6 bg-background",
                    className
                )}
                {...props}
            >
                {children}
            </main>
        )
    }
)

Body.displayName = "Body"

export { Body }
