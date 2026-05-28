"use client";

import { useEffect, useRef } from "react";

// ---------- light mode color patching ----------

const DARK_TO_LIGHT = {
  "#3b1f1f": "#fef2f2",
  "#1e3a5f": "#eff6ff",
  "#1a2840": "#eff6ff",
  "#1a2e1a": "#f0fdf4",
  "#3b2a0a": "#fffbeb",
  "#111111": "#f9fafb",
  "#111":    "#f9fafb",
};

const FILL_TO_TEXT = {
  "#fef2f2": "#991b1b",
  "#eff6ff": "#1e3a5f",
  "#f0fdf4": "#14532d",
  "#fffbeb": "#92400e",
  "#f9fafb": "#374151",
};

function patchSvgForLight(svgEl) {
  svgEl.querySelectorAll("[style], [fill], [stroke]").forEach((el) => {
    const style = el.getAttribute("style") || "";
    let newStyle = style;
    for (const [dark, light] of Object.entries(DARK_TO_LIGHT)) {
      newStyle = newStyle.replace(new RegExp(dark, "gi"), light);
    }
    if (newStyle !== style) el.setAttribute("style", newStyle);
    const fill = el.getAttribute("fill");
    if (fill) {
      const mapped = DARK_TO_LIGHT[fill.toLowerCase()];
      if (mapped) el.setAttribute("fill", mapped);
    }
  });
  svgEl.querySelectorAll(".label, .nodeLabel, text, span").forEach((el) => {
    const parent = el.closest("[style]");
    if (!parent) return;
    const style = parent.getAttribute("style") || "";
    for (const [lightFill, textColor] of Object.entries(FILL_TO_TEXT)) {
      if (style.includes(lightFill)) {
        el.style.color = textColor;
        el.style.fill = textColor;
      }
    }
  });
}

// ---------- theme config ----------

function getThemeConfig(isLight) {
  return {
    startOnLoad: false,
    theme: isLight ? "default" : "dark",
    themeVariables: isLight
      ? {
          primaryColor: "#dbeafe",
          primaryTextColor: "#1e3a5f",
          primaryBorderColor: "#3b82f6",
          lineColor: "#374151",
          secondaryColor: "#f3f4f6",
          tertiaryColor: "#ffffff",
          background: "#ffffff",
          mainBkg: "#dbeafe",
          nodeBorder: "#3b82f6",
          clusterBkg: "#f9fafb",
          clusterBorder: "#e5e7eb",
          edgeLabelBackground: "#f3f4f6",
          fontFamily: "inherit",
          fontSize: "13px",
        }
      : {
          primaryColor: "#1e3a5f",
          primaryTextColor: "#f5f5f5",
          primaryBorderColor: "#3b82f6",
          lineColor: "#c8c8d0",
          secondaryColor: "#111111",
          tertiaryColor: "#0a0a0a",
          background: "#0a0a0a",
          mainBkg: "#1a2840",
          nodeBorder: "#3b82f6",
          clusterBkg: "#111111",
          clusterBorder: "#1f1f1f",
          edgeLabelBackground: "#111111",
          fontFamily: "inherit",
          fontSize: "13px",
        },
  };
}

// ---------- sizing ----------

function applySize(svgEl, isLg = false) {
  if (!svgEl) return;
  svgEl.removeAttribute("width");
  svgEl.removeAttribute("height");
  svgEl.style.removeProperty("max-width");
  svgEl.style.width = "100%";
  svgEl.style.height = "auto";
  svgEl.style.maxHeight = isLg ? "700px" : "420px";
}

// ---------- icons ----------

