/* =========================================================
   frames_of_lamuriyan — vanilla JS interactions
   1. Scroll reveal   2. Counter animation   3. Parallax
   4. Mouse glow      5. Particles
   ========================================================= */
(function () {
    "use strict";
    var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    /* ---------- 1. Scroll reveal + counters ---------- */
    var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
            if (!en.isIntersecting) return;
            en.target.classList.add("in");
            en.target.querySelectorAll("[data-count]").forEach(count);
            io.unobserve(en.target);
        });
    }, { threshold: 0.15, rootMargin: "0px 0px -8% 0px" });
    document.querySelectorAll(".reveal").forEach(function (el) { io.observe(el); });

    function count(el) {
        var target = parseInt(el.dataset.count, 10), start = performance.now(), dur = 1400;
        if (reduce) { el.textContent = target; return; }
        (function step(now) {
            var p = Math.min((now - start) / dur, 1);
            el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
            if (p < 1) requestAnimationFrame(step);
        })(start);
    }

    /* ---------- 2. Hero parallax ---------- */
    var heroBg = document.getElementById("heroBg").firstElementChild, ticking = false;
    if (!reduce) {
        window.addEventListener("scroll", function () {
            if (ticking) return;
            ticking = true;
            requestAnimationFrame(function () {
                heroBg.style.transform = "translate3d(0," + window.scrollY * 0.28 + "px,0) scale(1.06)";
                ticking = false;
            });
        }, { passive: true });
    }

    /* ---------- 3. Mouse glow ---------- */
    var glow = document.getElementById("glow");
    window.addEventListener("pointermove", function (e) {
        glow.style.setProperty("--mx", e.clientX + "px");
        glow.style.setProperty("--my", e.clientY + "px");
    }, { passive: true });

    /* ---------- 4. Floating particles ---------- */
    var cv = document.getElementById("particles"), ctx = cv.getContext("2d"), dots = [], raf;
    function size() {
        cv.width = window.innerWidth;
        cv.height = window.innerHeight;
        var n = Math.min(70, Math.round(window.innerWidth / 26));
        dots = Array.from({ length: n }, function () {
            return {
                x: Math.random() * cv.width, y: Math.random() * cv.height,
                r: Math.random() * 1.5 + 0.3,
                vy: -(Math.random() * 0.25 + 0.05), vx: (Math.random() - 0.5) * 0.12,
                a: Math.random() * 0.5 + 0.1
            };
        });
    }
    function draw() {
        ctx.clearRect(0, 0, cv.width, cv.height);
        dots.forEach(function (d) {
            d.y += d.vy; d.x += d.vx;
            if (d.y < -5) { d.y = cv.height + 5; d.x = Math.random() * cv.width; }
            ctx.beginPath();
            ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
            ctx.fillStyle = "rgba(212,175,55," + d.a + ")";
            ctx.fill();
        });
        raf = requestAnimationFrame(draw);
    }
    if (!reduce) {
        size(); draw();
        window.addEventListener("resize", function () { cancelAnimationFrame(raf); size(); draw(); });
    }
})();