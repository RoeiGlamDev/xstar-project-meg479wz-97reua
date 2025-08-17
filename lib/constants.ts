export const BRAND_NAME = "luxury LRP cosmetics";
export const PRIMARY_COLOR = "#FFA500"; // Orange
export const SECONDARY_COLOR = "#FFFFFF"; // White

/
 * Interface representing the configuration for luxury LRP cosmetics application.
 */
export interface AppConfig {
    brandName: string;
    primaryColor: string;
    secondaryColor: string;
    luxuryDesign: boolean;
}

/
 * Specific configurations for the luxury LRP cosmetics brand.
 */
export const appConfig: AppConfig = {
    brandName: BRAND_NAME,
    primaryColor: PRIMARY_COLOR,
    secondaryColor: SECONDARY_COLOR,
    luxuryDesign: true,
};

/
 * List of product categories for luxury LRP cosmetics.
 */
export enum ProductCategory {
    SKINCARE = "Skincare",
    MAKEUP = "Makeup",
    FRAGRANCE = "Fragrance",
    BEAUTY_TOOLS = "Beauty Tools",
}

/
 * Interface representing a cosmetic product.
 */
export interface CosmeticProduct {
    id: string;
    name: string;
    category: ProductCategory;
    price: number;
    description: string;
    imageUrl: string;
    isLuxury: boolean;
}

/
 * Sample luxury LRP cosmetics products.
 */
export const products: CosmeticProduct[] = [
    {
        id: "1",
        name: "Radiant Glow Serum",
        category: ProductCategory.SKincare,
        price: 89.99,
        description: "Achieve a luminous complexion with our Radiant Glow Serum.",
        imageUrl: "/images/radiant-glow-serum.png",
        isLuxury: true,
    },
    {
        id: "2",
        name: "Silk Touch Foundation",
        category: ProductCategory.MAKEUP,
        price: 59.99,
        description: "Flawless coverage with a silky finish.",
        imageUrl: "/images/silk-touch-foundation.png",
        isLuxury: true,
    },
    {
        id: "3",
        name: "Essence of Elegance Perfume",
        category: ProductCategory.FRAGRANCE,
        price: 150.00,
        description: "A captivating fragrance that embodies luxury.",
        imageUrl: "/images/essence-of-elegance.png",
        isLuxury: true,
    },
    {
        id: "4",
        name: "Premium Makeup Brushes Set",
        category: ProductCategory.BEAUTY_TOOLS,
        price: 120.00,
        description: "The essential brushes for a flawless application.",
        imageUrl: "/images/premium-brushes-set.png",
        isLuxury: true,
    },
];