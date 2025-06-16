import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import HeadBar from "@/components/headbar"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <SidebarProvider>
        <HeadBar/>
        <AppSidebar />
        <main>
          {children}
        </main>
      </SidebarProvider>
    </div>

  )
}