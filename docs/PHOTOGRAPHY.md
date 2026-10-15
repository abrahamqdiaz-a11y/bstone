# Photography direction and sources

Briarstone's positioning is a calm, accountable partner through a home transition: one plan for clearing, cleaning, and preparation. Warm residential spaces, natural light, forest green, ivory, and editorial serif typography support that promise. Avoid imagery of dumpsters, distressed families, or staged staff presented as the real team.

All seven services have dedicated pages, unique service copy, FAQs, inquiry preselection, metadata, and separate photo assignments. The homepage groups them by the client's need; the service directory links to every individual page with an image-led card.

## Free stock images

The selected image URLs are from Unsplash, whose standard license permits free commercial use: https://unsplash.com/license. Do not use these photographs as proof of a Briarstone project, client, employee, or before/after result. The interface labels them as illustrative stock photography. No paid stock account or API key is required.

| Use | Unsplash image source |
| --- | --- |
| Homepage / estate cleanouts | https://images.unsplash.com/photo-1600210492486-724fe5c67fb0 |
| Inherited homes | https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde |
| Downsizing / about detail | https://images.unsplash.com/photo-1586023492125-27b2c045efd7 |
| Estate transitions / about | https://images.unsplash.com/photo-1600585154340-be6161a56a0c |
| Pre-listing preparation | https://images.unsplash.com/photo-1600607687939-ce8a6c25118c |
| Home cleanouts | https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3 |
| Home projects | https://images.unsplash.com/photo-1600607687920-4e2a09cf159d |
| Care and trust | https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea |

Images are delivered directly from the Unsplash CDN with a fixed size and quality. Layout dimensions are reserved to avoid shifting text. If the CDN fails, the existing original illustration appears. Local files can replace URLs in `src/content/images.ts`; those use Next image optimization automatically.

**Verification pending:** The cloud network currently returns 403 for Unsplash, including its license page. These URLs and their exact visual content have not been verified in this environment. Before publishing, allow `images.unsplash.com` and `unsplash.com`, inspect every image, confirm the standard license/source, and adjust alt text to match the actual photo. Download approved images to `public/photos/` to eliminate the runtime CDN dependency. The added domains are saved in the environment draft; saving that draft alone does not apply runtime policy.
