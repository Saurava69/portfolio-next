# Blog Writing Guide

## Creating a New Post

Create a new `.mdx` file in this folder (`content/blog/`). The filename becomes the URL slug.

**Example:** `my-new-post.mdx` → `sauravx.com/blog/my-new-post/`

## Frontmatter (Required)

Every post must start with frontmatter:

```yaml
---
title: "Your Post Title"
description: "A short summary for SEO and the blog listing page."
date: "2026-05-07"
tags: ["tag1", "tag2", "tag3"]
---
```

- `title`  Displayed as the page heading and in browser tab
- `description`  Shows on the blog listing page and in Google search results
- `date`  Format: YYYY-MM-DD. Posts are sorted by date (newest first)
- `tags`  Array of strings. Displayed as pills on the post

## Markdown Syntax

### Headings

```markdown
## Section Title (h2)  appears in Table of Contents
### Subsection (h3)  appears indented in TOC
```

Only use `##` and `###`. Don't use `#` (that's the post title).

### Text Formatting

```markdown
**bold text**
*italic text*
`inline code`
[link text](https://example.com)
```

### Code Blocks

````markdown
```java
public class Example {
    public static void main(String[] args) {
        System.out.println("Hello");
    }
}
```
````

Supported languages: `java`, `javascript`, `python`, `sql`, `lua`, `json`, `yaml`, `bash`, `html`, `css`, `typescript`, etc.

### Lists

```markdown
- Bullet point
- Another point
  - Nested point

1. Numbered item
2. Second item
```

### Blockquotes

```markdown
> This is a blockquote. Use it for callouts or quotes.
```

### Horizontal Rule

```markdown
---
```

## Images

Place images in the `public/blog/` folder, then reference them:

```markdown
![Alt text describing the image](/blog/my-image.png)
```

**File structure:**
```
public/
└── blog/
    ├── architecture-diagram.png
    └── redis-flow.png
```

**Tips:**
- Use descriptive alt text (helps SEO and accessibility)
- Supported formats: PNG, JPG, WebP, SVG, GIF
- Images are automatically styled with rounded corners and border

## Videos

### Self-hosted Video

Place video files in `public/blog/` and use HTML:

```html
<video src="/blog/demo-video.mp4" controls></video>
```

With autoplay (muted required for autoplay):

```html
<video src="/blog/demo-video.mp4" controls autoplay muted loop></video>
```

### YouTube Embed

Use an iframe with the YouTube embed URL:

```html
<iframe src="https://www.youtube.com/embed/VIDEO_ID"></iframe>
```

**How to get the embed URL:**
1. Go to the YouTube video
2. Click "Share" → "Embed"
3. Copy just the URL from the `src=""` attribute

**Example:**
```html
<iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ"></iframe>
```

The iframe is automatically styled to 16:9 aspect ratio and full width.

### Vimeo Embed

```html
<iframe src="https://player.vimeo.com/video/VIDEO_ID"></iframe>
```

## Full Example Post

```mdx
---
title: "Building a Real-Time Chat App"
description: "How I built ChatWave using React, Node.js, and Socket.io with end-to-end encryption."
date: "2026-05-07"
tags: ["react", "node.js", "websockets"]
---

## Overview

Brief intro paragraph here.

![System architecture diagram](/blog/chatwaveArchitecture.png)

## Implementation

### WebSocket Setup

Here's the core Socket.io configuration:

```javascript
const io = new Server(httpServer, {
  cors: { origin: "http://localhost:3000" }
});

io.on("connection", (socket) => {
  socket.on("message", (data) => {
    socket.to(data.room).emit("message", data);
  });
});
```

### Demo

<iframe src="https://www.youtube.com/embed/abc123"></iframe>

## Results

- 500+ concurrent connections with <50ms latency
- End-to-end encryption using AES-256

---

Thanks for reading! Check out the [source code](https://github.com/saurava69/chatwaveApp).
```

## Deployment

After creating your post:

1. Save the `.mdx` file in `content/blog/`
2. Run `npm run build` to verify it renders correctly
3. Push to GitHub  the sitemap updates automatically
4. The post appears on `/blog` and gets its own URL at `/blog/your-slug/`

## Notes

- The Table of Contents is auto-generated from your `##` and `###` headings
- SEO metadata (OG tags, canonical URL, BlogPosting schema) is auto-generated from your frontmatter
- No need to edit the sitemap  it regenerates on every build
- HTML tags (iframe, video) work directly in the markdown
