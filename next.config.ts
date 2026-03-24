import type { NextConfig } from "next";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  /* Viacero package-lock.json v nadriadených priečinkoch – explicitný root pre Turbopack */
  turbopack: {
    root: ROOT,
  },
};

export default nextConfig;
