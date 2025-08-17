import { formatCurrency } from './helpers';

/
 * Utility functions for luxury LRP cosmetics application
 * @module utils
 */

/
 * Interface for product details in luxury LRP cosmetics
 */
export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    category: string;
}

/
 * Represents the cosmetic categories available in luxury LRP cosmetics
 */
export enum CosmeticCategory {
    SKINCARE = 'Skincare',
    MAKEUP = 'Makeup',
    FRAGRANCE = 'Fragrance',
    HAIRCARE = 'Haircare',
}

/
 * Formats the price for display in the luxury LRP cosmetics application
 * @param price - The price of the product
 * @returns A formatted string representing the price in a luxury context
 */
export function formatPrice(price: number): string {
    return formatCurrency(price, 'USD', { style: 'currency', currencyDisplay: 'symbol' });
}

/
 * Generates a unique class name for components to use in luxury LRP cosmetics
 * @param base - The base class name for the component
 * @param modifier - Optional modifier for BEM-style naming
 * @returns A string representing the unique class name
 */
export function cn(base: string, modifier?: string): string {
    const className = luxury-lrp-${base};
    return modifier ? ${className}--${modifier} : className;
}

/
 * Formats a product description to enhance readability
 * @param description - The raw description of the product
 * @returns A formatted string for display
 */
export function formatDescription(description: string): string {
    return description.split('\n').map(line => <p>${line.trim()}</p>).join('');
}

/
 * Example data for luxury LRP cosmetics products
 */
export const exampleProducts: Product[] = [
    {
        id: '1',
        name: 'Golden Radiance Serum',
        description: 'An exquisite serum that illuminates and hydrates the skin.',
        price: 150.00,
        imageUrl: 'images/golden-radiance-serum.png',
        category: CosmeticCategory.SKincare,
    },
    {
        id: '2',
        name: 'Silken Matte Foundation',
        description: 'Achieve a flawless finish with our luxurious matte foundation.',
        price: 60.00,
        imageUrl: 'images/silken-matte-foundation.png',
        category: CosmeticCategory.MAKEUP,
    },
    {
        id: '3',
        name: 'Essence of Elegance Perfume',
        description: 'A captivating fragrance that embodies the essence of luxury.',
        price: 120.00,
        imageUrl: 'images/essence-of-elegance-perfume.png',
        category: CosmeticCategory.FRAGRANCE,
    },
];