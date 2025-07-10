import { API, LOCAL_ORDERS } from "./api-fallback"; // adjust path
const API_URL = "https://react-fast-pizza-api.jonas.io/api";

// ✅ MENU
export async function getMenu() {
  try {
    const res = await fetch(`${API_URL}/menu`);
    if (!res.ok) throw Error("Failed getting menu from API");

    const { data } = await res.json();
    return data;
  } catch (err) {
    console.warn("⚠️ Falling back to local menu data:", err.message);
    return API.data;
  }
}

// ✅ ORDER (fallback from LOCAL_ORDERS)
export async function getOrder(id) {
  try {
    const res = await fetch(`${API_URL}/order/${id}`);
    if (!res.ok) throw Error(`Couldn't find order #${id}`);

    const { data } = await res.json();
    return data;
  } catch (err) {
    console.warn(
      `⚠️ Failed to fetch order #${id}, using local fallback.`,
      err.message
    );
    const fallback = LOCAL_ORDERS.find((order) => order.id === Number(id));
    if (fallback) return fallback;
    throw Error(`Order #${id} not found in fallback data`);
  }
}

// ✅ CREATE ORDER (store to local for fallback — dev only)
let fakeOrderId = 999;

export async function createOrder(newOrder) {
  try {
    const res = await fetch(`${API_URL}/order`, {
      method: "POST",
      body: JSON.stringify(newOrder),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) throw Error("Failed creating order");
    const { data } = await res.json();
    return data;
  } catch (err) {
    console.warn(
      "⚠️ Failed creating order on API. Using local fallback.",
      err.message
    );
    return {
      id: fakeOrderId++,
      ...newOrder,
      status: "preparing",
      estimatedDelivery: new Date(Date.now() + 30 * 60000).toISOString(), // +30 mins
    };
  }
}

// ✅ UPDATE ORDER (log fallback only)
export async function updateOrder(id, updateObj) {
  try {
    const res = await fetch(`${API_URL}/order/${id}`, {
      method: "PATCH",
      body: JSON.stringify(updateObj),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) throw Error("Update failed");
  } catch (err) {
    console.warn(
      `⚠️ Failed updating order #${id}. Simulating local fallback.`,
      err.message
    );
    console.log("Simulated update:", { id, ...updateObj });
    // Optional: Update a local array, or leave it as a no-op
  }
}
