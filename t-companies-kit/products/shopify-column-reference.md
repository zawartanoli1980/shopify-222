# Shopify sample CSV column reference

The included UTF-8 CSV has **five illustrative products and seven total variant rows**: headphones have two colors, the tee has two sizes, and the other three products have one variant each. It is not your actual catalog. Product records are draft and unpublished so the examples are not intended for immediate storefront sale.

Create one representative product with variants in Shopify, export it, and compare the supported column names before using this sample. Use the current export as the authoritative template. Import a small pilot and inspect it before scaling up.

| Column | Purpose |
| --- | --- |
| Handle | Groups rows into a product; use stable lowercase hyphenated words |
| Title | Product title on the first row for each handle |
| Body (HTML) | Product description; quote cells containing commas or HTML quotes |
| Vendor | Actual product brand/vendor |
| Type | Internal product type, distinct from Shopify's standardized Product Category |
| Tags | Comma-separated controlled tags inside a quoted CSV cell |
| Published | `FALSE` for the sample; confirm sales-channel publication after import |
| Option1 Name / Value | Primary variant option, e.g. Color / Black |
| Option2 Name / Value | Optional second option, e.g. Size / M |
| Variant SKU | Unique stock identifier for each variant |
| Variant Inventory Tracker | `shopify` for Shopify-tracked sample stock |
| Variant Inventory Qty | Illustrative quantity only; use a separate inventory import for multi-location quantities |
| Variant Inventory Policy | `deny` prevents selling beyond stock for the sample |
| Variant Fulfillment Service | `manual` in the sample |
| Variant Price | Plain decimal without currency symbols, in the store's configured currency |
| Variant Requires Shipping | `TRUE` for physical sample goods |
| Variant Taxable | Sample `TRUE`; merchant must determine correct tax treatment |
| Status | `draft` on each product's first row |

Additional variant rows share the handle and leave product-level fields blank. They provide their own option values, SKU, inventory and price. Single-variant products use `Option1 Name=Title` and `Option1 Value=Default Title`.

Image fields are omitted because no actual product image assets were supplied. Use current export headers such as Image Src, Image Position and Image Alt Text where supported, and provide publicly accessible image URLs that you own or are authorized to use. Do not add fake image paths.

The CSV does not create collections, menus, typed metafield definitions, filter settings, policies, markets, payment methods or shipping rates. It also does not supply standardized Product Category values. Complete those through the supported Shopify Admin/import workflows.

Before updating existing products, back up/export the catalog and inspect the importer's overwrite options. Existing matching handles can be updated; do not assume blank cells or omitted fields will always preserve existing values. Check the current importer guidance for the selected update mode. Review the import report and reconcile product, variant and inventory counts afterward.
