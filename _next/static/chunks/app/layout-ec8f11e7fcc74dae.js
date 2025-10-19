(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [177],
  {
    347: () => {},
    1175: (e, s, t) => {
      "use strict";
      t.d(s, { A: () => l });
      var a = t(5155), r = t(2115);
      let l = (e) => {
        let { isOpen: s, onClose: t, children: l, preventClose: n = !1, style: i } = e;
        return (
          (0, r.useEffect)(() => {
            let e = (e) => { "Escape" !== e.key || n || t(); };
            return (
              s &&
                (document.addEventListener("keydown", e),
                 (document.body.style.overflow = "hidden")),
              () => {
                document.removeEventListener("keydown", e),
                (document.body.style.overflow = "unset");
              }
            );
          }, [s, t, n]),
          s ? (0, a.jsx)("div", {
            className: "fixed inset-0 flex items-center justify-center p-4 z-50",
            style: { backgroundColor: "rgba(93, 48, 20, 0.88)" },
            onClick: n ? void 0 : (e) => { e.stopPropagation(), e.preventDefault(), t(); },
            children: (0, a.jsx)("div", {
              className: "bg-[#FFD44F] w-full max-w-[540px] p-4 rounded-[8px] border border-[#FF9933] max-h-[80vh] overflow-y-auto",
              style: { ...i },
              onClick: (e) => { e.stopPropagation(), e.preventDefault(); },
              children: l,
            }),
          }) : null
        );
      };
    },

    3126: (e, s, t) => {
      "use strict";
      t.d(s, {
        AE: () => w, At: () => j, Br: () => g, Bt: () => d, Bu: () => N,
        Ig: () => m, MG: () => x, N5: () => b, Xz: () => k, aW: () => o,
        bH: () => u, cp: () => c, in: () => f, r1: () => v, sQ: () => D,
        tN: () => y, up: () => p,
      });
      var a = t(3570), r = t(8794), l = t(8780), n = t(6694), i = t(6671);

      let o = (e) => {
        try {
          let s = (0, r.H)(e);
          if (isNaN(s.getTime())) throw Error("Invalid date");
          let t = new Date(s.getTime() - 6e4 * s.getTimezoneOffset());
          if ((0, l.c)(t)) return (0, n.GP)(t, "h:mma").toLowerCase();
          return (0, n.GP)(t, "do MMM");
        } catch (s) {
          console.error("Error formatting date:", s);
          return e;
        }
      };

      const c = (e) => {
        let s = Number(e);
        return s % 1 == 0 ? s.toString() : Number(s.toFixed(4)).toString();
      };

      const d = (e) => {
        let s = e.replace(/[^\d.]/g, "");
        if (!s) return "";
        let t = parseFloat(s);
        if (isNaN(t)) return "";
        if (t > 100) return "100";
        if (e.includes(".")) {
          let [s, a] = e.split(".");
          if (a && a.length > 2) return Number(t.toFixed(2)).toString();
        }
        return e;
      };

      const x = function (e = "modal") {
        window.Jupiter
          ? window.Jupiter.init({
              displayMode: e,
              endpoint: "https://mainnet.helius-rpc.com/?api-key=d94f96c1-6be8-42be-90c4-311dec83c9f7",
              ...("integrated" === e ? { integratedTargetId: "integrated-terminal" } : {}),
              formProps: {
                initialInputMint: "So11111111111111111111111111111111111111112",
                initialOutputMint: "tbd",
                fixedInputMint: !0,
                fixedOutputMint: !0,
              },
              containerClassName: "max-h-[90vh] lg:max-h-[600px] w-full lg:w-[600px] overflow-hidden",
              containerStyles: { zIndex: 999999 },
            })
          : (console.error("Jupiter Terminal is not loaded"), i.o.error("Error loading Jupiter Terminal"));
      };

      const m = (e) => {
        try {
          let s = new a.J3(e);
          if (!a.J3.isOnCurve(s.toBytes())) return !1;
          return !0;
        } catch {
          return !1;
        }
      };

      const p = ["0.1", "0.5", "1", "5", "10", "100"];
      const h = ["Indian", "Nigerian", "Chinese"];
      const u = {
        Indian: ["CRIElKBddWiknSUmfeak","05QRrdNgiglhuYOaTQvw","LKs6V6ilINRR5OoPi0bP","LSEq6jBkWbldjNhcDwT1","UxeNKVidAPGOtgg3CLBB"],
        Nigerian: ["KfOKur2SDMsqQVcT1wKb","neMPCpWtBwWZhxEC8qpe","NVp9wQor3NDIWcxYoZiW","ddDFRErfhdc2asyySOG5"],
        Chinese: ["mbL34QDB5FptPamlgvX5"],
      };

      const g = [
        { val:"floor_rolling_laugh", icon:"/assets/laughing-emoji-icon.svg", color:"#F8D75A", audio:"/assets/laugh-reaction.mp3" },
        { val:"fire",                 icon:"/assets/fire-emoji-icon.svg",     color:"#4EAB5E", audio:"/assets/fire-reaction.mp3" },
        { val:"crying_face",          icon:"/assets/crying-emoji-icon.svg",   color:"#A7AAF2", audio:"/assets/cry-reaction.mp3" },
        { val:"angry_sad_unhappy",    icon:"/assets/angry-emoji-icon.svg",    color:"#F27360", audio:"/assets/angry-reaction.mp3" },
        { val:"poop",                 icon:"/assets/poop-emoji-icon.svg",     color:"#EFB03D", audio:"/assets/poop-reaction.mp3" },
        { val:"clown",                icon:"/assets/clown-emoji-icon.svg",    color:"#F2A7B0", audio:"/assets/clown-reaction.mp3" },
      ];

      const f = () => {
        if (Math.random() < 0.6) return "Indian";
        let e = h.filter((e) => e !== "Indian");
        let s = Math.floor(Math.random() * e.length);
        return e[s];
      };

      const b = (e) => {
        let s = u[e];
        if (Array.isArray(s)) {
          let e = Math.floor(Math.random() * s.length);
          return s[e];
        }
        return s;
      };

      const j = (e) => {
        switch (e) {
          case "Nigerian": return "/assets/nigeria-flag-icon.svg";
          case "Chinese":  return "/assets/china-flag-icon.svg";
          case "Indian":
          default:         return "/assets/india-flag-icon.svg";
        }
      };

      const v = (e) => /\.(mp4|webm|mov|qt|avi)$/i.test(e);
      const w = (e) => !!e && e.type.startsWith("video/");
      const N = 6;
      const y = 200;
      const k = 60;
      const D = (e) => e.trim().split(/\s+/).filter((e) => e.length > 0).length;
    },

    3978: (e, s, t) => {
      "use strict";
      t.d(s, { default: () => f });
      var a = t(5155), r = t(2115), l = t(1175), n = t(3126), i = t(1392), o = t(3599);
      let c = (e) => {
        let { isMobile: s = !1 } = e;
        return (0, a.jsx)(a.Fragment, {
          children: (0, a.jsxs)(o.x, {
            style: {
              background: "black", cursor: "pointer",
              padding: s ? "2px 8px" : "4px 16px", width: "fit",
              borderRadius: "8px", display: "flex", alignItems: "center",
              justifyContent: "center", gap: "8px", color: "#FFD44F",
              fontWeight: 800, height: s ? "24px" : "40px",
            },
            children: [
              (0, a.jsx)("img", { src: "/assets/solana-yellow-icon.svg", alt: "solana", className: s ? "w-3 h-3" : "w-6 h-6" }),
              (0, a.jsx)("span", {
                className: "font-[ComicSans] ".concat(s ? "text-[9px]" : "text-[16px]", " text-[#FFD44F] font-bold block whitespace-nowrap w-full overflow-hidden text-ellipsis"),
                children: "Connect Wallet",
              }),
            ],
          }),
        });
      };

      let d = (e) => {
        var s, t;
        let { isMobile: r = !1 } = e, { publicKey: l, disconnect: n } = (0, i.v)();
        return (0, a.jsx)(a.Fragment, {
          children: (0, a.jsxs)("div", {
            className: "cursor-pointer rounded-full h-full ".concat(r ? "px-2 py-[2px]" : "px-4 py-1", " border border-black flex items-center gap-2 bg-[#FFD44F] shadow-[inset_0px_4px_8px_0px_rgba(0,0,0,0.25)]"),
            onClick: n,
            children: [
              (0, a.jsx)("img", { src: "/assets/solana-brown-icon.svg", alt: "solana", className: "w-3 h-3 lg:w-6 lg:h-6" }),
              (0, a.jsxs)("p", {
                className: "text-[#5D3014] text-[9px] lg:text-[16px] overflow-hidden",
                children: [
                  null == l ? void 0 : (null === (s = l.toBase58()) || void 0 === s ? void 0 : s.slice(0, 4)),
                  "...",
                  null == l ? void 0 : (null === (t = l.toBase58()) || void 0 === t ? void 0 : t.slice(-4)),
                ],
              }),
            ],
          }),
        });
      };

      var x = t(6108), m = t(760), p = t(6413), h = t(5080), u = t(6874), g = t.n(u);
      let f = () => {
        let { connected: e } = (0, i.v)(), [s, t] = (0, r.useState)(!1), [o, u] = (0, r.useState)(!1);
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsxs)("div", {
              className: "lg:flex w-full bg-white p-2 items-center h-auto justify-between rounded-[16px] border border-[#8F95B2] hidden",
              children: [
                (0, a.jsxs)("div", {
                  className: "flex-shrink-0 flex items-center gap-4 justify-end",
                  children: [
                    (0, a.jsx)("img", { src: "/assets/logo-icon-fav.svg", alt: "logo", className: "w-16 h-16 rounded-[8px]" }),
                    (0, a.jsxs)("p", {
                      className: "flex items-center gap-2 text-[#5D3014] text-[32px]",
                      children: ["Formal", (0, a.jsx)("span", { className: "text-[#5D3014] text-[16px]", children: "| Dream board" })],
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: "flex-shrink-0 flex items-center gap-4",
                  children: [
                    (0, a.jsx)("span", { className: "text-[#5D3014] font-bold cursor-not-allowed opacity-[50%]", children: "Rev share" }),
                    (0, a.jsx)("span", { className: "text-[#5D3014] font-bold cursor-pointer", onClick: () => t(!0), children: "" }),
                    (0, a.jsx)("span", { className: "text-[#5D3014] font-bold cursor-pointer", onClick: () => (0, n.MG)(), children: "" }),
                    e ? (0, a.jsx)(d, {}) : (0, a.jsx)(c, {}),
                  ],
                }),
              ],
            }),

            (0, a.jsxs)("div", {
              className: "relative flex items-center justify-between w-full mb-4 lg:hidden",
              children: [
                (0, a.jsxs)("div", {
                  className: "lg:hidden",
                  children: [
                    (0, a.jsxs)("div", {
                      className: "flex items-center justify-center gap-1",
                      children: [
                        (0, a.jsx)("img", { src: "/assets/logo-icon-fav.svg", alt: "logo", className: "w-10 h-10" }),
                        (0, a.jsx)("p", { className: "text-[20px] leading-tight text-[#5D3014]", children: "Formal" }),
                      ],
                    }),
                    (0, a.jsx)("p", { className: "text-[12px] text-[#5D3014] leading-tight mt-[-2px]", children: "please send me 1 SOL bro" }),
                  ],
                }),
                (0, a.jsx)("div", {
                  className: "flex lg:hidden items-center justify-center gap-1",
                  children: (0, a.jsxs)(a.Fragment, {
                    children: [
                      e
                        ? (0, a.jsx)("div", { className: "flex lg:hidden items-center justify-center gap-1 h-6", children: (0, a.jsx)(d, { isMobile: !0 }) })
                        : (0, a.jsx)("div", { className: "flex lg:hidden items-center justify-center", children: (0, a.jsx)(c, { isMobile: !0 }) }),
                      (0, a.jsx)("img", {
                        src: o ? "/assets/menu-close-icon.svg" : "/assets/menu-icon.svg",
                        alt: o ? "close" : "menu",
                        className: "w-6 h-6 cursor-pointer",
                        onClick: () => u(!o),
                      }),
                    ],
                  }),
                }),
              ],
            }),

            (0, a.jsx)(m.N, {
              children: o &&
                (0, a.jsxs)(p.P.div, {
                  initial: { y: -100, opacity: 0 },
                  animate: { y: 100, opacity: 1 },
                  exit: { y: -100, opacity: 0 },
                  transition: { type: "spring", stiffness: 300, damping: 30 },
                  className: "fixed top-0 left-0 right-0 bg-white z-[999] h-[calc(100%-140px)] block lg:hidden",
                  onClick: () => u(!1),
                  children: [
                    (0, a.jsx)("hr", { className: "w-full h-0 border-[0.5px] opacity-100 mb-4", style: { borderColor: "rgba(93, 48, 20, 0.32)" } }),
                    (0, a.jsx)("div", { className: "px-5", children: (0, a.jsx)(h.default, {}) }),
                    (0, a.jsx)("hr", { className: "w-full h-0 border-[0.5px] opacity-100 my-4", style: { borderColor: "rgba(93, 48, 20, 0.32)" } }),
                    (0, a.jsx)(g(), {
                      href: "/chat",
                      children: (0, a.jsxs)("div", {
                        className: "w-full flex items-center justify-between px-5",
                        children: [
                          (0, a.jsxs)("div", {
                            className: "flex items-center gap-3",
                            children: [
                              (0, a.jsx)("img", { src: "/assets/send-live-msg-icon.svg", alt: "chat", className: "w-8 h-8" }),
                              (0, a.jsx)("p", { className: "text-black", children: "BegChat" }),
                            ],
                          }),
                          (0, a.jsx)("img", { src: "/assets/pixelated-arrow-right-icon.svg", alt: "nav", className: "w-6 h-6" }),
                        ],
                      }),
                    }),
                    (0, a.jsx)("hr", { className: "w-full h-0 border-[0.5px] opacity-100 my-4", style: { borderColor: "rgba(93, 48, 20, 0.32)" } }),
                    (0, a.jsx)(g(), {
                      href: "/swap",
                      children: (0, a.jsxs)("div", {
                        className: "w-full flex items-center justify-between px-5",
                        children: [
                          (0, a.jsxs)("div", {
                            className: "flex items-center gap-3",
                            children: [
                              (0, a.jsx)("img", { src: "/assets/begs-swap-icon.svg", alt: "swap", className: "w-8 h-8" }),
                              (0, a.jsx)("p", { className: "text-black", children: "" }),
                            ],
                          }),
                          (0, a.jsx)("img", { src: "/assets/pixelated-arrow-right-icon.svg", alt: "nav", className: "w-6 h-6" }),
                        ],
                      }),
                    }),
                    (0, a.jsx)("hr", { className: "w-full h-0 border-[0.5px] opacity-100 my-4", style: { borderColor: "rgba(93, 48, 20, 0.32)" } }),
                    (0, a.jsx)(g(), {
                      href: "/",
                      children: (0, a.jsxs)("div", {
                        className: "w-full flex items-center justify-between px-5",
                        children: [
                          (0, a.jsxs)("div", {
                            className: "flex items-center gap-3",
                            children: [
                              (0, a.jsx)("img", { src: "/assets/-icon.svg", alt: "swap", className: "w-8 h-8" }),
                              (0, a.jsx)("p", { className: "text-black", children: "" }),
                            ],
                          }),
                          (0, a.jsx)("img", { src: "/assets/pixelated-arrow-right-icon.svg", alt: "nav", className: "w-6 h-6" }),
                        ],
                      }),
                    }),
                    (0, a.jsx)("hr", { className: "w-full h-0 border-[0.5px] opacity-100 my-4", style: { borderColor: "rgba(93, 48, 20, 0.32)" } }),
                    (0, a.jsxs)("div", {
                      className: "w-full flex items-center justify-between px-5",
                      children: [
                        (0, a.jsxs)("button", {
                          className: "py-1 px-3 flex items-center gap-2 border border-[#5D3014] bg-[white] rounded-full opacity-[50%]",
                          children: [
                            (0, a.jsx)("img", { src: "/assets/coin-flip-btn-icon.svg", alt: "bowl", className: "w-6 h-6" }),
                            (0, a.jsx)("span", { className: "text-[14px] font-bold text-[#5D3014]", children: "soon" }),
                          ],
                        }),
                        (0, a.jsx)("img", { src: "/assets/pixelated-arrow-right-icon.svg", alt: "nav", className: "opacity-[50%] w-6 h-6" }),
                      ],
                    }),
                    (0, a.jsx)("hr", { className: "w-full h-0 border-[0.5px] opacity-100 my-4", style: { borderColor: "rgba(93, 48, 20, 0.32)" } }),
                    (0, a.jsxs)("div", {
                      className: "w-full flex items-center justify-between px-5",
                      children: [
                        (0, a.jsxs)("button", {
                          className: "py-1 px-3 flex items-center gap-2 border border-[#5D3014] bg-[white] rounded-full opacity-[50%]",
                          children: [
                            (0, a.jsx)("img", { src: "/assets/dice-btn-icon.svg", alt: "bowl", className: "w-6 h-6" }),
                            (0, a.jsx)("span", { className: "text-[14px] font-bold text-[#5D3014]", children: "soon" }),
                          ],
                        }),
                        (0, a.jsx)("img", { src: "/assets/pixelated-arrow-right-icon.svg", alt: "nav", className: "opacity-[50%] w-6 h-6" }),
                      ],
                    }),
                    (0, a.jsx)("hr", { className: "w-full h-0 border-[0.5px] opacity-100 my-4", style: { borderColor: "rgba(93, 48, 20, 0.32)" } }),
                    (0, a.jsxs)("div", {
                      className: "w-full flex items-center justify-between px-5",
                      children: [
                        (0, a.jsxs)("button", {
                          className: "py-1 px-3 flex items-center gap-2 border border-[#5D3014] bg-[white] rounded-full opacity-[50%]",
                          children: [
                            (0, a.jsx)("img", { src: "/assets/roulette-btn-icon.svg", alt: "bowl", className: "w-6 h-6" }),
                            (0, a.jsx)("span", { className: "text-[14px] font-bold text-[#5D3014]", children: "soon" }),
                          ],
                        }),
                        (0, a.jsx)("img", { src: "/assets/pixelated-arrow-right-icon.svg", alt: "nav", className: "opacity-[50%] w-6 h-6" }),
                      ],
                    }),
                    (0, a.jsx)("hr", { className: "w-full h-0 border-[0.5px] opacity-100 my-4", style: { borderColor: "rgba(93, 48, 20, 0.32)" } }),
                    (0, a.jsx)("img", { src: "/assets/menu-end-icon.svg", alt: "end", className: "w-full object-cover" }),
                  ],
                }),
            }),

            (0, a.jsx)(l.A, { isOpen: s, onClose: () => t(!1), children: (0, a.jsx)(x.A, {}) }),
          ],
        });
      };
    },

    4552: (e, s, t) => {
      "use strict";
      t.d(s, { A: () => n });
      var a = t(5155), r = t(6874), l = t.n(r);
      let n = (e) => {
        let { isMobile: s = !1 } = e;
        return (0, a.jsx)(a.Fragment, {
          children: (0, a.jsxs)("div", {
            className: "".concat(s ? "w-full lg:hidden flex pt-3" : "lg:flex hidden", " items-center gap-2 justify-center"),
            children: [
              (0, a.jsx)(l(), {
                href: "",
                target: "_blank",
                rel: "noreferrer noopener nofollower",
                children: (0, a.jsx)("text", {
                  src: "", alt: "telegram", className: "w-6 h-6",
                  style: { filter: "drop-shadow(0px 4px 8px rgba(93, 48, 20, 0.4))" },
                }),
              }),
              (0, a.jsx)(l(), {
                href: "https://x.com/formal_dream",
                target: "_blank",
                rel: "noreferrer noopener nofollower",
                children: (0, a.jsx)("img", {
                  src: "/assets/x-icon.svg", alt: "x", className: "w-6 h-6",
                  style: { filter: "drop-shadow(0px 4px 8px rgba(93, 48, 20, 0.4))" },
                }),
              }),
              (0, a.jsx)(a.Fragment, {
                children: (0, a.jsx)(l(), {
                  href: "https://www.dextools.io",
                  target: "_blank",
                  rel: "noreferrer noopener nofollower",
                  children: (0, a.jsx)("img", {
                    src: "/assets/dexscreener-icon.svg", alt: "dexscreener", className: "w-6 h-6",
                    style: { filter: "drop-shadow(0px 4px 8px rgba(93, 48, 20, 0.4))" },
                  }),
                }),
              }),
              (0, a.jsx)(a.Fragment, {
                children: (0, a.jsx)(l(), {
                  href: "https://pump.fun/coin/".concat("tbd"),
                  target: "_blank",
                  rel: "noreferrer noopener nofollower",
                  children: (0, a.jsx)("img", {
                    src: "/assets/pump-icon.svg", alt: "pump", className: "w-6 h-6",
                    style: { filter: "drop-shadow(0px 4px 8px rgba(93, 48, 20, 0.4))" },
                  }),
                }),
              }),
            ],
          }),
        });
      };
    },

    4619: (e, s, t) => {
      Promise.resolve().then(t.t.bind(t, 4147, 23)),
      Promise.resolve().then(t.t.bind(t, 8489, 23)),
      Promise.resolve().then(t.t.bind(t, 3669, 23)),
      Promise.resolve().then(t.bind(t, 6671)),
      Promise.resolve().then(t.t.bind(t, 347, 23)),
      Promise.resolve().then(t.bind(t, 5080)),
      Promise.resolve().then(t.bind(t, 5409)),
      Promise.resolve().then(t.bind(t, 6821)),
      Promise.resolve().then(t.bind(t, 3978)),
      Promise.resolve().then(t.bind(t, 5964)),
      Promise.resolve().then(t.bind(t, 6618)),
      Promise.resolve().then(t.bind(t, 8426));
    },

    5080: (e, s, t) => {
      "use strict";
      t.d(s, { default: () => p });
      var a = t(5155), r = t(2115), l = t(4552), n = t(3060), i = t(6733), o = t(9688), c = t(2596);
      function d(){ for (var e = arguments.length, s = Array(e), t = 0; t < e; t++) s[t] = arguments[t]; return (0, o.QP)((0, c.A)(...s)); }
      let x = (0, i.tv)({
        slots: {
          root: ["group relative isolate inline-flex shrink-0 cursor-pointer items-center rounded-full p-0.5 shadow-inner outline-none transition-all","bg-[#5D3014]","ring-black/5 dark:ring-gray-800","data-[state=checked]:bg-[#121212]","data-[disabled]:cursor-default",["outline outline-offset-2 outline-0 focus-visible:outline-2","outline-blue-500 dark:outline-blue-500"]],
          thumb:["pointer-events-none relative inline-block transform appearance-none rounded-full border-none shadow-lg outline-none transition-all duration-150 ease-in-out","bg-[#000000]","data-[state=checked]:bg-[#FFD44F]","group-data-[disabled]:shadow-none"],
        },
        variants: {
          size: {
            default: { root:"h-6 w-14", thumb:"h-7 w-7 data-[state=checked]:translate-x-8 data-[state=unchecked]:translate-x-0" },
            small:   { root:"h-4 w-7",  thumb:"h-3 w-3 data-[state=checked]:translate-x-3 data-[state=unchecked]:translate-x-0" },
          },
        },
        defaultVariants: { size: "default" },
      });

      const m = r.forwardRef((e, s) => {
        let { className: t, size: r, ...l } = e, { root: i, thumb: o } = x({ size: r });
        return (0, a.jsx)(n.bL, { ref: s, className: d(i(), t), "tremor-id":"tremor-raw", ...l, children: (0, a.jsx)(n.zi, { className: d(o()) }) });
      });
      m.displayName = "Switch";

      let p = (e) => {
        let { isMobile: s } = e, [t, n] = (0, r.useState)(!0), i = (0, r.useRef)(null);
        (0, r.useEffect)(() => {
          let e = localStorage.getItem("autoplay-beg-");
          null === e ? localStorage.setItem("autoplay-beg-","true") : n("true" === e);
        }, []);
        (0, r.useEffect)(() => {
          let e = new Audio("/assets/beg-bg.mp3");
          e.loop = !0; e.volume = 0.15; i.current = e;
          let s = () => { i.current && t && i.current.play().catch(()=>{}); };
          s();
          let a = () => { t && s(); document.removeEventListener("click", a); document.removeEventListener("touchstart", a); };
          document.addEventListener("click", a);
          document.addEventListener("touchstart", a);
          return () => { i.current && (i.current.pause(), (i.current=null)); document.removeEventListener("click", a); document.removeEventListener("touchstart", a); };
        }, [t]);

        return (0, a.jsxs)("div", {
          className: "flex items-start justify-center lg:justify-between gap-4 w-full p-3 border border-[#5D3014] rounded-[8px] ".concat(s ? "mb-4" : ""),
          children: [
            (0, a.jsxs)("div", {
              className: "flex items-center justify-center gap-2",
              children: [
                (0, a.jsx)(m, {
                  size: "small",
                  checked: t,
                  onCheckedChange: (e) => {
                    n(e);
                    localStorage.setItem("autoplay-beg-", String(e));
                    i.current && (e ? i.current.play().catch(()=>{}) : i.current.pause());
                  },
                }),
                (0, a.jsx)("span", { className: "text-black", children: "" }),
              ],
            }),
            (0, a.jsx)(l.A, {}),
          ],
        });
      };
    },

    5409: (e, s, t) => {
      "use strict";
      t.d(s, { ClientWalletProvider: () => p });
      var a = t(5155), r = t(9021), l = t(4119), n = t(6293), i = t(6329), o = t(8087), c = t(6994), d = t(3570), x = t(2115);
      let m = (e) => {
        let { children: s } = e, t = r.B.Mainnet, m = (0, x.useMemo)(() => (0, d.Kw)(t), [t]), p = (0, x.useMemo)(() => [new o.c(), new c.d()], []);
        return (0, a.jsx)(l.S, { endpoint: m, children: (0, a.jsx)(n.r, { wallets: p, autoConnect: !0, children: (0, a.jsx)(i.I, { children: s }) }) });
      };
      function p(e) { let { children: s } = e; return (0, a.jsx)(m, { children: s }); }
    },

    6108: (e, s, t) => {
      "use strict";
      t.d(s, { A: () => r });
      var a = t(5155);
      let r = () => (0, a.jsxs)(a.Fragment, {
        children: [
          (0, a.jsxs)("div", {
            className: "flex items-center justify-between w-full h-[60px] relative",
            children: [
              (0, a.jsx)("img", { src: "/assets/roadmape-icon.svg", alt: "roadmape", className: "absolute left-[-40px] lg:top-[40%] top-[20px] translate-y-[-50%]" }),
              (0, a.jsx)("img", { src: "https://media.tenor.com/0iHLh37L15EAAAAj/lfg-wsb.gif", width: 105, height: 89, className: "absolute right-[0px] top-[-24px]" }),
            ],
          }),
          (0, a.jsxs)("div", { children: [(0, a.jsx)("p", { className: "text-[20px] text-[#5D3014] font-bold mb-2", children: "500K - Rewards" }),(0, a.jsx)("p", { className: "text-[16px] text-black", children: "Top donors are dropped $DREAM" })] }),
          (0, a.jsx)("hr", { className: "w-full h-0 border-[0.5px] border-[#5D3014] opacity-100" }),
          (0, a.jsxs)("div", { children: [(0, a.jsx)("p", { className: "text-[20px] text-[#5D3014] font-bold mb-2", children: "1M- Image/Video" }),(0, a.jsx)("p", { className: "text-[16px] text-black", children: "Upload content and DREAM" })] }),
          (0, a.jsx)("hr", { className: "w-full h-0 border-[0.5px] border-[#5D3014] opacity-100" }),
          (0, a.jsxs)("div", { children: [(0, a.jsx)("p", { className: "text-[20px] text-[#5D3014] font-bold mb-2", children: "5M- Leaderboard" }),(0, a.jsx)("p", { className: "text-[16px] text-black", children: "Beggar/donor of the day" })] }),
          (0, a.jsx)("hr", { className: "w-full h-0 border-[0.5px] border-[#5D3014] opacity-100" }),
          (0, a.jsxs)("div", { children: [(0, a.jsx)("p", { className: "text-[20px] text-[#5D3014] font-bold mb-2", children: "10M- BegPad" }),(0, a.jsx)("p", { className: "text-[16px] text-black", children: "Official launchpad to DREAM" })] }),
          (0, a.jsx)("hr", { className: "w-full h-0 border-[0.5px] border-[#5D3014] opacity-100" }),
          (0, a.jsxs)("div", { children: [(0, a.jsx)("p", { className: "text-[20px] text-[#5D3014] font-bold mb-2", children: "20M- Livestream" }),(0, a.jsx)("p", { className: "text-[16px] text-black", children: "Start livestream" })] }),
        ],
      });
    },

    6618: (e, s, t) => {
      "use strict";
      t.d(s, { J: () => c, UserProvider: () => d });
      var a = t(5155), r = t(2115), l = t(1392), n = t(8426), i = t(6671);
      let o = (0, r.createContext)({ userData: null, isLoading: !1 }),
          c = () => (0, r.useContext)(o);

      // Безопасный провайдер пользователя (если бек недоступен — не ломаем логику)
      let d = (e) => {
        let { children: s } = e,
            { publicKey: t, connected: c } = (0, l.v)(),
            [d, x] = (0, r.useState)(null),
            [m, p] = (0, r.useState)(!1),
            { websocket: h, sendMessage: u, onMessage: g } = (0, n.h)();

        (0, r.useEffect)(() => { c && t && h ? f(t.toString()) : x(null); }, [h, c, t]);

        let f = (0, r.useCallback)(async (e) => {
          if (!(h && h.readyState === WebSocket.OPEN)) return;
          p(!0);
          try {
            let s = await fetch(
              "https://7dfinzalu3.execute-api.ap-south-1.amazonaws.com/dev/?method=get_beg_user&walletAddress=" + e
            );
            if (!s.ok) throw new Error("get_beg_user failed");
            let t = await s.json();
            if (t.message === "User retrieved successfully") x(t.data);
            else if (t.message === "User not found") { u && u({ action: "createBegUser", walletAddress: e }); }
          } catch {
            // Не шумим тостами — просто оставляем userData = null
            console.log("User check failed; continuing without user profile");
          } finally { p(!1); }
        }, [h, u]);

        (0, r.useEffect)(() => {
          let e = g((e) => {
            try {
              let s = JSON.parse(e.data);
              if (s.type === "userCreated" || s.type === "userCreatedConfirmation") x(s.user);
            } catch (e) {
              i.o && i.o.error && i.o.error("Error parsing message");
              console.error("Error parsing message:", e);
            }
          });
          return () => { e(); };
        }, [g]);

        return (0, a.jsx)(o.Provider, { value: { userData: d, isLoading: m }, children: s });
      };
    },

    6821: (e, s, t) => {
      "use strict";
      t.d(s, { default: () => l });
      var a = t(5155), r = t(2115);
      let l = () => (0, a.jsx)("div", {
        className: "bg-[#FFD44F] h-[40px] flex items-center overflow-hidden whitespace-nowrap",
        children: (0, a.jsxs)("div", {
          className: "flex w-fit animate-marquee",
          children: [
            (0, a.jsx)(a.Fragment, {
              children: Array(6).fill(null).map((e, s) => (0, a.jsxs)(r.Fragment, {
                children: [
                  (0, a.jsx)("span", { className: "mx-4 text-[#5D3014] font-bold", children: "Dream board" }),
                  (0, a.jsx)("img", { src: "/assets/mcd-bottom-bar-icon.svg", alt: "mcd", className: "w-6 h-6 inline-block" }),
                  (0, a.jsx)("span", { className: "mx-4 text-[#5D3014] font-bold", children: "$DREAM" }),
                  (0, a.jsx)("img", { src: "/assets/mcd-bottom-bar-icon.svg", alt: "mcd", className: "w-6 h-6 inline-block" }),
                  (0, a.jsxs)("span", { className: "mx-4 text-[#5D3014] font-bold", children: ["ca: ", "tbd"] }),
                  (0, a.jsx)("img", { src: "/assets/mcd-bottom-bar-icon.svg", alt: "mcd", className: "w-6 h-6 inline-block" }),
                ],
              }, "first-extended-"+s)),
            }),
            (0, a.jsx)(a.Fragment, {
              children: Array(6).fill(null).map((e, s) => (0, a.jsxs)(r.Fragment, {
                children: [
                  (0, a.jsx)("span", { className: "mx-4 text-[#5D3014] font-bold", children: "Dream board" }),
                  (0, a.jsx)("img", { src: "/assets/mcd-bottom-bar-icon.svg", alt: "mcd", className: "w-6 h-6 inline-block" }),
                  (0, a.jsx)("span", { className: "mx-4 text-[#5D3014] font-bold", children: "$DREAM" }),
                  (0, a.jsx)("img", { src: "/assets/mcd-bottom-bar-icon.svg", alt: "mcd", className: "w-6 h-6 inline-block" }),
                  (0, a.jsxs)("span", { className: "mx-4 text-[#5D3014] font-bold", children: ["ca: ", "tbd"] }),
                  (0, a.jsx)("img", { src: "/assets/mcd-bottom-bar-icon.svg", alt: "mcd", className: "w-6 h-6 inline-block" }),
                ],
              }, "second-extended-"+s)),
            }),
          ],
        }),
      });
    },

    7790: () => {},
  },
  (e) => {
    var s = (s) => e((e.s = s));
    e.O(0, [723, 956, 874, 671, 558, 870, 606, 964, 441, 684, 358], () => s(4619)),
    (_N_E = e.O());
  },
]);
