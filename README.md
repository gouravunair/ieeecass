# IEEE CASS Kerala Chapter React Prototype

This project is a React-based implementation of the IEEE Circuits and Systems Society (CASS) Kerala Chapter website. 

It integrates the **Tubelight NavBar** with professional engineering branding and an organized Shadcn architecture.

## 🚀 Key Integrations
- **Next.js 16 (App Router)**
- **Tailwind CSS 4**
- **TypeScript**
- **Shadcn UI (CLI Base)**
- **Framer Motion Animations**
- **Lucide Icons**

## 🧩 Component: Tubelight NavBar
Status: **Integrated**  
File Path: `@/components/ui/tubelight-navbar.tsx`

To use this component, import it from `NavBarDemo` as shown below:

```tsx
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
```

## 🛠️ Setup Instructions
If you are moving this to another project, follow the [setup_instructions.md](./setup_instructions.md) for detailed environment configuration.

## 🏃 Running the Project
1. Install dependencies: `npm install`
2. Run development server: `npm run dev`
3. View at: `http://localhost:3000`
