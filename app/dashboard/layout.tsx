import DashboardSidebar from '@/components/dashboard/sidebar'
import DashboardTopbar from '@/components/dashboard/topbar'

export const metadata = {
  title: 'Dashboard — IA.edu',
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen bg-background">
      <DashboardSidebar />
      <div className="flex flex-1 flex-col min-w-0">
        <DashboardTopbar />
        <main className="flex-1 px-6 py-8 md:px-10">
          {children}
        </main>
      </div>
    </div>
  )
}
