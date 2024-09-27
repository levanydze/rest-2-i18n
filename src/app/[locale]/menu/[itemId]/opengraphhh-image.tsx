import { ImageResponse } from "next/og";
import { fetchMenuItem } from "../fetchingData";
import { menuCarPlaceHoldImg } from "@/Manager/navigation";

export const runtime = "edge"; // Ensure the function runs on the edge

// Static metadata for the Open Graph image
export const alt = "Delicious Menu Item";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";
fetchMenuItem;
// Dynamic Open Graph Image Generation
export default async function Image({
  params,
}: {
  params: { itemId: string };
}) {
  // Fetch the menu item data using the itemId from params
  const item = await fetchMenuItem(params.itemId);

  // If no item is found, return a default image response with an error message
  if (!item) {
    return new ImageResponse(
      (
        <div
          style={{
            fontSize: 48,
            color: "#333",
            background: "white",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Item Not Found
        </div>
      ),
      {
        ...size,
      }
    );
  }

  // Return the item-specific Open Graph image using item data
  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          fontSize: 48,
          color: "#333",
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={item.image || menuCarPlaceHoldImg}
          alt={item.names?.en || "Unnamed Item"}
          width="1200"
          height="630"
          style={{
            objectFit: "cover",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        />
        <h1
          style={{
            position: "absolute",
            bottom: "50px",
            left: "50px",
            color: "#fff",
            background: "rgba(0, 0, 0, 0.5)",
            padding: "20px",
            borderRadius: "8px",
          }}
        >
          {item.names?.en || "Unnamed Item"}
        </h1>
      </div>
    ),
    {
      ...size,
    }
  );
}
