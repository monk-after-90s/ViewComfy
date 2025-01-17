import {ModeToggle} from "./toggle";

export function TopNav() {
    return (
        <nav className="flex items-center justify-between px-4 py-2 bg-background border-b gap-2 bg-[rgb(65,43,199)]">
            <div className="flex items-center">
                <a href="https://www.uevip.net/" target="_blank" rel="noopener noreferrer">
                    <img src="https://www.uevip.net/img/logo.png" alt="优一科技" className="ml-2 h-8 w-auto"/>
                </a>
            </div>
            <ModeToggle/>
        </nav>
    )
}
