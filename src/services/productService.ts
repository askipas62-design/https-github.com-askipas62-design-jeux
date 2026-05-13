import { products as allProducts, Product } from "../data/products";

export const productService = {
  async getAll(filters?: { category?: string; minPrice?: number; maxPrice?: number; q?: string }): Promise<Product[]> {
    let filtered = [...allProducts];
    
    if (filters?.category) {
      filtered = filtered.filter(p => p.category === filters.category);
    }
    if (filters?.minPrice) {
      // TTC price check (priceHT * 1.2)
      filtered = filtered.filter(p => (p.priceHT * 1.2) >= (filters.minPrice || 0));
    }
    if (filters?.maxPrice) {
      filtered = filtered.filter(p => (p.priceHT * 1.2) <= (filters.maxPrice || Infinity));
    }
    if (filters?.q) {
      const q = filters.q.toLowerCase();
      filtered = filtered.filter(p => p.name.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q));
    }
    
    return filtered;
  },

  async getById(id: string): Promise<Product> {
    const product = allProducts.find(p => p.id === id);
    if (!product) throw new Error("Product not found");
    return product;
  }
};
