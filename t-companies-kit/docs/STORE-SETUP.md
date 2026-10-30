# T Companies store setup

## Design direction

Use matte black `#111214`, slate `#525B68`, white `#FFFFFF`, soft gray `#F5F6F8`, and electric blue `#2563EB`. Muted gold `#B89A60` is an optional decorative accent. Light product grids preserve image and price clarity; dark hero, header and footer areas establish the premium brand. Use blue consistently for primary actions, generous spacing, readable contrast and visible keyboard focus.

The homepage follows: hero → featured departments → best sellers/featured products → trust information → brand story → customer stories when real reviews exist → newsletter/footer. Configure these sections in the theme editor. Empty collection cards and placeholder artwork are setup aids and should be replaced before launch. Default text should never be treated as a verified claim about your business.

## Sitemap and menu

```text
Home
Shop
  Electronics
    Audio
    Charging & Power
    Computer Accessories
    Smart Home
  Fashion
    Clothing
    Footwear
    Activewear
    Seasonal Essentials
  Home & Living
    Kitchen & Dining
    Organization
    Lighting
    Décor
  Gadgets & Tools
    Everyday Gadgets
    DIY Tools
    Travel Gadgets
    Car Gadgets
  Accessories
    Bags & Wallets
    Watches & Jewelry
    Phone Cases
    Travel Accessories
  Outdoor & Lifestyle
    Fitness Accessories
    Outdoor Essentials
    Sports Accessories
    Leisure
New Arrivals
Best Sellers
Deals
About T Companies
Customer Service
  Contact
  FAQ
  Shipping & Delivery
  Returns & Refunds
  Product Care / Warranty
Policies
  Privacy Policy
  Terms of Service
  Refund Policy
  Shipping Policy
Search
Product pages
Cart
Checkout
Customer account / order history
```

Build links in Shopify's navigation menu editor and select the intended main/footer menus in the theme editor. Menu editing can appear under **Content → Menus** or **Online Store → Navigation**, depending on the current Admin. The theme reads configured Shopify navigation; category names alone do not create collections or product assignments.

Give every product one primary department and subcategory. A charger belongs under Electronics → Charging & Power; a phone case belongs under Accessories → Phone Cases. Cross-merchandising collections can include products from several departments without duplicating product records.

## 1. Upload and customize the theme

1. Upload `t-companies-shopify-theme.zip` in Online Store → Themes. Keep the theme unpublished while setting up.
2. Preview it in Shopify and open Customize. Configure colors/logo, main menu, footer menu, homepage sections and real editorial images.
3. Set image focal points and consistent crop ratios. Give meaningful product/editorial images descriptive alt text.
4. Set business-specific brand copy, contact links, shipping information and return terms. Remove promises that do not match your operations.
5. Add About, FAQ and Contact pages using the page/contact templates where appropriate. Store policies should be configured through Shopify Settings and linked in the footer.

## 2. Prepare and import products

Create and export one product with variants from your own Shopify Admin first. Use the export as the current authoritative format, then map the sample columns to it. Shopify's CSV fields and supported import workflows can change. Import 5–10 real pilot products before the full catalog.

Use distinct SKUs for every variant, stable handles and controlled tags. Review prices, taxability, shipping requirements, product category, images and inventory before publishing. Product `Type` is your internal classification; Shopify's standardized Product Category is a separate field. The sample CSV deliberately omits the standardized category so you can select a valid current taxonomy value.

The sample products are draft/unpublished and illustrative. Replace names, descriptions, prices, SKUs and quantities with actual data. No images, reviews, certifications or supplier claims are supplied as real product information. Product CSV stock quantity is not a multi-location inventory plan: use Shopify's separate inventory CSV workflow for location-specific stock. Review overwrite settings carefully when updating handles that already exist.

## 3. Create collections

Create automated collections using consistent tag conditions, for example:

