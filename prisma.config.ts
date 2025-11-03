import { defineConfig } from "prisma/config";
import * as dotenv from "dotenv";
import * as path from "path";

// Carregar variáveis de ambiente do arquivo .env na raiz do projeto
// IMPORTANTE: Quando prisma.config.ts existe, o Prisma pula o carregamento automático
dotenv.config({ path: path.resolve(process.cwd(), ".env") });

export default defineConfig({
  schema: "prisma/schema.prisma",
});