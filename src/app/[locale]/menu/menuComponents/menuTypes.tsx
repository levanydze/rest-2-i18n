export interface MenuItemProps {
  id: string;
  names?: { [key: string]: string }; // Multilingual names (optional)
  name?: string; // Optional fallback single name
  descriptions?: { [key: string]: string }; // Multilingual descriptions
  description?: string; // Optional fallback single description
  image?: string; // Optional image URL
  price: number;
  option1?: boolean; // Vegan option
  option2?: boolean; // New item option
  option3?: boolean; // Favorite item option
}

export interface CategoryProps {
  id: string;
  translations: {
    [locale: string]: string; // e.g., { "en": "Lunch", "fr": "Déjeuner" }
  };
  priority: number;
  items: { [id: string]: MenuItemProps };
}
