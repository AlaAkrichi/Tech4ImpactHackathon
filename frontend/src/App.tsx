import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route, useRoutes } from "react-router-dom";
import { routes } from './routes';
import AIAssistant from "./components/AIAssistant";

const queryClient = new QueryClient();

const AppRoutes = () => {
  const element = useRoutes(routes);
  return element;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Router>
        <AppRoutes />
      </Router>
      <AIAssistant onClick={() => console.log('AI Assistant clicked')} />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
