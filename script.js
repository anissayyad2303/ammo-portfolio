const html = document.documentElement;
const canvas = document.getElementById("hero-lightpass");
const context = canvas.getContext("2d", { alpha: true });
const model = new Image();
model.src = "./ammara-reference.jpeg";
let scrollFraction = 0;
let viewportWidth = window.innerWidth;
let viewportHeight = window.innerHeight;

function resizeCanvas() {
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  viewportWidth = window.innerWidth;
  viewportHeight = window.innerHeight;
  canvas.width = Math.round(viewportWidth * dpr);
  canvas.height = Math.round(viewportHeight * dpr);
  canvas.style.width = viewportWidth + "px";
  canvas.style.height = viewportHeight + "px";
  context.setTransform(dpr, 0, 0, dpr, 0, 0);
  drawModel();
}

function drawModel() {
  if (!model.complete || !model.naturalWidth) return;
  context.clearRect(0, 0, viewportWidth, viewportHeight);
  const progress = Math.max(0, Math.min(1, scrollFraction));
  // Preserve the original scroll-driven canvas effect: the supplied model gently
  // scales and travels as the page scrolls, replacing the old frame-sequence model.
  const maxH = viewportHeight * (viewportWidth < 700 ? 0.78 : 1.02);
  const scale = 0.88 + progress * 0.22;
  const drawH = maxH * scale;
  const drawW = drawH * (model.naturalWidth / model.naturalHeight);
  const centerX = viewportWidth * (viewportWidth < 700 ? 0.66 : 0.68) - progress * viewportWidth * 0.035;
  const centerY = viewportHeight * (0.52 - progress * 0.045);
  context.save();
  context.globalAlpha = 0.97;
  context.shadowColor = "rgba(158, 91, 255, 0.32)";
  context.shadowBlur = 24;
  context.drawImage(model, centerX - drawW / 2, centerY - drawH / 2, drawW, drawH);
  context.restore();
}

function updateFromScroll() {
  const maxScroll = Math.max(1, html.scrollHeight - window.innerHeight);
  scrollFraction = html.scrollTop / maxScroll;
  requestAnimationFrame(drawModel);
}

model.onload = () => { resizeCanvas(); updateFromScroll(); };
window.addEventListener("resize", resizeCanvas, { passive: true });
window.addEventListener("scroll", updateFromScroll, { passive: true });
resizeCanvas();
