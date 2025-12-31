import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Employees from "./pages/Employees";
import Organization from "./pages/Organization";
import Timesheet from "./pages/Timesheet";
import Leave from "./pages/Leave";
import Assets from "./pages/Assets";
import Expenses from "./pages/Expenses";
import Recruitment from "./pages/Recruitment";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/organization" element={<Organization />} />
          <Route path="/timesheet" element={<Timesheet />} />
          <Route path="/leave" element={<Leave />} />
          <Route path="/assets" element={<Assets />} />
          <Route path="/expenses" element={<Expenses />} />
          <Route path="/recruitment" element={<Recruitment />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
