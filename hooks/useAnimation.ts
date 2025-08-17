import { useEffect, useState } from 'react';

/
 * Custom hook for managing animations specific to luxury LRP cosmetics.
 * This hook provides an elegant 3D animation effect that enhances the user experience on the website.
 * 
 * @returns {Object} - Contains animation states and functions to trigger animations.
 */
export interface AnimationState {
    isAnimating: boolean;
    startAnimation: () => void;
    stopAnimation: () => void;
}

export const useAnimation = (): AnimationState => {
    const [isAnimating, setIsAnimating] = useState<boolean>(false);

    /
     * Starts the animation with a high-end luxurious feel that matches the branding of luxury LRP cosmetics.
     */
    const startAnimation = () => {
        setIsAnimating(true);
        // Trigger the animation using CSS or JavaScript for luxury 3D effects.
        document.body.classList.add('luxury-animation');
    };

    /
     * Stops the animation when needed, returning to a calm state to reflect the elegance of luxury LRP cosmetics.
     */
    const stopAnimation = () => {
        setIsAnimating(false);
        document.body.classList.remove('luxury-animation');
    };

    useEffect(() => {
        // Clean up effect to ensure no lingering animations remain.
        return () => {
            stopAnimation();
        };
    }, []);

    return {
        isAnimating,
        startAnimation,
        stopAnimation,
    };
};