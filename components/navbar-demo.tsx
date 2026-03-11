"use client"

import { Home, User, Briefcase, FileText } from 'lucide-react'
import { NavBar } from "@/components/ui/tubelight-navbar"

export function NavBarDemo() {
    const navItems = [
        { name: 'Home', url: '#', icon: Home },
        { name: 'About', url: '#', icon: User },
        { name: 'Events', url: '#events', icon: Briefcase },
        { name: 'Team', url: '#team', icon: FileText }
    ]

    return <NavBar items={navItems} />
}
