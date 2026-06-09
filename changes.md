# Improve homepage

- Header
  - /FAC logo used
  - Mascot head sized and aligned correctly
  - Burger menu added hover animation and X icon when open
  - Burger menu nav links hover animations added
  - Burger menu cleaned up and animation added
- Hero
  - Two column design for better readability
  - Slight layout changes to the text for easier hierarchy and readability
  - Layout changes, so the whole section fits on one screen without scrolling on a 1080p display
  - 1 Model is a better third point than the model size requirement
- Buttons
  - Updated button layout to make it cleaner
  - Added hover animations
- Favicon added in various formats
- Footer
  - Complete overhaul of the footer design and layout to make it into a sitemap that can easily be expanded when the site grows
  - Added short descriptions, links to site sections, and to external references
- Challenge section
  - Added fitting pictures for each category
  - Tightened up the layout and spacing of the section
  - Added proper mobile layout for the section
- Support mobile resolutions down to 320px width by making sure nothing breaks
- Kaggle section: Launch target card now properly renders on mobile
- Preview section: Added nicer preview image taken from the video
- Timeline section: Added more modern and cleaner looking timeline design
- Resources section: Resources cards now properly renders on mobile
- Tightened the layout and spacing overall to make it consistent
- Performance optimizations
  - Properly sized all images and added alt text for accessibility and performance
  - Converted all images to WebP format for better performance
  - Added lazy loading to all images for better performance
  - Converted all fonts to WOFF2 format for better performance
- SEO optimizations
  - Added meta description and keywords for better search engine ranking
  - Added Open Graph tags for better social media sharing
  - Added Twitter Card tags for better Twitter sharing
  - Created robots.txt file to allow search engines to crawl the site
  - Created sitemap.xml file to help search engines index the site

## To-do

- After you push live, validate + force-refresh the platform caches here:
X: https://cards-dev.twitter.com/validator
Facebook/Slack/Discord: https://developers.facebook.com/tools/debug/
LinkedIn: https://www.linkedin.com/post-inspector/
Google rich results: https://search.google.com/test/rich-results
- JSON-LD Event has no endDate — Google prefers one for events. Add when the competition end date is known.
- GitHub footer link points to bare https://github.com (index.html:360) — not your org/repo. Dead-end for crawlers and users. Worth pointing at the real repo when it exists.
