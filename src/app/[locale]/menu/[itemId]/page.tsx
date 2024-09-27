import MenuDetails from "./eachItemPage/MenuDetails";
import { fetchMenuItem } from "../fetchingData";
import { Metadata } from "next";
import { useLocale } from "next-intl";

type Props = {
  params: {
    lang: string;
    itemId: string;
  };
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  try {
    const data = await fetchMenuItem(params.itemId); // Use fetchMenuItem to fetch the data
    const locale = useLocale();

    if (!data) {
      return {
        title: "Not Found",
        description: "The page you are looking for does not exist",
      };
    }

    const itemName = data.names?.[locale];
    const itemDescription = data.descriptions?.[locale];

    return {
      title: itemName,
      description: itemDescription,
      alternates: {
        canonical: `/${params.lang}/menu/${params.itemId}`,
      },
    };
  } catch (error) {
    return {
      title: "Not Found",
      description: "The page you are looking for does not exist",
    };
  }
};

interface MenuDetailsPageProps {
  params: {
    itemId: string;
  };
}

export default async function MenuDetailsPage({
  params,
}: MenuDetailsPageProps) {
  const { itemId } = params;

  const item = await fetchMenuItem(itemId);

  if (!item) {
    return <div>Item not found</div>;
  }
  const safeItem = {
    ...item,
    names: item.names || {}, // Provide empty object if undefined
    descriptions: item.descriptions || {}, // Provide empty object if undefined
  };

  // Pass the item to MenuDetails component
  return (
    <div className="fadeOut bg-color4">
      <MenuDetails item={safeItem} />
    </div>
  );
}
