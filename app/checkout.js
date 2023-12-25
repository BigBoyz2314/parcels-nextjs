import { loadStripe } from "@stripe/stripe-js";

export async function checkout({ lineItems }) {
    let stripePromise = null;

    const getStripe = async () => {
        if (!stripePromise) {
            stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
        }
        return stripePromise;
    };

    try {
        const stripe = await getStripe();
        const { error } = await stripe.redirectToCheckout({
            mode: "subscription",
            lineItems,
            successUrl: `https://parcels-pi.vercel.app/api/auth/login`,
            cancelUrl: window.location.origin,
        });

        if (error) {
            // Handle any potential errors during redirect
            console.error("Stripe checkout error:", error);
            // You might want to add your error handling logic here
        }
    } catch (err) {
        // Handle any unexpected errors during the process
        console.error("An error occurred during checkout:", err);
        // You might want to add your error handling logic here
    }
}
