import { ref, get } from "firebase/database";
import { db } from "./firebase"; // Import the db instance
import { MenuItemProps, CategoryProps } from "./menuComponents/menuTypes";
import { fireBaseRoute } from "@/Manager/navigation";

// Cache to store the last checked timestamp
let lastFetchedTimestamp: number | null = null;

// Function to check if the restaurant menu has been updated
async function hasMenuUpdated(fireBaseRoute: string): Promise<boolean> {
  try {
    const dbRef = ref(db, `restaurants/${fireBaseRoute}/menu/lastUpdated`);
    const snapshot = await get(dbRef);

    if (!snapshot.exists()) {
      console.error("No lastUpdated timestamp found");
      return false;
    }

    const lastUpdated = snapshot.val();

    // If no previous fetch or new updates exist, return true
    if (!lastFetchedTimestamp || lastUpdated > lastFetchedTimestamp) {
      lastFetchedTimestamp = lastUpdated;
      return true;
    }

    return false;
  } catch (error) {
    console.error("Error checking lastUpdated:", error);
    return false;
  }
}

// Fetch all categories if the menu is updated
export async function fetchCategoriesIfUpdated(
  fireBaseRoute: string
): Promise<CategoryProps[] | null> {
  // Check if the menu has been updated
  const isUpdated = await hasMenuUpdated(fireBaseRoute);

  if (!isUpdated) {
    console.log("Menu has not been updated since the last fetch.");
    return null;
  }

  try {
    const dbRef = ref(db, `restaurants/${fireBaseRoute}/menu/categories`);
    const snapshot = await get(dbRef);

    if (!snapshot.exists()) {
      console.error("No categories data available");
      return null;
    }

    const data = snapshot.val();
    return Object.values(data) as CategoryProps[];
  } catch (error) {
    console.error("Error fetching categories:", error);
    return null;
  }
}

// Fetch individual menu item by ID
export async function fetchMenuItem(id: string): Promise<MenuItemProps | null> {
  try {
    const dbRef = ref(db, `restaurants/${fireBaseRoute}/menu/categories`);
    const snapshot = await get(dbRef);

    if (!snapshot.exists()) {
      console.error("No menu data available");
      return null;
    }

    const data = snapshot.val();

    // Loop through all categories to find the item by ID
    for (const categoryKey in data) {
      const category = data[categoryKey];
      if (category.items && category.items[id]) {
        // Return the menu item as MenuItemProps
        return category.items[id] as MenuItemProps;
      }
    }

    console.error(`No menu item found with ID: ${id}`);
    return null;
  } catch (error) {
    console.error("Error fetching menu item:", error);
    return null;
  }
}
