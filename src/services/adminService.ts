const API_URL = "/api/admin";

const getHeaders = () => ({
  "Content-Type": "application/json",
  "Authorization": `Bearer ${localStorage.getItem("token")}`
});

export const adminService = {
  // Orders
  getOrders: async () => {
    console.warn("getOrders is not available in stateless mode. Please check your emails.");
    return [];
  },
  updateOrderStatus: async (id: string, status: string) => {
    console.warn("updateOrderStatus is not available in stateless mode.");
    return { success: true };
  },

  // Users
  getUsers: async () => {
    console.warn("getUsers is not available in stateless mode.");
    return [];
  },

  // Products
  getProducts: async () => {
    // In stateless mode, we return the static products list
    const { products } = await import("../data/products");
    return products.map(p => ({ ...p, priceHT: p.priceHT }));
  },
  updateProduct: async (id: string, data: any) => {
    console.warn("updateProduct is not available in stateless mode.");
    return { success: true };
  },
  deleteProduct: async (id: string) => {
    console.warn("deleteProduct is not available in stateless mode.");
    return { success: true };
  }
};
