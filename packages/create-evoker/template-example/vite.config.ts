import { defineConfig } from "vite"
import evoker from "@evoker/vite-plugin"
import { resolve } from "path"

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    define: {
      "process.env.NODE_ENV": JSON.stringify(mode)
    },
    resolve: {
      alias: {
        "@": resolve(__dirname, "./src")
      }
    },
    plugins: [
      evoker({
        devtools: {
          host: true
        }
      })
    ]
  }
})
