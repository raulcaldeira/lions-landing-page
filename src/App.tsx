import "./global.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { ThemeProvider } from "./components/theme/theme-provider";

export function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | LIONS" />
      <ThemeProvider defaultTheme="dark" storageKey="pizzashop-theme">
        <RouterProvider router={router} />
      </ThemeProvider>
    </HelmetProvider>
  );
}
