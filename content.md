# Shruti's Studio content

This file is the content inventory for the current website. Page components and collection data remain the source of truth for the rendered copy and image paths.

## Pages

### Home (`#home`)

- Title: Shruti's Studio
- Intro: Art, imagination, and handmade things — made with heart and shared with you.
- Call to action: Explore my artwork
- Portrait caption: Making a little magic, every day.

### Summer Camp (`#summer-camp`)

- Intro: Glimpses of previous summer camps, with workshops, activities, and student showcases.
- Workshop Videos & Live Highlights: glass painting, movement lab, mango festival, sunflower craft, collaborative murals, games, and student song performance.
- Hands-On Workshop Photography: color palette and play, leaf printing, scratch art, student showcase, camp finale, and creative troupe.
- The two galleries render as horizontal filmstrips.

### Artwork (`#artwork`)

- Intro: Made by hand, made with heart.
- Note: Art takes many forms, including oil on canvas, vector art, henna design, and hands-on craft.
- Select a category card to scroll to its collection.
- Collections:
  - Handmade Cards: 15 watercolor, gouache, and mixed-media cards.
  - Digital Art: vector illustration and digital portrait painting.
  - Pocket Paintings: miniature plein-air canvas.
  - Pen & Ink: cityscape and architecture sketch.
- The galleries use local images in horizontal filmstrips.

### Traditional Arts (`#traditional-arts`)

- Rangoli: festive peacock feather floor rangoli and traditional floral mandala.
- Mehandi: bridal mehndi adornment and Indo-Arabic festive henna trail.
- Call to action: contact the studio about custom art, camps, workshops, school projects, or wedding mehandi.
- Both collections use local images in horizontal filmstrips.

### Say Hello (`#say-hello`)

- Contact channels: WhatsApp at +91 95997 55840 and email at projects.twwg@gmail.com.

## Shared links

- Instagram: [@miii_art_gallery__](https://www.instagram.com/miii_art_gallery__/)
- WhatsApp: [Chat with the studio](https://wa.me/919599755840)

## Content and asset locations

- Page copy and collection entries are maintained in `src/components/`.
- Artwork collection data, including category-card covers, is maintained in `src/data/artworkCollections.ts`.
- Shared image collection presentation is implemented in `src/components/ImageCollection.tsx`.
- Local gallery images are under `public/images/` and referenced by absolute paths beginning with `/images/`.
- Shared colors and fonts are defined in `src/theme.css`.
