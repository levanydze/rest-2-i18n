// fetchingData.ts
import { ref, get } from "firebase/database";
import { db } from "./firebase"; // Import the db instance
import { MenuItemProps, CategoryProps } from "./menuComponents/menuTypes";
import { fireBaseRoute } from "@/Manager/navigation";

// Cache to store the last checked timestamp and categories
let lastFetchedTimestamp: number | null = null;
let cachedCategories: CategoryProps[] | null = null;

// Function to check if the menu has been updated
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

// Fetch all categories only if updated
export async function fetchCategories(): Promise<CategoryProps[] | null> {
  try {
    // Check if the menu has been updated
    const isUpdated = await hasMenuUpdated(fireBaseRoute);

    // If data hasn't been updated, return the cached categories
    if (!isUpdated && cachedCategories) {
      console.log("Returning cached categories.");
      return cachedCategories;
    }

    // Fetch new categories data
    const dbRef = ref(db, `restaurants/${fireBaseRoute}/menu/categories`);
    const snapshot = await get(dbRef);

    if (!snapshot.exists()) {
      console.error("No categories data available");
      return null;
    }

    const data = snapshot.val();
    cachedCategories = Object.values(data) as CategoryProps[]; // Cache the fetched categories

    return cachedCategories;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return null;
  }
}

// Fetch individual menu item by ID
export async function fetchMenuItem(id: string): Promise<MenuItemProps | null> {
  try {
    // Fetch categories (either from cache or from Firebase)
    const categories = await fetchCategories();

    if (!categories) {
      console.error("No categories data available for menu item search");
      return null;
    }

    // Loop through all categories to find the item by ID
    for (const category of categories) {
      if (category.items && category.items[id]) {
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
