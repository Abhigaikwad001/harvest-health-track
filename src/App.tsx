import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Auth Pages
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgotPassword from "./pages/auth/ForgotPassword";
import VerifyOTP from "./pages/auth/VerifyOTP";

// Dashboard Pages
import Dashboard from "./pages/dashboard/Dashboard";
import Profile from "./pages/dashboard/Profile";
import Notifications from "./pages/dashboard/Notifications";
import Settings from "./pages/dashboard/Settings";

// Farming Tools
import CropPlanner from "./pages/farming/CropPlanner";
import SoilHealth from "./pages/farming/SoilHealth";
import ExpenseTracker from "./pages/farming/ExpenseTracker";
import WeatherAdvisory from "./pages/farming/WeatherAdvisory";
import IrrigationPlanner from "./pages/farming/IrrigationPlanner";
import FertilizerPlanner from "./pages/farming/FertilizerPlanner";

// Marketplace & Community
import Marketplace from "./pages/marketplace/Marketplace";
import MarketplacePost from "./pages/marketplace/MarketplacePost";
import Chat from "./pages/community/Chat";
import Forums from "./pages/community/Forums";
import ExpertHelp from "./pages/community/ExpertHelp";

// AI Tools
import CropAdvisor from "./pages/ai/CropAdvisor";
import DiseaseDetector from "./pages/ai/DiseaseDetector";
import Chatbot from "./pages/ai/Chatbot";

// Admin & General
import AdminDashboard from "./pages/admin/AdminDashboard";
import About from "./pages/general/About";
import Contact from "./pages/general/Contact";
import Terms from "./pages/general/Terms";
import Privacy from "./pages/general/Privacy";

// Placeholder components for remaining admin pages
const AdminUsers = () => <div>Admin Users coming soon</div>;
const AdminMarketplace = () => <div>Admin Marketplace coming soon</div>;
const AdminReports = () => <div>Admin Reports coming soon</div>;

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Authentication Pages */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/verify-otp" element={<VerifyOTP />} />
          
          {/* Dashboard Pages */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/settings" element={<Settings />} />
          
          {/* Smart Farming Tools */}
          <Route path="/crop-planner" element={<CropPlanner />} />
          <Route path="/soil-health" element={<SoilHealth />} />
          <Route path="/expense-tracker" element={<ExpenseTracker />} />
          <Route path="/weather-advisory" element={<WeatherAdvisory />} />
          <Route path="/irrigation-planner" element={<IrrigationPlanner />} />
          <Route path="/fertilizer-planner" element={<FertilizerPlanner />} />
          
          {/* Marketplace & Community */}
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/marketplace/post" element={<MarketplacePost />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/forums" element={<Forums />} />
          <Route path="/expert-help" element={<ExpertHelp />} />
          
          {/* AI & Support */}
          <Route path="/crop-advisor" element={<CropAdvisor />} />
          <Route path="/disease-detector" element={<DiseaseDetector />} />
          <Route path="/chatbot" element={<Chatbot />} />
          
          {/* Admin Panel */}
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/users" element={<AdminUsers />} />
          <Route path="/admin/marketplace" element={<AdminMarketplace />} />
          <Route path="/admin/reports" element={<AdminReports />} />
          
          {/* General Pages */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
