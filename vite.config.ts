import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()]
  // ! Uncomment the base property and set it to '/react-bs5-portfolio/'
  // ! if you want to deploy your project to GitHub Pages
  // base: '/react-bs5-portfolio/'
});