const ICON_EXPAND = `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3"/><path d="M21 8V5a2 2 0 0 0-2-2h-3"/><path d="M3 16v3a2 2 0 0 0 2 2h3"/><path d="M16 21h3a2 2 0 0 0 2-2v-3"/></svg>`;
const ICON_CLOSE = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`;

// ---------- modal ----------

function openModal(svgEl, title) {
  const clone = svgEl.cloneNode(true);
  clone.removeAttribute("style");
  clone.style.width = "100%";
  clone.style.height = "auto";
  clone.style.maxHeight = "none";
  clone.style.display = "block";

  const overlay = document.createElement("div");
  overlay.id = "mermaid-modal";
  overlay.style.cssText = `
    position: fixed; inset: 0; z-index: 9999;
    background: rgba(0,0,0,0.85);
    display: flex; align-items: flex-start; justify-content: center;
    padding: 40px 24px;
    overflow-y: auto;
    backdrop-filter: blur(4px);
  `;

  const box = document.createElement("div");
  const isLight = document.documentElement.dataset.theme === "light";
  box.style.cssText = `
    background: ${isLight ? "#ffffff" : "#111111"};
    border: 1px solid ${isLight ? "#e5e5e5" : "#1f1f1f"};
    border-radius: 12px;
    width: min(95vw, 1200px);
    padding: 20px 24px 24px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    flex-shrink: 0;
  `;

  const header = document.createElement("div");
  header.style.cssText = "display:flex; align-items:center; justify-content:space-between; flex-shrink:0;";

  const titleEl = document.createElement("span");
  titleEl.textContent = title || "Diagram";
  titleEl.style.cssText = `font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; color: ${isLight ? "#555" : "#c8c8d0"};`;

  const closeBtn = document.createElement("button");
  closeBtn.innerHTML = ICON_CLOSE;
  closeBtn.setAttribute("aria-label", "Close");
  closeBtn.style.cssText = `
    display: flex; align-items: center; justify-content: center;
    width: 32px; height: 32px; border-radius: 6px; cursor: pointer;
    border: 1px solid ${isLight ? "#e5e5e5" : "#1f1f1f"};
    background: ${isLight ? "#f5f5f5" : "#1a1a1a"};
    color: ${isLight ? "#111" : "#f5f5f5"};
  `;
  closeBtn.onclick = () => overlay.remove();

  header.append(titleEl, closeBtn);

  const svgContainer = document.createElement("div");
  svgContainer.style.cssText = "overflow: auto; display: flex; align-items: flex-start; justify-content: center;";
  svgContainer.appendChild(clone);

  box.append(header, svgContainer);
  overlay.appendChild(box);

  overlay.onclick = (e) => { if (e.target === overlay) overlay.remove(); };
  const onKey = (e) => { if (e.key === "Escape") { overlay.remove(); document.removeEventListener("keydown", onKey); } };
  document.addEventListener("keydown", onKey);

  document.body.appendChild(overlay);
}

// ---------- toolbar (expand only) ----------

function addToolbar(wrapper, diagramTitle) {
  const toolbar = document.createElement("div");
  toolbar.className = "mermaid-toolbar";

  const expandBtn = document.createElement("button");
  expandBtn.innerHTML = ICON_EXPAND;
  expandBtn.setAttribute("aria-label", "Expand diagram");
  expandBtn.title = "Expand";
  expandBtn.onclick = (e) => {
    e.stopPropagation();
    const svg = wrapper.querySelector("svg");
    if (svg) openModal(svg, diagramTitle);
  };

  toolbar.appendChild(expandBtn);
  wrapper.appendChild(toolbar);
}

function addImageToolbar(figure) {
  const img = figure.querySelector("img");
  if (!img) return;

  // Place expand button in a row below the image, above the figcaption
  const row = document.createElement("div");
  row.style.cssText = "display:flex; justify-content:flex-end; margin-top:6px;";

  const expandBtn = document.createElement("button");
  expandBtn.innerHTML = ICON_EXPAND + `<span style="font-size:11px;margin-left:5px;">Expand</span>`;
  expandBtn.setAttribute("aria-label", "Expand image");
  expandBtn.style.cssText = `
    display: flex; align-items: center;
    padding: 5px 10px; border-radius: 6px; cursor: pointer;
    border: 1px solid var(--border);
    background: var(--background);
    color: var(--foreground);
    font-size: 12px;
    box-shadow: 0 1px 4px rgba(0,0,0,0.15);
    transition: background 0.15s, border-color 0.15s;
  `;
  expandBtn.onmouseenter = () => { expandBtn.style.background = 'var(--accent)'; expandBtn.style.color = '#fff'; expandBtn.style.borderColor = 'var(--accent)'; };
  expandBtn.onmouseleave = () => { expandBtn.style.background = 'var(--background)'; expandBtn.style.color = 'var(--foreground)'; expandBtn.style.borderColor = 'var(--border)'; };
  expandBtn.onclick = () => {
    const caption = figure.querySelector("figcaption")?.textContent || img.alt || "";
    openImageModal(img, caption);
  };

  row.appendChild(expandBtn);

  // Insert row after the img but before figcaption
  const figcaption = figure.querySelector("figcaption");
  if (figcaption) {
    figure.insertBefore(row, figcaption);
  } else {
    figure.appendChild(row);
  }
}

function openImageModal(imgEl, caption) {
  const overlay = document.createElement("div");
  overlay.style.cssText = `
    position: fixed; inset: 0; z-index: 9999;
    background: rgba(0,0,0,0.9);
    display: flex; align-items: flex-start; justify-content: center;
    padding: 40px 24px;
    overflow-y: auto;
    backdrop-filter: blur(6px);
  `;

  const box = document.createElement("div");
  const isLight = document.documentElement.dataset.theme === "light";
  box.style.cssText = `
    background: ${isLight ? "#ffffff" : "#111111"};
    border: 1px solid ${isLight ? "#e5e5e5" : "#1f1f1f"};
    border-radius: 12px;
    width: min(95vw, 1200px);
    padding: 20px 24px 24px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    flex-shrink: 0;
  `;

  const header = document.createElement("div");
  header.style.cssText = "display:flex; align-items:center; justify-content:space-between; flex-shrink:0;";

  const titleEl = document.createElement("span");
  titleEl.textContent = caption ? caption.slice(0, 80) + (caption.length > 80 ? "…" : "") : "Image";
  titleEl.style.cssText = `font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.06em; color: ${isLight ? "#555" : "#c8c8d0"}; max-width: 80%;`;

  const closeBtn = document.createElement("button");
  closeBtn.innerHTML = ICON_CLOSE;
  closeBtn.setAttribute("aria-label", "Close");
  closeBtn.style.cssText = `
    display: flex; align-items: center; justify-content: center;
    width: 32px; height: 32px; border-radius: 6px; cursor: pointer; flex-shrink: 0;
    border: 1px solid ${isLight ? "#e5e5e5" : "#1f1f1f"};
    background: ${isLight ? "#f5f5f5" : "#1a1a1a"};
    color: ${isLight ? "#111" : "#f5f5f5"};
  `;
  closeBtn.onclick = () => overlay.remove();
  header.append(titleEl, closeBtn);

  const imgClone = document.createElement("img");
  imgClone.src = imgEl.src;
  imgClone.alt = imgEl.alt;
  imgClone.style.cssText = "width:100%; height:auto; border-radius:8px; display:block;";

  box.append(header, imgClone);
  overlay.appendChild(box);
  overlay.onclick = (e) => { if (e.target === overlay) overlay.remove(); };
  const onKey = (e) => { if (e.key === "Escape") { overlay.remove(); document.removeEventListener("keydown", onKey); } };
  document.addEventListener("keydown", onKey);
  document.body.appendChild(overlay);
}

// ---------- store & render ----------

const graphStore = new Map();
const titleStore = new Map();

async function renderAll(mermaid, isLight) {
  mermaid.initialize(getThemeConfig(isLight));
  for (const [id, def] of graphStore.entries()) {
    const wrapper = document.getElementById(id);
    if (!wrapper) continue;
    try {
      const { svg } = await mermaid.render(`${id}-svg`, def);
      const existingToolbar = wrapper.querySelector(".mermaid-toolbar");
      wrapper.innerHTML = svg;
      if (existingToolbar) wrapper.appendChild(existingToolbar);
      const svgEl = wrapper.querySelector("svg");
      if (svgEl) {
        applySize(svgEl, wrapper.dataset.size === "lg");
        if (isLight) patchSvgForLight(svgEl);
      }
    } catch (err) {
      console.warn("Mermaid re-render error:", err);
    }
  }
}

// ---------- component ----------

export default function MermaidDiagrams() {
  const mermaidRef = useRef(null);

  useEffect(() => {
    const blocks = document.querySelectorAll(
      "pre code.language-mermaid, pre code.hljs.language-mermaid"
    );
    if (!blocks.length) return;

    blocks.forEach((code, i) => {
      const pre = code.parentElement;
      if (!pre) return;
      const def = code.innerText.trim();
      const id = `mermaid-${i}`;
      graphStore.set(id, def);

      let title = "";
      let el = pre.previousElementSibling;
      while (el) {
        if (/^H[1-6]$/.test(el.tagName)) { title = el.textContent.trim(); break; }
        el = el.previousElementSibling;
      }
      titleStore.set(id, title);

      const wrapper = document.createElement("div");
      wrapper.className = "mermaid-diagram";
      wrapper.id = id;
      const subgraphCount = (def.match(/\bsubgraph\b/g) || []).length;
      if (subgraphCount >= 5) wrapper.dataset.size = "lg";
      pre.parentNode.replaceChild(wrapper, pre);
    });

    const isLight = document.documentElement.dataset.theme === "light";
    import("mermaid").then(({ default: mermaid }) => {
      mermaidRef.current = mermaid;
      mermaid.initialize(getThemeConfig(isLight));
      for (const [id, def] of graphStore.entries()) {
        const wrapper = document.getElementById(id);
        if (!wrapper) continue;
        mermaid.render(`${id}-svg`, def)
          .then(({ svg }) => {
            wrapper.innerHTML = svg;
            const svgEl = wrapper.querySelector("svg");
            if (svgEl) {
              applySize(svgEl, wrapper.dataset.size === "lg");
              if (isLight) patchSvgForLight(svgEl);
            }
            addToolbar(wrapper, titleStore.get(id) || "");
          })
          .catch((err) => console.warn("Mermaid render error:", err));
      }

      // Add expand button to all blog images wrapped in <figure>
      document.querySelectorAll("#blog-article figure").forEach(addImageToolbar);
    });

    const observer = new MutationObserver((mutations) => {
      for (const m of mutations) {
        if (m.attributeName === "data-theme" && mermaidRef.current) {
          const light = document.documentElement.dataset.theme === "light";
          renderAll(mermaidRef.current, light);
        }
      }
    });
    observer.observe(document.documentElement, { attributes: true });

    return () => {
      observer.disconnect();
      graphStore.clear();
      titleStore.clear();
    };
  }, []);

  return null;
}
