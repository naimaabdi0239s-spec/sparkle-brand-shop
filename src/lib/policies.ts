export type PolicySection = {
  heading: string;
  paragraphs: string[];
};

export type Policy = {
  title: string;
  description: string;
  sections: PolicySection[];
};

export const shipping: Policy = {
  title: "Shipping Policy",
  description: "Processing times, rates, and domestic delivery details.",
  sections: [
    {
      heading: "Processing & preparation",
      paragraphs: [
        "Every A Gabrielle product is handmade in small batches. Please allow 5–7 business days for your order to be carefully prepared and packaged before it ships.",
      ],
    },
    {
      heading: "Shipping rates & carriers",
      paragraphs: [
        "We currently ship within the United States only. Shipping rates are calculated at checkout based on package weight and destination.",
        "Free standard shipping applies to all domestic orders over $75.",
      ],
    },
    {
      heading: "Tracking",
      paragraphs: [
        "Once your order has shipped, you will receive an email confirmation with tracking information so you can follow its delivery.",
      ],
    },
    {
      heading: "Warm weather shipping",
      paragraphs: [
        "Because our whipped body butters are made with unrefined shea butter and nourishing plant oils, they may soften or melt during warmer months or if left in a hot mailbox. If this happens, simply place your jar in the refrigerator for 20–30 minutes until it firms back up. While the texture may feel slightly denser, the moisturizing benefits remain unchanged.",
      ],
    },
  ],
};

export const returns: Policy = {
  title: "Return & Exchange Policy",
  description: "All sales final, damaged order reporting, and order inquiries.",
  sections: [
    {
      heading: "All sales are final",
      paragraphs: [
        "Due to the personal nature of our handcrafted bath and body products, all sales are final. We do not accept returns or exchanges.",
      ],
    },
    {
      heading: "Damaged or incorrect orders",
      paragraphs: [
        "If your order arrives damaged or you receive the incorrect item, please contact us within 7 days of delivery at info@agabrielle.co.",
        "Include your order number, a brief description of the issue, and a clear photo of the damaged or incorrect item. We will gladly review and make it right.",
      ],
    },
    {
      heading: "Lost or stolen packages",
      paragraphs: [
        "A Gabrielle is not responsible for packages confirmed as delivered by the carrier. Please ensure your shipping address is accurate and secure before placing your order.",
      ],
    },
  ],
};

export const productInfo: Policy = {
  title: "Product Information & Care",
  description: "Ingredients, care, allergens, and use of A Gabrielle whipped butters and rose-infused oils.",
  sections: [
    {
      heading: "Hydrating Whipped Body Butter",
      paragraphs: [
        "A rich, hand-whipped body butter made with virgin organic unrefined shea butter, ideal for dry skin. It locks in moisture, soothes, and nourishes, leaving your skin soft and glowing.",
        "Base ingredients: Virgin Organic Unrefined Shea Butter, Almond Oil, Avocado Oil, Castor Oil, Vitamin E (Sunflower Oil, Safflower Oil, Rice Bran Oil, Apricot Oil).",
        "Available in Brown Sugar Vanilla, Mahogany Teakwood, Vanilla Bean, and Unscented. Scented varieties include fragrance oils. Choose 4 oz ($14) or 8 oz ($24).",
      ],
    },
    {
      heading: "Luxe Rose-Infused Body Oil",
      paragraphs: [
        "A rose-infused blend of sunflower, almond, and castor oils that deeply nourishes and moisturizes dry, tight skin, leaving it soft and glowing. Rich in essential fatty acids and vitamins A and E.",
        "Ingredients: Sunflower Oil, Almond Oil, Castor Oil, Fragrance (scented varieties only), Rose Petals (scented varieties only).",
        "Available in Unscented, Vanilla Bean, and Mahogany Teakwood. Choose 4 oz ($9) or 8 oz ($18).",
      ],
    },
    {
      heading: "Allergen Information & Important Notes",
      paragraphs: [
        "Allergy Note: Contains Almond Oil (tree nut). All A Gabrielle whipped body butters and luxe body oils are formulated with pure almond oil. If you have a known tree nut allergy, please do not use these products or consult your physician prior to use.",
        "Fragrance & Petals: Scented varieties (Brown Sugar Vanilla, Vanilla Bean, and Mahogany Teakwood) contain fragrance oils, and the body oils contain natural dried rose petals.",
        "Sensitive Skin: Our Unscented Whipped Body Butter and Unscented Luxe Body Oil contain zero added fragrance, making them ideal for sensitive skin and sensitive noses, or for layering under your favorite perfume.",
        "Patch Test: Always perform a 24-hour patch test on a small area of skin before first full use. If irritation, redness, or discomfort occurs, discontinue use immediately. For external use only.",
      ],
    },
    {
      heading: "How to use",
      paragraphs: [
        "Body Butter: Gently massage all over your body and let the butter melt into your skin. Reapply to areas that need extra hydration.",
        "Body Oil: For an all-over glow, gently massage onto your body. To really lock in moisture, apply right after your shower while your skin is still slightly damp.",
      ],
    },
    {
      heading: "Care & storage",
      paragraphs: [
        "Store in a cool, dry place away from direct sunlight. Keep caps tightly closed after each use.",
        "Our body butters are made without artificial stabilizers or synthetic waxes. In warm temperatures, they may soften. If melting occurs, place in the refrigerator for 20–30 minutes until solid.",
      ],
    },
    {
      heading: "Made to layer",
      paragraphs: [
        "Each body oil pairs seamlessly with one or more body butters. Lock in ultimate hydration by applying the whipped butter first, then layering the rose-infused body oil over top for a radiant, long-lasting glow.",
      ],
    },
  ],
};
