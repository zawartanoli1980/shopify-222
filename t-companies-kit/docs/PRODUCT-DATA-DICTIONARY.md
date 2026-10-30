# Product data dictionary

Maintain one spreadsheet as the source of truth and keep a backup before every update/import. Agree on permitted terms before entering 200+ products.

## Identity and taxonomy

| Field | Rule | Example |
| --- | --- | --- |
| Title | Brand + recognizable product + meaningful differentiator | T Companies Wireless Headphones |
| Handle | Stable lowercase words separated by hyphens | `tc-wireless-headphones` |
| SKU | Unique per variant; BRAND-DEPT-TYPE-NUMBER-VARIANT | `TC-EL-AUD-001-BLK` |
| Vendor | Actual selling brand/supplier as appropriate | T Companies |
| Type | One consistent human-readable internal classification | Wireless Headphones |
| Product Category | Valid Shopify standardized taxonomy value | Select from current Admin/export |
| Color / Size | Product options when they create purchasable variants | Black / M |

Do not create a new product for every color or size when they belong to one product family. Do not change handles casually after launch; preserve links and configure redirects when needed. Do not reuse SKUs across variants. Avoid changing handles merely to reorder products.

## Controlled tag vocabulary

| Family | Allowed initial values |
| --- | --- |
| Department | `dept:electronics`, `dept:fashion`, `dept:home-living`, `dept:gadgets-tools`, `dept:accessories`, `dept:outdoor-lifestyle` |
| Subcategory examples | `sub:audio`, `sub:clothing`, `sub:organization`, `sub:bags-wallets`, `sub:fitness-accessories` |
| Features | `feature:wireless`, `feature:portable` when accurate |
| Use cases | `use:travel`, `use:office`, `use:fitness` when accurate |
| Merchandising | `merch:featured`, `merch:deal` when deliberately assigned |

Use exactly one primary department and one primary subcategory per product. Add other merchandising/use tags as needed. Use lowercase consistently, trim whitespace and avoid synonyms for the same classification. Tags such as `dept:home`, `department:home` and `dept:home-living` should not coexist as equivalent values. Tags organize data; their presence does not create Shopify collections or filter definitions.

## Recommended structured metafields

Create definitions in Shopify Settings → Custom data and choose appropriate supported types. The following names are suggested definitions, not preconfigured features:

| Namespace/key | Suggested type | Purpose |
| --- | --- | --- |
| `custom.material` | Single-line text or a constrained list | Cotton, stainless steel, etc. |
| `custom.compatibility` | List of single-line text | Supported devices/models |
| `custom.use_case` | List of single-line text | Travel, office, fitness |
| `custom.dimensions` | Dimension values or readable text suited to the catalog | Verified product dimensions |
| `custom.care_instructions` | Multi-line text | Actual care instructions |
| `custom.primary_department` | Single-line text with controlled values | Department mapping where useful |

Select filter-compatible types for attributes that will appear in Search & Discovery. Some standardized product categories also provide category attributes; reuse those where practical rather than creating duplicate definitions. Metafield definitions, values, filter registration and theme display are separate setup steps. The theme does not guarantee every custom metafield is displayed automatically.

Export/import support for metafields depends on Shopify's current CSV format and the metafield type. Use Shopify's bulk editor, a supported import workflow or a vetted app for unsupported fields. Never place arbitrary metafield columns into a CSV and assume they will import.

## Data quality checklist

- Every variant has a unique SKU and correct option combination.
- Inventory and fulfillment locations match the actual operation.
- Product descriptions, dimensions and compatibility are verified.
- Image alt text describes the image without keyword stuffing.
- Prices and compare-at prices reflect real offers; tax and shipping flags are reviewed.
- Department/subcategory/type terms match the dictionary exactly.
- Product status and sales-channel publication are reviewed after import.
- Sample content is removed before launch.
