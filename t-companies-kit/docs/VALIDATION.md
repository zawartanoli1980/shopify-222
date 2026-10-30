# Validation and launch status

## Completed for this package

- Shopify Theme Check (`@shopify/theme-check-node` 3.31.0): zero errors or warnings.
- JSON templates, theme settings and section schemas parse; template section references exist.
- JavaScript syntax check passed.
- Sample CSV parsed: five draft products, seven variant rows, seven unique SKUs.
- Offline homepage and product fixtures rendered using LiquidJS with mocked Shopify data. This is not Shopify server rendering.
- Chromium browser checks on the offline preview: desktop and mobile layout, six department tiles, sample product carousel cards, empty testimonials hidden, desktop/mobile navigation, available/sold-out variant controls, price/compare-price changes, and no JavaScript exceptions.
- No horizontal page overflow in the four preview pages at a 390px viewport.
- Theme ZIP contains the supported theme folders at its root, with no enclosing project directory. Archive integrity verified.

## Still required in your own Shopify store

The theme has not been uploaded or validated against a live Shopify shop. Before publishing:

1. Upload the inner theme ZIP and preview every template using real products.
2. Import your actual catalog after a small pilot import; reconcile variants and inventory by location.
3. Create and connect collections, nested navigation, footer/help pages, real photography, and accurate business copy. Default department tiles browse all products until connected to their actual collections.
4. Configure Shopify Search & Discovery filters, synonyms and product metafields. Confirm price, availability, product type, vendor and the chosen attribute filters against actual product data. Filtering runs on Shopify and is not simulated in the offline preview.
5. Confirm variants, prices, stock, quantity rules, cart updates/removal, discounts, taxes, shipping, and a complete test order. Buying, subscriptions, contact submissions and localization require Shopify; the offline preview disables all form submissions.
6. Configure Shopify Markets and supported checkout currencies if required. Payment availability depends on your merchant country and payment provider.
7. Use Shopify's new customer accounts for hosted account pages; this starter does not include legacy customer-account templates.
8. Add approved real customer reviews, policies, contact information and the actual shipping/returns terms. No reviews are fabricated in this theme.
9. Recheck accessibility, image quality, performance, privacy/consent and any installed app blocks. Product pages and an Apps section accept Shopify app blocks.

The mock product drawings and prices in `preview/` illustrate the design only. The Shopify theme uses your real Shopify products; it does not include or invent a 200-product inventory. The sample CSV remains draft/unpublished until you deliberately change it.
