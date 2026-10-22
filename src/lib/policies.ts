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


export const privacy: Policy = {
  title: "Privacy Policy",
  description: "How A Gabrielle handles information shared when you browse or place an order.",
  sections: [
    {
      heading: "Information you provide",
      paragraphs: [
        "When you place an order, contact us, or sign up for updates, you may provide information such as your name, email address, shipping address, and order details.",
        "Payment details are handled by the checkout payment provider. Do not send payment card details to us by email.",
      ],
    },
    {
      heading: "How information is used",
      paragraphs: [
        "Information you provide may be used to process and deliver orders, communicate about purchases or inquiries, provide customer support, and send updates you have requested.",
      ],
    },
    {
      heading: "Sharing and service providers",
      paragraphs: [
        "Information may be shared with service providers where reasonably needed to operate the store, process payments, deliver orders, or provide customer support. We do not describe any third-party provider's practices here; please review the policies shown by those providers when using their services.",
      ],
    },
    {
      heading: "Cookies and site technology",
      paragraphs: [
        "The website and services that support it may use cookies or similar technologies for site functionality, checkout, and performance. Available controls may depend on your browser and the services in use.",
      ],
    },
    {
      heading: "Data security and retention",
      paragraphs: [
        "Reasonable steps are taken to handle information appropriately, but no method of online transmission or electronic storage can be guaranteed to be completely secure. Information may be retained as needed for orders, support, and applicable legal or business requirements.",
      ],
    },
    {
      heading: "Your choices and contact",
      paragraphs: [
        "You may contact us with questions about personal information or to request assistance with your information. Contact info@agabrielle.co.",
      ],
    },
  ],
};

export const terms: Policy = {
  title: "Terms & Conditions",
  description: "Terms for using the A Gabrielle website and purchasing products.",
  sections: [
    {
      heading: "Using this website",
      paragraphs: [
        "By using this website, you agree to use it lawfully and not to interfere with its operation, security, or other visitors' use of the site.",
      ],
    },
    {
      heading: "Product information",
      paragraphs: [
        "We make reasonable efforts to present product descriptions, images, ingredients, and prices accurately. Colors and appearance may vary by screen, and product details or availability may change.",
        "Please review the Product Information & Care page and ingredient list before purchasing. If you have allergies or concerns about an ingredient, contact a qualified healthcare professional before use.",
      ],
    },
    {
      heading: "Orders and payment",
      paragraphs: [
        "Submitting an order is a request to purchase the selected items. Orders are subject to acceptance, availability, successful payment, and correction of pricing or listing errors. The checkout will display applicable charges before you complete your purchase.",
      ],
    },
    {
      heading: "Shipping and returns",
      paragraphs: [
        "Processing, delivery, and shipping details are described in our Shipping Policy. Returns and exchanges are described in our Return & Exchange Policy. Please review those policies before placing an order.",
      ],
    },
    {
      heading: "Product use and safety",
      paragraphs: [
        "Products are intended for external use only. Review ingredient and care information, perform a patch test before first use, and discontinue use if irritation occurs. Keep products away from children and avoid contact with eyes.",
      ],
    },
    {
      heading: "Website content",
      paragraphs: [
        "Website text, branding, photographs, and other content are provided for the store's use and may not be copied or reused commercially without permission, except where permitted by law.",
      ],
    },
    {
      heading: "Changes and contact",
      paragraphs: [
        "These terms may be updated as the store or its practices change. Continued use of the website after changes are posted means you should review the updated terms. For questions, contact info@agabrielle.co.",
      ],
    },
  ],
};
