import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";

import Auth from "./pages/Auth";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <div className="container xl:max-w-screen-xl">
        <Routes>
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </div>
    </QueryClientProvider>
  );
};

export default App;
