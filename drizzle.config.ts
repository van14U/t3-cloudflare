import { type Config } from "drizzle-kit";

import { env } from "@/env";

export default {
  schema: "./src/server/db/schema.ts",
  out: "./migrations",
  dialect: "sqlite",
  driver: "d1-http",
  dbCredentials: {
    accountId: env.CLOUDFLARE_ACCOUNT_ID,
    databaseId: env.CLOUDFLARE_D1_DATABASE_ID,
    token: env.CLOUDFLARE_TOKEN,
  },
  tablesFilter: [`t3-cloudflare_*`],
} satisfies Config;
