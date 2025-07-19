# 🌐 Oldagram – A Vintage-Inspired Instagram Clone

**Oldagram** is a minimalist social media-style webpage that mimics Instagram but with a fun twist — it features **classic artists** like Vincent van Gogh and Joseph Ducreux as if they were modern influencers.

---

## 🔧 Key Features

- 📸 **Post Feed**: Displays a vertical scroll of posts, each with:

  - A profile section (name, avatar, and location)
  - A main image (styled like a photo post)
  - Action icons: Like ❤️, Comment 💬, and Share ✉️
  - Like count and a comment section

- ❤️ **Interactive Likes**:

  - Clicking the heart icon or double click/touch the post's photo increases the number of likes for that specific post and another clikc is for unlick which decreases the number of likes for that specific post.
  - The like counter updates immediately after clicking.
  - Progressive Web App (PWA) feature

- 🎨 **Static Data**:

  - Posts are hardcoded in a `posts` array (with name, username, avatar, image, comment, and initial likes)
  - Html content is rendered from the javaScript

- 📱 **Responsive Layout**:
  - Full-width on mobile
  - Centered and constrained to a max-width (e.g., 480px) on tablets/laptops for a clean, app-like appearance
