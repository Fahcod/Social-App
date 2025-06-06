import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

//The manifest file
const manifestForPlugin = {
  registerType: "prompt",
  manifest: {
    name: "Socialspot",
    short_name: "Socialspot",
    description: "A social app for meeeting new people,chatting and sharing posts",
    icons: [

      {
        src: '/app.png',
        sizes:'70x70',
        type:'image/png',
        purpose:'favicon',
      },

      {
        src: '/app.png',
        sizes:'70x70',
        type:'image/png',
        purpose:'any',
      },
      
      {
        src: '/app.png',
        sizes:'70x70',
        type:'image/png',
        purpose:'apple touch icon',
      },
    ],
    theme_color: "#181818",
    background_color: "#fff",
    display: "standalone",
    scope: "/",
    start_url: "/",
    orientation: "portrait",
  },
};


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),VitePWA(manifestForPlugin)],
})
