import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import tailwindcss from "@tailwindcss/vite";
import viteReact from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { existsSync } from "fs";
import { resolve } from "path";

// 你的 GitHub 仓库名称（从你的截图里提取出来的）
const REPO_NAME = '/jjyu-project/';
// 声明环境变量，防止直接使用报错
const SOURCE_LOCATION_PLUGIN_PATH = process.env.SOURCE_LOCATION_PLUGIN_PATH;

// https://vitejs.dev/config/
export default defineConfig({
  // ✅ 核心修改：本地开发用 /，打包上传到 GitHub Pages 时，自动变成 /jjyu-project/
  base: process.env.NODE_ENV === 'production' ? REPO_NAME : '/',
  plugins: [
    tailwindcss(),
    TanStackRouterVite(),
    tsConfigPaths(),
    viteReact({
      babel: {
        plugins: SOURCE_LOCATION_PLUGIN_PATH
          ? [[SOURCE_LOCATION_PLUGIN_PATH, { projectRoot: process.cwd() }]]
          : [],
      },
    }),
  ],
});
