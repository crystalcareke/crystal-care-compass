import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppSidebar } from "./components/AppSidebar";
import Dashboard from "./pages/Dashboard";
import Clients from "./pages/Clients";
import Caregivers from "./pages/Caregivers";
import CarePlans from "./pages/CarePlans";
import Scheduling from "./pages/Scheduling";
import Reports from "./pages/Reports";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SidebarProvider>
          <div className="min-h-screen flex w-full">
            <AppSidebar />
            <div className="flex-1">
              <header className="h-12 flex items-center border-b bg-background px-4">
                <SidebarTrigger />
              </header>
              <main className="p-6">
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/clients" element={<Clients />} />
                  <Route path="/caregivers" element={<Caregivers />} />
                  <Route path="/care-plans" element={<CarePlans />} />
                  <Route path="/scheduling" element={<Scheduling />} />
                  <Route path="/reports" element={<Reports />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
            </div>
          </div>
        </SidebarProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
