import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import HeadBar from "@/components/headbar"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">
      <SidebarProvider>
        <HeadBar/>
        <AppSidebar />
        <main className="flex-1 bg-gray-100 overflow-auto">
          {children}
        </main>
      </SidebarProvider>
    </div>

  )
}