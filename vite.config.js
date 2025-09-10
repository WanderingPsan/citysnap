import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // importing react
import tailwindcss from '@tailwindcss/vite'; // importing tailwindcss

export default defineConfig({
  plugins: [
    react(),          // react
    tailwindcss(),    // what was missing from before, v4 doesnt need the init so you you've just gotta intergrate it like this now
  ],
});
