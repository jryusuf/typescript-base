import React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "./button"

interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
    title?: string
}

const Header = React.forwardRef<HTMLElement, HeaderProps>(
    ({ className, title = "AI SaaS Platform", ...props }, ref) => {
        return (
            <header
                ref={ref}
                className={cn(
                    "flex items-center justify-between p-4 bg-background border-b border-border",
                    className
                )}
                {...props}
            >
                <div className="flex items-center space-x-4">
                    <Link href="/" className="text-xl font-bold hover:text-primary">
                        {title}
                    </Link>
                    <nav className="hidden md:flex space-x-4">
                        <Link href="/features" className="text-sm hover:text-primary">
                            Features
                        </Link>
                        <Link href="/pricing" className="text-sm hover:text-primary">
                            Pricing
                        </Link>
                        <Link href="/solutions" className="text-sm hover:text-primary">
                            Solutions
                        </Link>
                    </nav>
                </div>
                <div className="flex space-x-2">
                    <Button variant="outline" asChild>
                        <Link href="/login">Login</Link>
                    </Button>
                    <Button variant="default" asChild>
                        <Link href="/signup">Sign Up</Link>
                    </Button>
                </div>
            </header>
        )
    }
)

Header.displayName = "Header"

export { Header }