| Collection | Suggested condition |
| --- | --- |
| Electronics | Product tag is `dept:electronics` |
| Audio | Product tag is `sub:audio` AND `dept:electronics` |
| Fashion | Product tag is `dept:fashion` |
| Home & Living | Product tag is `dept:home-living` |
| Gadgets & Tools | Product tag is `dept:gadgets-tools` |
| Accessories | Product tag is `dept:accessories` |
| Outdoor & Lifestyle | Product tag is `dept:outdoor-lifestyle` |
| Featured | Product tag is `merch:featured` |

Use **all conditions** when combining department and subcategory tags. For Deals, use a deliberate merchandising tag or an applicable supported pricing condition and verify that every shown sale price is accurate. Do not label products as best sellers without sales evidence; curate a Featured collection until evidence exists. Create New Arrivals manually or with supported automated conditions appropriate to your business.

## 4. Configure filtering and search

Install/configure Shopify Search & Discovery. The theme renders supported Shopify collection/search filters; it does not create filter definitions or app settings. Start with:

- Availability and price.
- Product type and vendor/brand.
- Variant color and size where relevant.
- Structured metafields such as material, compatibility and use case.

Use department/subcategory collection links for category navigation. Add category filters only when your current Shopify filter source supports the desired taxonomy. Some native price filtering has currency/market restrictions; verify behavior in each selling market.

Keep tags primarily for internal organization and automated collections. Raw tags do not automatically become neat grouped storefront filters. Prefer typed metafields for customer-facing attributes; an additional filter app may be needed if your exact grouped-tag UX is required. Add only relevant filters to each category. Set search synonyms based on actual product language and test common product names, misspellings and no-result searches.

## 5. Apps and international sales

| Need | Starting point | Optional alternative |
| --- | --- | --- |
| Search and filters | Shopify Search & Discovery | Boost AI Search & Filter or Searchanise |
| Reviews | Judge.me | Loox for a photo-led review approach |
| Complementary products | Shopify Search & Discovery | Rebuy for more advanced cart/personalization workflows |
| Currency and markets | Shopify Markets and eligible Shopify Payments configuration | Add another currency app only for a specific verified gap |

Check current availability, pricing, plan requirements, privacy permissions and theme compatibility before installing any app. Do not install overlapping search/review apps. Currency display and currency acceptance at checkout are different capabilities; verify payment provider, country and market eligibility. Configure languages, international prices, duties and shipping separately as needed. Install review apps using supported app blocks or documented snippets; a theme's placeholder customer-story section is not a review verification system.

## 6. Product page and checkout essentials

Use clear titles, strong photographs, accurate descriptions/specifications, accessible variant selectors, obvious stock status and a prominent Add to Cart action. Explain shipping expectations, returns, warranty terms and total charges honestly. Show useful related products without interrupting purchase. Enable guest checkout where available and appropriate. Configure Shopify customer accounts in Admin before linking to account features.

Configure payment methods, taxes, shipping zones/rates, markets, email sender details, customer notifications and policies with the correct legal/business details. The theme ZIP cannot configure these settings.

## 7. Launch checks

Before publishing, verify in Shopify:

- All navigation links point to existing published pages or collections.
- Products, variants, images, stock and prices match your source data.
- Homepage category cards link correctly and no setup placeholder content remains.
- Search and filters work on desktop and mobile, including empty results and clear/reset actions.
- Variant changes select the correct SKU, price and availability; cart additions and quantity updates use the correct variant.
- A test order completes with the correct discounts, shipping, taxes and payment behavior. Refund/cancellation workflows are understood.
- Contact form and newsletter behavior are tested; marketing consent and confirmation copy match the actual workflow.
- Real customer testimonials are used with permission; no fabricated ratings, sales counts, scarcity or trust certifications appear.
- Keyboard navigation, visible focus, headings, image alt text and mobile readability work.
- Performance is measured after installing apps and uploading compressed media.
- Policy/contact links and order emails contain current business details.

Measure product views, search zero-results, add-to-cart rate, checkout progression and conversion after launch. A complete 200+ product catalog, app installation and live-store validation remain merchant setup tasks; the kit supplies the theme and working blueprint.
