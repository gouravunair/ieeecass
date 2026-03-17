"use client"

import { Home, User, Briefcase, Users } from 'lucide-react'
import { NavBar } from "@/components/ui/tubelight-navbar"

export function NavBarDemo() {
    const navItems = [
        { name: 'Home', url: '#home', icon: Home },
        { name: 'Events', url: '#events', icon: Briefcase },
        { name: 'Leadership', url: '#leadership', icon: Users },
        { name: 'Chapters', url: '#chapters', icon: User }
    ]

    return <NavBar items={navItems} />
}
