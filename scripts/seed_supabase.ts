import "dotenv/config";
import { createClient } from "@supabase/supabase-js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const supabaseUrl = process.env.VITE_SUPABASE_URL || "";
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || "";

if (!supabaseUrl || !supabaseServiceKey) {
  console.error("Missing SUPABASE environment variables.");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

const DATA_DIR = path.join(__dirname, "..", "data");
const PRODUCTS_FILE = path.join(DATA_DIR, "products.json");

async function seed() {
  console.log("Starting migration to Supabase...");

  // 1. Seed Products
  if (fs.existsSync(PRODUCTS_FILE)) {
    const products = JSON.parse(fs.readFileSync(PRODUCTS_FILE, "utf-8") || "[]");
    console.log(`Found ${products.length} products. Syncing...`);
    
    // Map to snake_case for DB
    const dbProducts = products.map((p: any) => ({
      id: p.id,
      name: p.name,
      category: p.category,
      price_ht: p.priceHT,
      stock: p.stock,
      badge: p.badge,
      rating: p.rating,
      desc: p.desc,
      image: p.image
    }));

    const { error } = await supabase.from("products").upsert(dbProducts);
    if (error) console.error("Error seeding products:", error);
    else console.log("Products seeded successfully.");
  }

  console.log("Migration finished.");
}

seed();
