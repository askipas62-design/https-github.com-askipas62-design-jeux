import { Product } from "../data/products";

const API_URL = "/api";

export const productService = {
  async getAll(filters?: { category?: string; minPrice?: number; maxPrice?: number; q?: string }): Promise<Product[]> {
    const params = new URLSearchParams();
    if (filters?.category) params.append("category", filters.category);
    if (filters?.minPrice) params.append("minPrice", filters.minPrice.toString());
    if (filters?.maxPrice) params.append("maxPrice", filters.maxPrice.toString());
    if (filters?.q) params.append("q", filters.q);

    const response = await fetch(`${API_URL}/products?${params.toString()}`);
    if (!response.ok) throw new Error("Failed to fetch products");
    return response.json();
  },

  async getById(id: string): Promise<Product> {
    const response = await fetch(`${API_URL}/products/${id}`);
    if (!response.ok) throw new Error("Product not found");
    return response.json();
  }
};
