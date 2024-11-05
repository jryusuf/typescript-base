import React from "react"
import { cn } from "@/lib/utils"

interface FooterProps extends React.HTMLAttributes<HTMLElement> {
    companyName?: string
}

const Footer = React.forwardRef<HTMLElement, FooterProps>(
    ({ className, companyName = "My Company", ...props }, ref) => {
        return (
            <footer
                ref={ref}
                className={cn(
                    "flex items-center justify-center p-4 bg-background border-t border-border text-sm text-muted-foreground",
                    className
                )}
                {...props}
            >
                <div className="text-center">
                    © {new Date().getFullYear()} {companyName}. All rights reserved.
                </div>
            </footer>
        )
    }
)

Footer.displayName = "Footer"

export { Footer }
