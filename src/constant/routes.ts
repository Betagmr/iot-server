import { HomeIcon, ChartBarIcon, EnvelopeIcon, Cog6ToothIcon } from "@heroicons/react/24/outline";

export const routes = [
    {
        path: '/',
        icon: HomeIcon,
        name: "Dashboard",
    },
    {
        path: '/analytics',
        icon: ChartBarIcon,
        name: "Analytics",
    },
    {
        path: '/reports',
        icon: EnvelopeIcon,
        name: "Reports",
    },
    {
        path: '/settings',
        icon: Cog6ToothIcon,
        name: "Settings",
    },
]
