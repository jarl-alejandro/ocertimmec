import {usePathname} from 'next/navigation'

export function useActivePath(): (path: string) => boolean {
    const pathname = usePathname()

    return (path: string) => {
        if (path === '/' && pathname !== path) {
            return false
        }
        return pathname.startsWith(path)
    }
}
