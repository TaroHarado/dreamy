(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [974],
  {
    3328: (e, t, s) => {
      "use strict";
      s.d(t, { A: () => i });
      var a = s(5155),
        r = s(2115),
        n = s(1392),
        l = s(6671),
        o = s(3126);
      function i(e) {
        let {
            isMobile: t = !1,
            onClose: s,
            onSendMessage: i,
            isInCooldown: c,
            cooldownSeconds: d,
          } = e,
          { publicKey: u, connected: p } = (0, n.v)(),
          [m, x] = (0, r.useState)(""),
          [g, f] = (0, r.useState)(""),
          [h, b] = (0, r.useState)(""),
          [w, v] = (0, r.useState)(0),
          [y, j] = (0, r.useState)(null),
          [N, k] = (0, r.useState)(!1),
          [S, F] = (0, r.useState)(null),
          _ = (0, r.useRef)(null);
        r.useEffect(() => {
          u ? b(u.toBase58()) : b("");
        }, [u]);
        let A = async () => {
            try {
              if (!u) {
                l.o.error("Please connect wallet to DREAM!");
                return;
              }
              if (c) {
                l.o.error(
                  "Please wait ".concat(d, "s before sending another message")
                );
                return;
              }
              if (0 >= Number(g)) {
                l.o.error("SOL amount must be greater than 0");
                return;
              }
              if (N) {
                l.o.error("Please wait uploading DREAM content");
                return;
              }
              if (!m.trim()) {
                l.o.error("Please enter a message");
                return;
              }
              let e = (0, o.sQ)(m);
              if (e < o.Bu) {
                l.o.error("Message must be at least ".concat(o.Bu, " words"));
                return;
              }
              if (e > o.tN) {
                l.o.error("Message cannot exceed ".concat(o.tN, " words"));
                return;
              }
              if (!h.trim()) {
                l.o.error("Please enter a wallet address");
                return;
              }
              if (!g.trim()) {
                l.o.error("Please enter a SOL amount");
                return;
              }
              let t = (0, o.in)(),
                a = (0, o.N5)(t),
                r = null;
              if (S && !(r = await D(S))) {
                l.o.error("Image upload failed. Please try again.");
                return;
              }
              let n = {
                action: "sendBegMessage",
                walletAddress: h,
                text: m,
                solAmount: g,
                begStatus: "pending",
                voiceType: t,
                voiceId: a,
                imageUrl: r,
              };
              i(n),
                x(""),
                j(null),
                F(null),
                _.current && (_.current.value = ""),
                p || b(""),
                f(""),
                s && s();
            } catch (e) {
              l.o.error("Error sending message"), console.log(e);
            }
          },
          D = async (e) => {
            try {
              k(!0);
              let t = await fetch(
                "https://7dfinzalu3.execute-api.ap-south-1.amazonaws.com/dev/",
                {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({
                    method: "generate_upload_url",
                    walletAddress: (null == u ? void 0 : u.toBase58()) || h,
                    contentType: e.type,
                    fileExtension: e.name.split(".").pop(),
                  }),
                }
              );
              if (!t.ok) throw Error("Failed to get presigned URL");
              let s = await t.json();
              console.log("Presigned URL response:", s);
              let a = await fetch(s.data.uploadUrl, { method: "PUT", body: e });
              if (!a.ok) {
                let e = await a.text();
                throw (
                  (console.error("Upload failed with status:", a.status),
                  console.error("Upload error:", e),
                  Error("Failed to upload image to S3: ".concat(e)))
                );
              }
              return s.data.imageUrl;
            } catch (e) {
              return (
                console.error("Error uploading image:", e),
                l.o.error("Failed to upload image. Please try again."),
                null
              );
            } finally {
              k(!1);
            }
          };
        return (0, a.jsx)("div", {
          className:
            "py-3 px-4 sm:py-4 sm:px-6 rounded-[8px] bg-[#FFD44F] w-full mx-auto",
          children: (0, a.jsxs)("div", {
            className: "flex flex-col space-y-2",
            children: [
              (0, a.jsxs)("div", {
                className: "flex items-stretch justify-start gap-3 w-full",
                children: [
                  (0, a.jsxs)("div", {
                    className:
                      "flex-shrink-0 cursor-pointer border border-[#FFD44F] rounded-[8px] bg-white p-2 flex items-center justify-center self-stretch relative overflow-hidden max-w-[66px] max-h-[66px]",
                    onClick: () => {
                      var e;
                      return null === (e = _.current) || void 0 === e
                        ? void 0
                        : e.click();
                    },
                    children: [
                      (0, a.jsx)("input", {
                        type: "file",
                        ref: _,
                        className: "hidden",
                        accept:
                          "image/png,image/jpeg,image/jpg,image/webp,image/gif,image/avif,.avif,video/mp4,video/webm,video/quicktime,.mov,video/x-msvideo",
                        onChange: (e) => {
                          var t;
                          let s =
                            null === (t = e.target.files) || void 0 === t
                              ? void 0
                              : t[0];
                          if (s) {
                            if (
                              (console.log("Selected file type:", s.type),
                              s.size / 1024 / 1024 > 10)
                            ) {
                              l.o.error("File size should be less than 10MB");
                              return;
                            }
                            F(s), j(URL.createObjectURL(s));
                          }
                        },
                      }),
                      y
                        ? (0, a.jsxs)(a.Fragment, {
                            children: [
                              S && (0, o.AE)(S)
                                ? (0, a.jsx)("video", {
                                    src: y,
                                    className: "object-cover",
                                    style: { width: "100%", height: "100%" },
                                    muted: !0,
                                  })
                                : (0, a.jsx)("img", {
                                    src: y,
                                    alt: "uploaded preview",
                                    className: "object-cover",
                                    style: { width: "100%", height: "100%" },
                                  }),
                              (0, a.jsx)("button", {
                                onClick: (e) => {
                                  e.stopPropagation(),
                                    j(null),
                                    F(null),
                                    _.current && (_.current.value = "");
                                },
                                className:
                                  "absolute top-1 right-1 bg-black bg-opacity-50 rounded-full w-4 h-4 flex items-center justify-center text-white z-10",
                                children: "\xd7",
                              }),
                              N &&
                                (0, a.jsx)("div", {
                                  className:
                                    "absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center",
                                  children: (0, a.jsx)("div", {
                                    className:
                                      "w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin",
                                  }),
                                }),
                            ],
                          })
                        : (0, a.jsx)("img", {
                            src: "/assets/upload-image-icon.svg",
                            alt: "upload",
                            className: "w-12 h-12",
                          }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: "relative w-full flex flex-col",
                    children: [
                      (0, a.jsx)("textarea", {
                        placeholder: c
                          ? "Please wait ".concat(
                              d,
                              "s before sending another message"
                            )
                          : "enter your DREAM request (min. "
                              .concat(o.Bu, ", max. ")
                              .concat(o.tN, " words)"),
                        value: m,
                        onChange: (e) => {
                          let t = e.target.value,
                            s = (0, o.sQ)(t);
                          s <= o.tN && (x(t), v(s));
                        },
                        onKeyDown: (e) => {
                          "Enter" !== e.key ||
                            e.shiftKey ||
                            (e.preventDefault(), A());
                        },
                        disabled: c,
                        className:
                          "p-2 rounded-[8px] bg-white resize-none text-[14px] sm:text-[16px] outline-none border-none w-full h-full disabled:bg-gray-100 disabled:cursor-not-allowed placeholder:text-[#8F95B2] text-black",
                        rows: 2,
                      }),
                      (0, a.jsxs)("div", {
                        className:
                          "absolute bottom-2 right-2 text-[10px] sm:text-[12px] text-gray-500",
                        children: [w, "/", o.tN],
                      }),
                    ],
                  }),
                ],
              }),
              (0, a.jsxs)("div", {
                className: "flex-col-reverse flex items-center gap-2",
                children: [
                  (0, a.jsxs)("div", {
                    className: "w-full rounded-[8px] bg-white p-2",
                    children: [
                      (0, a.jsxs)("div", {
                        className: "flex items-center gap-2 mb-1",
                        children: [
                          (0, a.jsx)("img", {
                            src: "/assets/solana-black-icon.svg",
                            alt: "solana",
                            className: "w-5 h-5 sm:w-6 sm:h-6",
                          }),
                          (0, a.jsx)("input", {
                            placeholder: "SOL amount",
                            value: g,
                            onChange: (e) => {
                              f((0, o.Bt)(e.target.value));
                            },
                            step: "0.01",
                            min: "0",
                            max: "100",
                            type: "number",
                            className:
                              "w-full outline-none border-none text-[14px] sm:text-[16px] pr-2 remove-arrow placeholder:text-[#8F95B2] text-black",
                          }),
                        ],
                      }),
                      (0, a.jsx)("div", {
                        className:
                          "flex items-center justify-start gap-1 flex-wrap",
                        children: o.up.map((e) =>
                          (0, a.jsxs)(
                            "div",
                            {
                              className:
                                "p-2 rounded-[1000px] flex items-center gap-1 border cursor-pointer ".concat(
                                  e === g
                                    ? "border-black bg-[#FFD44F]"
                                    : "border-[#FFD44F] bg-black"
                                ),
                              onClick: () => f(e),
                              children: [
                                (0, a.jsx)("img", {
                                  src:
                                    e === g
                                      ? "/assets/solana-black-icon.svg"
                                      : "/assets/solana-yellow-icon.svg",
                                  alt: "SOL",
                                  className: "w-3 h-3",
                                }),
                                (0, a.jsx)("span", {
                                  className: "".concat(
                                    e === g ? "text-black" : "text-[#FFD44F]",
                                    " text-[12px] leading-tight"
                                  ),
                                  children: e,
                                }),
                              ],
                            },
                            e
                          )
                        ),
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className:
                      "w-full rounded-[8px] bg-white p-2 flex items-center gap-2",
                    children: [
                      (0, a.jsx)("img", {
                        src: "/assets/phantom-black-icon.svg",
                        alt: "phantom",
                        className: "w-5 h-5 sm:w-6 sm:h-6",
                      }),
                      (0, a.jsx)("input", {
                        type: "text",
                        placeholder: "SOL address",
                        value: h,
                        onChange: (e) => b(e.target.value),
                        className:
                          "w-full outline-none border-none text-[14px] sm:text-[16px] pr-2 placeholder:text-[#8F95B2] text-black",
                      }),
                    ],
                  }),
                ],
              }),
              (0, a.jsxs)("div", {
                className: "flex items-center gap-2",
                children: [
                  t &&
                    (0, a.jsx)("button", {
                      onClick: s,
                      className:
                        "h-[36px] sm:h-[40px] w-[36px] sm:w-[40px] flex items-center justify-center cursor-pointer bg-black text-[#FFD44F] text-[14px] sm:text-[16px] rounded-full outline-none border-none",
                      children: "✕",
                    }),
                  (0, a.jsxs)("button", {
                    onClick: A,
                    className:
                      "flex-1 h-[36px] sm:h-[40px] flex items-center justify-center cursor-pointer gap-2 bg-black text-[#FFD44F] text-[14px] sm:text-[16px] rounded-[8px] outline-none border-none",
                    children: [
                      (0, a.jsx)("img", {
                        src: "/assets/bolt-icon.svg",
                        alt: "bolt",
                        className: "w-3 h-3 sm:w-4 sm:h-4",
                      }),
                      (0, a.jsx)("span", {
                        className: "text-[#FFD44F]",
                        children: "DREAM",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      }
    },
    3792: (e, t, s) => {
      "use strict";
      s.r(t), s.d(t, { default: () => k });
      var a = s(5155),
        r = s(2115),
        n = s(3570),
        l = s(1392),
        o = s(6671),
        i = s(3126),
        c = s(1773),
        d = s(1175),
        u = s(4552),
        p = s(1373),
        m = s(9788),
        x = s(3168),
        g = s(6874),
        f = s.n(g),
        h = s(8426),
        b = s(1219),
        w = s(2437),
        v = s.n(w),
        y = s(3328),
        j = s(6618),
        N = s(4134).Buffer;
      function k() {
        let { websocket: e, onMessage: t } = (0, h.h)(),
          [s, g] = (0, r.useState)([]),
          [w, k] = (0, r.useState)(!1),
          [S, F] = (0, r.useState)(""),
          [_, A] = (0, r.useState)(!0),
          [D, B] = (0, r.useState)(!1),
          [E, C] = (0, r.useState)({
            total_count: 0,
            page: 1,
            limit: 50,
            total_pages: 1,
            has_next: !1,
            has_prev: !1,
          }),
          { userData: U } = (0, j.J)(),
          [z, P] = (0, r.useState)(""),
          [I, M] = (0, r.useState)(Date.now()),
          O = (0, r.useRef)(null),
          [T, J] = (0, r.useState)(!1),
          [R, X] = (0, r.useState)(0),
          { publicKey: L, sendTransaction: W, connected: Y } = (0, l.v)(),
          q = (0, r.useRef)(null),
          [Q, V] = (0, r.useState)(null),
          [K, H] = (0, r.useState)(!1),
          [G, Z] = (0, r.useState)(null),
          [$, ee] = (0, r.useState)([]),
          [et, es] = (0, r.useState)({ isOpen: !1, imageUrl: "", isVideo: !1 }),
          [ea, er] = (0, r.useState)(!1),
          en = new n.Ng(
            "https://mainnet.helius-rpc.com/?api-key=d94f96c1-6be8-42be-90c4-311dec83c9f7"
          ),
          el =
            "4uk73s677wA3w1zjmpFeUXYcgyZd51WDQcBuHkLmVswC,6fpDAqBW7XAeGy744Ukcu6qSQW1QTbfM1YtnJJQ2Nsfo,4MfVmmiA1YmmUH91MybhnTWrVywerF85PVtstRnCRmtN".split(
              ","
            ),
          eo = (0, r.useCallback)(async () => {
            try {
              A(!0);
              let e = await fetch(
                  "https://7dfinzalu3.execute-api.ap-south-1.amazonaws.com/dev/?method=get_beg_messages&page=1&limit=".concat(
                    E.limit
                  )
                ),
                t = await e.json();
              g(
                t.data.map((e) => ({
                  walletAddress: e.walletAddress,
                  text: e.text,
                  solAmount: e.solAmount,
                  _id: e._id,
                  begStatus: e.begStatus,
                  timestamp: e.timestamp,
                  voiceType: e.voiceType || "Indian",
                  voiceId: e.voiceId || i.bH.Indian[0],
                  fillAmount: e.fillAmount || "0",
                  reactions: e.reactions || {},
                  imageUrl: e.imageUrl || null,
                }))
              ),
                C(t.pagination);
            } catch (e) {
              o.o.error("Error fetching initial messages"),
                console.error("Error fetching initial messages:", e);
            } finally {
              A(!1);
            }
          }, [E.limit]),
          ei = (0, r.useCallback)(async () => {
            if (E.has_next && !D)
              try {
                B(!0);
                let e = E.page + 1,
                  t = await fetch(
                    "https://7dfinzalu3.execute-api.ap-south-1.amazonaws.com/dev/?method=get_beg_messages&page="
                      .concat(e, "&limit=")
                      .concat(E.limit)
                  ),
                  s = await t.json();
                g((e) => [
                  ...e,
                  ...s.data.map((e) => ({
                    walletAddress: e.walletAddress,
                    text: e.text,
                    solAmount: e.solAmount,
                    _id: e._id,
                    begStatus: e.begStatus,
                    timestamp: e.timestamp,
                    voiceType: e.voiceType || "Indian",
                    voiceId: e.voiceId || i.bH.Indian[0],
                    fillAmount: e.fillAmount || "0",
                    reactions: e.reactions || {},
                    imageUrl: e.imageUrl || null,
                  })),
                ]),
                  C(s.pagination);
              } catch (e) {
                o.o.error("Error loading more messages"),
                  console.error("Error loading more messages:", e);
              } finally {
                B(!1);
              }
          }, [E.has_next, E.page, E.limit, D]);
        (0, r.useEffect)(() => {
          let e = t((e) => {
            try {
              let s = JSON.parse(e.data);
              if (
                "begMessage" === s.type ||
                "begMessageConfirmation" === s.type
              )
                g((e) =>
                  e.some((e) => e._id === s.message_id)
                    ? e
                    : [
                        {
                          walletAddress: s.walletAddress,
                          text: s.text,
                          solAmount: s.solAmount,
                          _id: s.message_id,
                          begStatus: s.begStatus,
                          timestamp: s.timestamp,
                          voiceType: s.voiceType || "Indian",
                          voiceId: s.voiceId || i.bH.Indian[0],
                          fillAmount: s.fillAmount || "0",
                          reactions: s.reactions || {},
                          imageUrl: s.imageUrl || null,
                          isNew: !0,
                        },
                        ...e,
                      ]
                ),
                  er(!1),
                  H(!1);
              else if (
                "begMessageUpdate" === s.type ||
                "begMessageUpdateConfirmation" === s.type
              )
                o.o.success(
                  "Dream of ".concat(
                    (0, i.cp)(s.fillAmount),
                    " SOL successful!"
                  )
                ),
                  g((e) => {
                    let t = e.findIndex((e) => e._id === s.message_id);
                    if (-1 === t) return e;
                    let a = [...e],
                      r = {
                        ...a[t],
                        begStatus: s.begStatus,
                        fillAmount: s.fillAmount || "0",
                        isNew: !0,
                      };
                    return a.splice(t, 1), [r, ...a];
                  });
              else if (
                "begMessageDeleted" === s.type ||
                "begMessageDeletedConfirmation" === s.type
              ) {
                ee((e) => e.filter((e) => e !== s.message_id));
                let e = document.getElementById("messages-container");
                if (!e) return;
                let t = e.scrollTop;
                g((e) => e.filter((e) => e._id !== s.message_id)),
                  requestAnimationFrame(() => {
                    e.scrollTop = t;
                  }),
                  "begMessageDeletedConfirmation" === s.type &&
                    o.o.success("Message deleted by admin!");
              } else if (
                ("begMessageReaction" === s.type ||
                  "begMessageReactionConfirmation" === s.type) &&
                (g((e) =>
                  e.map((e) =>
                    e._id === s.message_id
                      ? { ...e, reactions: s.reaction_counts || {} }
                      : e
                  )
                ),
                "added" === s.action)
              ) {
                var t;
                let e =
                  null === (t = i.Br.find((e) => e.val === s.reaction_type)) ||
                  void 0 === t
                    ? void 0
                    : t.audio;
                if (e) {
                  let t = new Audio(e);
                  (t.volume = 0.6),
                    t.play().catch((e) => {
                      console.error("Error playing reaction audio:", e);
                    });
                }
              }
            } catch (e) {
              o.o.error("Error fetching DREAM"),
                console.error("Error parsing message:", e);
            }
          });
          return () => {
            e();
          };
        }, [t]);
        let ec = (t) => {
          try {
            e && e.readyState === WebSocket.OPEN
              ? (ee((e) => [...e, t]),
                e.send(
                  JSON.stringify({
                    action: "deleteBegMessage",
                    messageId: t,
                    walletAddress: z,
                  })
                ),
                console.log("Delete request sent for message: ".concat(t)))
              : (console.error("WebSocket connection not open"),
                o.o.error("Connection error. Please refresh the page."));
          } catch (e) {
            console.log("error", e);
          }
        };
        (0, r.useEffect)(() => {
          let e = () => {
            M(Date.now());
          };
          return (
            (O.current = setInterval(() => {
              Date.now() - I > 3e5 && (eo(), M(Date.now()));
            }, 6e4)),
            window.addEventListener("mousemove", e),
            window.addEventListener("keydown", e),
            window.addEventListener("click", e),
            window.addEventListener("scroll", e),
            () => {
              window.removeEventListener("mousemove", e),
                window.removeEventListener("keydown", e),
                window.removeEventListener("click", e),
                window.removeEventListener("scroll", e),
                O.current && clearInterval(O.current);
            }
          );
        }, [I, eo]),
          (0, r.useEffect)(() => {
            eo();
          }, []),
          (0, r.useEffect)(() => {
            if (!T) return;
            let e = setInterval(() => {
              X((e) => (e <= 1 ? (J(!1), 0) : e - 1));
            }, 1e3);
            return () => clearInterval(e);
          }, [T]),
          (0, r.useEffect)(() => {
            L ? P(L.toBase58()) : P("");
          }, [L]);
        let ed = async (t, a, r) => {
          try {
            if (!L) {
              o.o.info("Connect wallet to DREAM!");
              return;
            }
            if (!(0, i.Ig)(t)) {
              o.o.error("Invalid recipient wallet address");
              return;
            }
            if (!(0, i.Ig)("7RvzqUcW7r9RmujAhixAF4XpzSL3xeNxA2PSuqVPXKPm")) {
              o.o.error("Invalid admin wallet address");
              return;
            }
            V(r);
            let d = Number(a) * n.Sr,
              u = Math.round(+d / 100),
              p = d - u,
              m = new n.J3(t),
              x = new n.J3("7RvzqUcW7r9RmujAhixAF4XpzSL3xeNxA2PSuqVPXKPm"),
              g = new n.ZX(),
              { blockhash: f, lastValidBlockHeight: h } =
                await en.getLatestBlockhash("finalized");
            (g.recentBlockhash = f),
              (g.feePayer = L),
              g.add(n.yq.transfer({ fromPubkey: L, toPubkey: x, lamports: u })),
              console.log("Requesting quote with params:", {
                inputMint: "So11111111111111111111111111111111111111112",
                outputMint: "tbd",
                amount: p,
              });
            let w = await fetch(
              "https://quote-api.jup.ag/v6/quote?inputMint=So11111111111111111111111111111111111111112&outputMint="
                .concat("tbd", "&amount=")
                .concat(
                  p,
                  "&slippageBps=100&onlyDirectRoutes=false&asLegacyTransaction=true"
                )
            ).then((e) => e.json());
            if (!w || !w.outAmount)
              throw (
                (console.error("Quote response error:", w),
                Error(
                  "Failed to get quote from Jupiter: ".concat(JSON.stringify(w))
                ))
              );
            console.log("Requesting swap with params:", {
              quoteResponse: w,
              userPublicKey: L.toBase58(),
            });
            let y = await fetch("https://quote-api.jup.ag/v6/swap", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                quoteResponse: w,
                userPublicKey: L.toBase58(),
                wrapUnwrapSOL: !0,
                computeUnitPriceMicroLamports: 1e3,
                asLegacyTransaction: !0,
              }),
            }).then((e) => e.json());
            if ((console.log("Swap response:", y), !y || !y.swapTransaction))
              throw (
                (console.error("Swap response error:", y),
                Error(
                  "Failed to create swap transaction: ".concat(
                    JSON.stringify(y)
                  )
                ))
              );
            let j = n.ZX.from(N.from(y.swapTransaction, "base64"));
            g.add(...j.instructions);
            let [k] = await n.J3.findProgramAddress(
                [L.toBuffer(), b.x5.toBuffer(), new n.J3("tbd").toBuffer()],
                b.EK
              ),
              [S] = await n.J3.findProgramAddress(
                [m.toBuffer(), b.x5.toBuffer(), new n.J3("tbd").toBuffer()],
                b.EK
              );
            (await en.getAccountInfo(S)) ||
              g.add({
                programId: b.EK,
                keys: [
                  { pubkey: L, isSigner: !0, isWritable: !0 },
                  { pubkey: S, isSigner: !1, isWritable: !0 },
                  { pubkey: m, isSigner: !1, isWritable: !1 },
                  { pubkey: new n.J3("tbd"), isSigner: !1, isWritable: !1 },
                  { pubkey: n.yq.programId, isSigner: !1, isWritable: !1 },
                  { pubkey: b.x5, isSigner: !1, isWritable: !1 },
                  { pubkey: n._X, isSigner: !1, isWritable: !1 },
                ],
                data: N.from([]),
              });
            let F = Math.floor((95 * Number(w.outAmount)) / 100);
            g.add({
              programId: b.x5,
              keys: [
                { pubkey: k, isSigner: !1, isWritable: !0 },
                { pubkey: S, isSigner: !1, isWritable: !0 },
                { pubkey: L, isSigner: !0, isWritable: !1 },
              ],
              data: N.from([3, ...new (v())(F).toArray("le", 8)]),
            });
            let _ = await W(g, en);
            if (
              (
                await en.confirmTransaction(
                  { signature: _, blockhash: f, lastValidBlockHeight: h },
                  "confirmed"
                )
              ).value.err
            )
              throw (
                (o.o.error("Dream failed!"), Error("Transaction failed"))
              );
            let A = s.find((e) => e._id === r);
            if (!A) throw Error("Message not found");
            let D = Number(A.fillAmount) + Number(a),
              B = D >= Number(A.solAmount);
            null == e ||
              e.send(
                JSON.stringify({
                  action: "updateBegMessage",
                  messageId: r,
                  walletAddress: L.toBase58(),
                  updates: {
                    begStatus: B ? "completed" : "pending",
                    fillAmount: D.toString(),
                  },
                })
              );
            let E = {
              action: "updateBegUserInfo",
              walletAddress: null == U ? void 0 : U.walletAddress,
              updates: {
                totalDonations:
                  ((null == U ? void 0 : U.totalDonations) || 0) + 1,
                amountBAGSd:
                  ((null == U ? void 0 : U.amountBAGSd) || 0) + a,
              },
            };
            null == e || e.send(JSON.stringify(E));
            let C = await fetch(
                "https://7dfinzalu3.execute-api.ap-south-1.amazonaws.com/dev/?method=get_beg_user&walletAddress=".concat(
                  t
                )
              ),
              z = await C.json();
            if ("User retrieved successfully" === z.message) {
              var l, c;
              let t = {
                action: "updateBegUserInfo",
                walletAddress:
                  null === (l = z.data) || void 0 === l
                    ? void 0
                    : l.walletAddress,
                updates: {
                  amountRaised:
                    ((null === (c = z.data) || void 0 === c
                      ? void 0
                      : c.amountRaised) || 0) + a,
                },
              };
              null == e || e.send(JSON.stringify(t));
            }
          } catch (e) {
            o.o.error("Could not make Dream!"),
              console.log("Transaction error:", e);
          } finally {
            V(null);
          }
        };
        (0, r.useEffect)(() => {
          let e = new IntersectionObserver(
            (e) => {
              e[0].isIntersecting && ei();
            },
            { threshold: 0.1 }
          );
          return (
            q.current && e.observe(q.current),
            () => {
              q.current && e.unobserve(q.current);
            }
          );
        }, [ei]);
        let eu = (t, s) => {
            if (!e || e.readyState !== WebSocket.OPEN) {
              console.error("WebSocket connection not open");
              return;
            }
            e.send(
              JSON.stringify({
                action: "reactToBegMessage",
                messageId: t,
                walletAddress: z,
                reactionType: s,
              })
            );
          },
          ep = (0, r.useMemo)(
            () => ({
              List: r.forwardRef((e, t) => {
                let { style: s, children: r, ...n } = e;
                return (0, a.jsx)("div", {
                  ref: t,
                  ...n,
                  style: { display: "flex", flexWrap: "wrap", ...s },
                  children: r,
                });
              }),
              Item: (e) => {
                let { children: t, ...s } = e;
                return (0, a.jsx)("div", {
                  ...s,
                  style: {
                    padding: "0.5rem",
                    display: "flex",
                    flex: "none",
                    alignContent: "stretch",
                    boxSizing: "border-box",
                  },
                  className: "w-full lg:w-1/2 xl:w-1/3",
                  children: t,
                });
              },
            }),
            []
          );
        return (
          (0, r.useEffect)(() => {
            let e = document.createElement("style");
            return (
              (e.innerHTML =
                "\n      @keyframes messageBump {\n        0% { transform: translateX(0) scale(1); }\n        10% { transform: translateX(-8px) scale(1.02); }\n        20% { transform: translateX(8px) scale(1.03); }\n        30% { transform: translateX(-7px) scale(1.02); }\n        40% { transform: translateX(6px) scale(1.01); }\n        50% { transform: translateX(-5px) scale(1.005); }\n        60% { transform: translateX(4px) scale(1); }\n        70% { transform: translateX(-3px) scale(1); }\n        80% { transform: translateX(2px) scale(1); }\n        90% { transform: translateX(-1px) scale(1); }\n        100% { transform: translateX(0) scale(1); }\n      }\n      \n      .message-bump {\n        animation: messageBump 0.6s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;\n        transform-origin: center center;\n        position: relative;\n        z-index: 10;\n        border-radius: 8px;\n      }\n      \n      .message-bump > div:first-child {\n        animation: contentFadeIn 1s ease-in forwards;\n        border-width: 2px;\n        border-color: #FFD44F;\n        position: relative;\n      }\n      \n      .message-bump > div:first-child::before {\n        content: '';\n        position: absolute;\n        inset: 0;\n        background-color: rgba(255, 212, 79, 0.4);\n        border-radius: 8px;\n        z-index: 100;\n        pointer-events: none;\n        animation: highlightFade 0.6s ease-out forwards;\n      }\n      \n      @keyframes highlightFade {\n        0% { opacity: 0.9; }\n        100% { opacity: 0; }\n      }\n    "),
              document.head.appendChild(e),
              () => {
                document.head.removeChild(e);
              }
            );
          }, []),
          (0, r.useEffect)(() => {
            let e = s.filter((e) => e.isNew);
            if (e.length > 0) {
              let t = e.map((e) =>
                setTimeout(() => {
                  g((t) =>
                    t.map((t) => (t._id === e._id ? { ...t, isNew: !1 } : t))
                  );
                }, 1200)
              );
              return () => {
                t.forEach((e) => clearTimeout(e));
              };
            }
          }, [s]),
          (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsxs)(a.Fragment, {
                children: [
                  (0, a.jsxs)("div", {
                    className:
                      "flex-shrink-0 lg:flex w-full items-center justify-between gap-4 hidden mb-2",
                    children: [
                      (0, a.jsxs)("div", {
                        className: "flex items-center justify-start gap-4",
                        children: [
                          (0, a.jsxs)("button", {
                            className:
                              "py-1 px-3 flex items-center gap-2 border border-[#5D3014] bg-[#FFD44F] rounded-full",
                            children: [
                              (0, a.jsx)("img", {
                                src: "/assets/bowl-icon.svg",
                                alt: "bowl",
                                className: "w-6 h-6",
                              }),
                              (0, a.jsx)("span", {
                                className:
                                  "text-[14px] font-bold text-[#5D3014]",
                                children: "DREAM",
                              }),
                            ],
                          }),
                          (0, a.jsxs)("button", {
                            className:
                              "py-1 px-3 flex items-center gap-2 border border-[#5D3014] bg-[white] rounded-full opacity-[50%]",
                            children: [
                              (0, a.jsx)("img", {
                                src: "/assets/coin-flip-btn-icon.svg",
                                alt: "bowl",
                                className: "w-6 h-6",
                              }),
                              (0, a.jsx)("span", {
                                className:
                                  "text-[14px] font-bold text-[#5D3014]",
                                children: "soon",
                              }),
                            ],
                          }),
                          (0, a.jsxs)("button", {
                            className:
                              "py-1 px-3 flex items-center gap-2 border border-[#5D3014] bg-[white] rounded-full opacity-[50%]",
                            children: [
                              (0, a.jsx)("img", {
                                src: "/assets/dice-btn-icon.svg",
                                alt: "bowl",
                                className: "w-6 h-6",
                              }),
                              (0, a.jsx)("span", {
                                className:
                                  "text-[14px] font-bold text-[#5D3014]",
                                children: "soon",
                              }),
                            ],
                          }),
                          (0, a.jsxs)("button", {
                            className:
                              "py-1 px-3 flex items-center gap-2 border border-[#5D3014] bg-[white] rounded-full opacity-[50%]",
                            children: [
                              (0, a.jsx)("img", {
                                src: "/assets/roulette-btn-icon.svg",
                                alt: "bowl",
                                className: "w-6 h-6",
                              }),
                              (0, a.jsx)("span", {
                                className:
                                  "text-[14px] font-bold text-[#5D3014]",
                                children: "soon",
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, a.jsxs)("button", {
                        className:
                          "cursor-pointer py-1 px-3 flex items-center gap-2 border border-[#000000] bg-gradient-to-r from-[#000000] to-[#454545] rounded-full",
                        onClick: () => {
                          H(!0), er(!0);
                        },
                        style: {
                          filter:
                            "drop-shadow(0px 4px 8px rgba(93, 48, 20, 0.4))",
                        },
                        children: [
                          (0, a.jsx)("img", {
                            src: "/assets/bolt-beg-icon.svg",
                            alt: "bolt-beg",
                            className: "w-4 h-4",
                          }),
                          (0, a.jsx)("span", {
                            className: "text-[#FFD44F] text-[16px] font-bold",
                            children: "Create DREAM",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsx)("div", {
                    className:
                      "grow flex-1 flex flex-col overflow-hidden max-lg:py-4",
                    id: "messages-container",
                    children: _
                      ? (0, a.jsx)("div", {
                          className: "flex items-center justify-center h-full",
                          children: (0, a.jsx)("div", {
                            className:
                              "w-8 h-8 border-4 border-[#FFD44F] border-t-[#5D3014] rounded-full animate-spin",
                          }),
                        })
                      : (0, a.jsx)(c.sN, {
                          style: {
                            height: "100%",
                            scrollBehavior: "auto",
                            WebkitOverflowScrolling: "touch",
                          },
                          totalCount: s.length,
                          overscan: 200,
                          increaseViewportBy: { top: 1e3, bottom: 1e3 },
                          computeItemKey: (e) => {
                            var t;
                            return null === (t = s[e]) || void 0 === t
                              ? void 0
                              : t._id;
                          },
                          components: {
                            ...ep,
                            Footer: () =>
                              (0, a.jsx)("div", {
                                className:
                                  "flex items-center justify-center py-4 w-full",
                                children: D
                                  ? (0, a.jsx)("div", {
                                      className:
                                        "w-6 h-6 border-3 border-[#FFD44F] border-t-[#5D3014] rounded-full animate-spin",
                                    })
                                  : E.has_next
                                  ? (0, a.jsx)("span", {
                                      className: "text-[#5D3014] text-sm",
                                      children: "Scroll for more",
                                    })
                                  : null,
                              }),
                          },
                          itemContent: (e) => {
                            let t = s[e],
                              r = $.includes(t._id);
                            return (0, a.jsx)(f(), {
                              href: "".concat,
                              className: "w-full",
                              children: (0, a.jsxs)("div", {
                                className:
                                  "flex flex-col gap-1 items-start justify-start w-full transition-opacity duration-300 "
                                    .concat(
                                      r
                                        ? "opacity-50 pointer-events-none"
                                        : "opacity-100",
                                      " "
                                    )
                                    .concat(t.isNew ? "message-bump" : ""),
                                children: [
                                  (0, a.jsx)("div", {
                                    className:
                                      "p-3 w-full mx-auto border border-[#8F95B2] rounded-[8px] bg-white lg:h-[220px] flex flex-col  hover:shadow-[0px_2px_8px_rgba(93,48,20,0.4)] hover:rounded-[8px] cursor-pointer",
                                    children: (0, a.jsxs)("div", {
                                      className:
                                        "flex flex-col gap-2 items-start justify-between h-full",
                                      children: [
                                        (0, a.jsxs)("div", {
                                          className:
                                            "w-full flex-col flex items-start gap-2",
                                          children: [
                                            (0, a.jsxs)("div", {
                                              className:
                                                "flex items-center justify-between w-full",
                                              children: [
                                                (0, a.jsxs)("div", {
                                                  className:
                                                    "flex items-center gap-1 text-[#5D3014]",
                                                  children: [
                                                    (0, a.jsx)("img", {
                                                      src: (0, i.At)(
                                                        t.voiceType
                                                      ),
                                                      alt: t.voiceType.toLowerCase(),
                                                      className:
                                                        "w-5 h-5 sm:w-6 sm:h-6",
                                                    }),
                                                    (0, a.jsxs)("a", {
                                                      href: "/profile/".concat(
                                                        t.walletAddress
                                                      ),
                                                      onClick: (e) => {
                                                        e.stopPropagation();
                                                      },
                                                      className:
                                                        "font-[Montserrat] text-[#5D3014] font-medium text-[12px] hover:underline",
                                                      children: [
                                                        t.walletAddress.slice(
                                                          0,
                                                          4
                                                        ),
                                                        "...",
                                                        t.walletAddress.slice(
                                                          -4
                                                        ),
                                                      ],
                                                    }),
                                                    (0, a.jsx)("div", {
                                                      className:
                                                        "w-1 h-1 rounded-full bg-[#FFD44F] flex-shrink-0",
                                                    }),
                                                    (0, a.jsx)("span", {
                                                      className:
                                                        "font-[Montserrat] font-medium text-[12px] text-[#5D3014]",
                                                      children: (0, i.aW)(
                                                        t.timestamp
                                                      ),
                                                    }),
                                                  ],
                                                }),
                                                (0, a.jsxs)("div", {
                                                  className:
                                                    "flex items-center justify-center gap-2",
                                                  children: [
                                                    el.length &&
                                                    Y &&
                                                    el.includes(
                                                      null == L
                                                        ? void 0
                                                        : L.toBase58()
                                                    )
                                                      ? (0, a.jsx)(a.Fragment, {
                                                          children: (0, a.jsx)(
                                                            "img",
                                                            {
                                                              src: "/assets/delete-icon.svg",
                                                              alt: "delete",
                                                              className:
                                                                "w-4 h-4 cursor-pointer",
                                                              onClick: (e) => {
                                                                e.stopPropagation(),
                                                                  e.preventDefault(),
                                                                  ec(t._id);
                                                              },
                                                            }
                                                          ),
                                                        })
                                                      : null,
                                                    (0, a.jsx)(m.A, {
                                                      text: t.text,
                                                      voiceId: t.voiceId,
                                                      className:
                                                        "flex-shrink-0",
                                                    }),
                                                    (0, a.jsxs)("div", {
                                                      className: "relative",
                                                      onClick: (e) => {
                                                        if (
                                                          (e.stopPropagation(),
                                                          e.preventDefault(),
                                                          !Y)
                                                        ) {
                                                          o.o.error(
                                                            "Connect wallet to react!"
                                                          );
                                                          return;
                                                        }
                                                        Z(
                                                          G === t._id
                                                            ? null
                                                            : t._id
                                                        );
                                                      },
                                                      children: [
                                                        G === t._id
                                                          ? (0, a.jsx)("div", {
                                                              className:
                                                                "absolute right-0 top-[120%] z-[9] rounded-[2000px] py-2 px-4 bg-[#FFEFBD] flex items-center gap-2 w-max",
                                                              children:
                                                                i.Br.map((e) =>
                                                                  (0, a.jsx)(
                                                                    "div",
                                                                    {
                                                                      className:
                                                                        "cursor-pointer flex-shrink-0 p-1 rounded-full border bg-white",
                                                                      style: {
                                                                        borderColor:
                                                                          e.color,
                                                                        boxShadow:
                                                                          "1px 1px 0px 0px ".concat(
                                                                            e.color
                                                                          ),
                                                                      },
                                                                      onClick:
                                                                        () => {
                                                                          eu(
                                                                            t._id,
                                                                            e.val
                                                                          ),
                                                                            Z(
                                                                              null
                                                                            );
                                                                        },
                                                                      children:
                                                                        (0,
                                                                        a.jsx)(
                                                                          "img",
                                                                          {
                                                                            src: e.icon,
                                                                            alt: e.val,
                                                                            style:
                                                                              {
                                                                                width:
                                                                                  "16px",
                                                                                height:
                                                                                  "16px",
                                                                              },
                                                                          }
                                                                        ),
                                                                    },
                                                                    e.val
                                                                  )
                                                                ),
                                                            })
                                                          : null,
                                                        (0, a.jsx)("img", {
                                                          src: "/assets/reactions-icon.svg",
                                                          about: "reaction",
                                                          className:
                                                            "w-6 h-6 rounded-full cursor-pointer shadow-[0px_4px_8px_0px_rgba(0,0,0,0.25)]",
                                                        }),
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                            (0, a.jsxs)("div", {
                                              className:
                                                "w-full flex items-start gap-2 flex-grow",
                                              children: [
                                                t.imageUrl
                                                  ? (0, i.r1)(t.imageUrl)
                                                    ? (0, a.jsxs)("div", {
                                                        className:
                                                          "relative w-[80px] h-[80px] flex-shrink-0 rounded-[4px] cursor-pointer overflow-hidden",
                                                        onClick: (e) => {
                                                          e.stopPropagation(),
                                                            e.preventDefault(),
                                                            es({
                                                              isOpen: !0,
                                                              imageUrl:
                                                                t.imageUrl,
                                                              isVideo: !0,
                                                            });
                                                        },
                                                        children: [
                                                          (0, a.jsx)("video", {
                                                            src: t.imageUrl,
                                                            className:
                                                              "w-full h-full object-cover",
                                                            muted: !0,
                                                          }),
                                                          (0, a.jsx)("div", {
                                                            className:
                                                              "absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center",
                                                            children: (0,
                                                            a.jsx)("img", {
                                                              src: "/assets/play-icon.svg",
                                                              alt: "play video",
                                                              className:
                                                                "w-8 h-8 opacity-80",
                                                            }),
                                                          }),
                                                        ],
                                                      })
                                                    : (0, a.jsx)("img", {
                                                        src: t.imageUrl,
                                                        alt: "message attachment",
                                                        className:
                                                          "w-[80px] h-[80px] flex-shrink-0 object-cover rounded-[4px] cursor-pointer",
                                                        onClick: (e) => {
                                                          e.stopPropagation(),
                                                            e.preventDefault(),
                                                            es({
                                                              isOpen: !0,
                                                              imageUrl:
                                                                t.imageUrl,
                                                              isVideo: !1,
                                                            });
                                                        },
                                                      })
                                                  : null,
                                                (0, a.jsx)(x.A, {
                                                  text: t.text,
                                                  setIsExpanded: (e) => {
                                                    k(e), F(t.text);
                                                  },
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        (0, a.jsxs)("div", {
                                          className:
                                            "w-full flex-col flex items-start gap-4 mt-auto",
                                          children: [
                                            (0, a.jsx)("div", {
                                              className:
                                                "flex items-center justify-start gap-2 w-full",
                                              children: (0, a.jsx)("div", {
                                                className:
                                                  "relative w-full h-[12px] bg-[#FFD44F] rounded-[200px] overflow-hidden",
                                                children: (0, a.jsx)("div", {
                                                  className:
                                                    "absolute top-0 left-0 h-full transition-all duration-300 rounded-[200px]",
                                                  style: {
                                                    width: "".concat(
                                                      Math.min(
                                                        100,
                                                        (Number(t.fillAmount) /
                                                          Number(t.solAmount)) *
                                                          100
                                                      ),
                                                      "%"
                                                    ),
                                                    background:
                                                      "linear-gradient(to right, #009A49, #29F188)",
                                                  },
                                                }),
                                              }),
                                            }),
                                            "completed" === t.begStatus
                                              ? (0, a.jsxs)("div", {
                                                  className:
                                                    "rounded-[8px] h-full w-full px-4 py-1 border border-black flex items-center gap-2 bg-[#FFD44F] shadow-[inset_0px_4px_8px_0px_rgba(0,0,0,0.25)]",
                                                  children: [
                                                    (0, a.jsx)("img", {
                                                      src: "/assets/check-fulfilled-icon.svg",
                                                      alt: "solana",
                                                      className: "w-4 h-4",
                                                      loading: "lazy",
                                                    }),
                                                    (0, a.jsx)("p", {
                                                      className:
                                                        "text-[#5D3014] text-[14px]",
                                                      children:
                                                        "DREAM fulfilled",
                                                    }),
                                                  ],
                                                })
                                              : (0, a.jsx)("div", {
                                                  className: "w-full",
                                                  onClick: (e) => {
                                                    e.stopPropagation(),
                                                      e.preventDefault();
                                                  },
                                                  children: (0, a.jsx)(p.A, {
                                                    handleBAGS: ed,
                                                    donatingMessageId: Q,
                                                    msg: t,
                                                  }),
                                                }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  }),
                                  t.reactions && Object.keys(t.reactions).length
                                    ? (0, a.jsx)("div", {
                                        className:
                                          "flex items-center justify-start gap-2",
                                        children: i.Br.map((e) =>
                                          t.reactions[e.val]
                                            ? (0, a.jsxs)(
                                                "div",
                                                {
                                                  className:
                                                    "flex-shrink-0 p-1 rounded-full border bg-white flex items-center gap-1 cursor-pointer",
                                                  style: {
                                                    borderColor: e.color,
                                                    boxShadow:
                                                      "1px 1px 0px 0px ".concat(
                                                        e.color
                                                      ),
                                                  },
                                                  onClick: (s) => {
                                                    if (
                                                      (s.stopPropagation(),
                                                      s.preventDefault(),
                                                      !Y)
                                                    ) {
                                                      o.o.error(
                                                        "Connect wallet to react!"
                                                      );
                                                      return;
                                                    }
                                                    eu(t._id, e.val), Z(null);
                                                  },
                                                  children: [
                                                    (0, a.jsx)("img", {
                                                      src: e.icon,
                                                      alt: e.val,
                                                      style: {
                                                        width: "16px",
                                                        height: "16px",
                                                      },
                                                    }),
                                                    (0, a.jsx)("p", {
                                                      className:
                                                        "font-[Montserrat] text-[12px] text-black",
                                                      children:
                                                        t.reactions[e.val],
                                                    }),
                                                  ],
                                                },
                                                e.val
                                              )
                                            : null
                                        ),
                                      })
                                    : null,
                                ],
                              }),
                            });
                          },
                          endReached: () => {
                            E.has_next && !D && ei();
                          },
                        }),
                  }),
                  (0, a.jsx)("div", {
                    className: "block lg:hidden w-full mx-auto",
                    children: K
                      ? (0, a.jsx)(y.A, {
                          isMobile: !0,
                          onClose: () => {
                            H(!1), Y || P("");
                          },
                          onSendMessage: (t) => {
                            null == e || e.send(JSON.stringify(t));
                            let s = {
                              action: "updateBegUserInfo",
                              walletAddress:
                                null == U ? void 0 : U.walletAddress,
                              updates: {
                                totalBegs:
                                  ((null == U ? void 0 : U.totalBegs) || 0) + 1,
                              },
                            };
                            null == e || e.send(JSON.stringify(s)),
                              Y || P(""),
                              H(!1),
                              J(!0),
                              X(i.Xz);
                          },
                          isInCooldown: T,
                          cooldownSeconds: R,
                        })
                      : (0, a.jsx)("div", {
                          className:
                            "py-3 px-4 sm:py-4 sm:px-6 rounded-[8px] bg-[#FFD44F] w-full mx-auto",
                          children: (0, a.jsxs)("button", {
                            onClick: () => H(!0),
                            className:
                              "w-full h-[36px] sm:h-[40px] flex items-center justify-center cursor-pointer gap-2 bg-black text-[#FFD44F] text-[14px] sm:text-[16px] rounded-[8px] outline-none border-none",
                            children: [
                              (0, a.jsx)("img", {
                                src: "/assets/bolt-icon.svg",
                                alt: "bolt",
                                className: "w-3 h-3 sm:w-4 sm:h-4",
                              }),
                              (0, a.jsx)("span", {
                                className: "text-[#FFD44F]",
                                children: "DREAM",
                              }),
                            ],
                          }),
                        }),
                  }),
                ],
              }),
              (0, a.jsx)(u.A, { isMobile: !0 }),
              (0, a.jsx)(d.A, {
                isOpen: w,
                onClose: () => k(!1),
                children: (0, a.jsx)("div", {
                  className: "text-[14px] sm:text-[16px] break-all text-black",
                  children: S,
                }),
              }),
              (0, a.jsx)(d.A, {
                isOpen: et.isOpen,
                onClose: () => es({ isOpen: !1, imageUrl: "", isVideo: !1 }),
                style: { background: "transparent", border: "none" },
                children: (0, a.jsx)("div", {
                  className: "flex justify-center items-center h-full w-full",
                  children: et.isVideo
                    ? (0, a.jsx)("video", {
                        src: et.imageUrl,
                        controls: !0,
                        autoPlay: !0,
                        className:
                          "max-w-full max-h-[80vh] object-contain rounded-[8px]",
                      })
                    : (0, a.jsx)("img", {
                        src: et.imageUrl,
                        alt: "Full size attachment",
                        className:
                          "max-w-full max-h-[80vh] object-contain rounded-[8px]",
                      }),
                }),
              }),
              (0, a.jsx)(d.A, {
                isOpen: ea,
                onClose: () => er(!1),
                children: (0, a.jsx)(y.A, {
                  onClose: () => er(!1),
                  onSendMessage: (t) => {
                    null == e || e.send(JSON.stringify(t));
                    let s = {
                      action: "updateBegUserInfo",
                      walletAddress: null == U ? void 0 : U.walletAddress,
                      updates: {
                        totalBegs:
                          ((null == U ? void 0 : U.totalBegs) || 0) + 1,
                      },
                    };
                    null == e || e.send(JSON.stringify(s)),
                      Y || P(""),
                      er(!1),
                      J(!0),
                      X(i.Xz);
                  },
                  isInCooldown: T,
                  cooldownSeconds: R,
                }),
              }),
            ],
          })
        );
      }
    },
    4552: (e, t, s) => {
      "use strict";
      s.d(t, { A: () => l });
      var a = s(5155),
        r = s(6874),
        n = s.n(r);
      let l = (e) => {
        let { isMobile: t = !1 } = e;
        return (0, a.jsx)(a.Fragment, {
          children: (0, a.jsxs)("div", {
            className: "".concat(
              t ? "w-full lg:hidden flex pt-3" : "lg:flex hidden",
              " items-center gap-2 justify-center"
            ),
            children: [
              (0, a.jsx)(n(), {
                href: "https://t.me/Formal",
                target: "_blank",
                rel: "noreferrer noopener nofollower",
                children: (0, a.jsx)("img", {
                  src: "/assets/telegram-icon.svg",
                  alt: "telegram",
                  className: "w-6 h-6",
                  style: {
                    filter: "drop-shadow(0px 4px 8px rgba(93, 48, 20, 0.4))",
                  },
                }),
              }),
              (0, a.jsx)(n(), {
                href: "https://x.com/formal_dream",
                target: "_blank",
                rel: "noreferrer noopener nofollower",
                children: (0, a.jsx)("img", {
                  src: "/assets/x-icon.svg",
                  alt: "x",
                  className: "w-6 h-6",
                  style: {
                    filter: "drop-shadow(0px 4px 8px rgba(93, 48, 20, 0.4))",
                  },
                }),
              }),
              (0, a.jsx)(a.Fragment, {
                children: (0, a.jsx)(n(), {
                  href: "https://www.dextools.io/",
                  target: "_blank",
                  rel: "noreferrer noopener nofollower",
                  children: (0, a.jsx)("img", {
                    src: "/assets/dexscreener-icon.svg",
                    alt: "dexscreener",
                    className: "w-6 h-6",
                    style: {
                      filter: "drop-shadow(0px 4px 8px rgba(93, 48, 20, 0.4))",
                    },
                  }),
                }),
              }),
              (0, a.jsx)(a.Fragment, {
                children: (0, a.jsx)(n(), {
                  href: "https://pump.fun/coin/".concat("tbd"),
                  target: "_blank",
                  rel: "noreferrer noopener nofollower",
                  children: (0, a.jsx)("img", {
                    src: "/assets/pump-icon.svg",
                    alt: "pump",
                    className: "w-6 h-6",
                    style: {
                      filter: "drop-shadow(0px 4px 8px rgba(93, 48, 20, 0.4))",
                    },
                  }),
                }),
              }),
            ],
          }),
        });
      };
    },
    7676: (e, t, s) => {
      Promise.resolve().then(s.bind(s, 3792));
    },
    9788: (e, t, s) => {
      "use strict";
      s.d(t, { A: () => o });
      var a = s(5155),
        r = s(2115),
        n = s(6671),
        l = s(6413);
      let o = (e) => {
        let { text: t, voiceId: s, className: o } = e,
          [i, c] = (0, r.useState)(!1),
          [d, u] = (0, r.useState)(null),
          [p, m] = (0, r.useState)(!1),
          x = async () => {
            if (!p) {
              if (d) {
                i ? (d.pause(), c(!1)) : (d.play(), c(!0));
                return;
              }
              try {
                m(!0);
                let e = await fetch(
                  "https://api.elevenlabs.io/v1/text-to-speech/".concat(s),
                  {
                    method: "POST",
                    headers: {
                      Accept: "audio/mpeg",
                      "Content-Type": "application/json",
                      "xi-api-key":
                        "sk_bf3c7cd0ead3f701e286aebed308b8dc4a97494f4c72e6bd",
                    },
                    body: JSON.stringify({
                      text: t,
                      model_id: "eleven_multilingual_v2",
                      voice_settings: { stability: 0.5, similarity_boost: 0.5 },
                    }),
                  }
                );
                if (!e.ok) throw Error("HTTP error! status: ".concat(e.status));
                let a = await e.blob(),
                  r = URL.createObjectURL(a),
                  n = new Audio(r);
                n.addEventListener("ended", () => {
                  c(!1);
                }),
                  n.addEventListener("pause", () => {
                    c(!1);
                  }),
                  u(n),
                  n.play(),
                  c(!0);
              } catch (e) {
                console.error("Error generating speech:", e),
                  n.o.error("Error generating speech");
              } finally {
                m(!1);
              }
            }
          };
        return (
          (0, r.useEffect)(
            () => () => {
              d && (d.pause(), URL.revokeObjectURL(d.src));
            },
            [d]
          ),
          (0, a.jsx)(l.P.button, {
            onClick: (e) => {
              e.stopPropagation(), e.preventDefault(), x();
            },
            whileTap: { scale: 0.9 },
            whileHover: { scale: 1.1 },
            transition: { type: "spring", stiffness: 300, damping: 20 },
            className: "cursor-pointer ".concat(o),
            disabled: p,
            children: p
              ? (0, a.jsx)("div", {
                  className: "w-6 h-6",
                  children: (0, a.jsx)("div", {
                    className:
                      "animate-spin rounded-full h-full w-full border-b-2 border-[#5D3014]",
                  }),
                })
              : (0, a.jsx)("img", {
                  src: i ? "/assets/pause-icon.svg" : "/assets/play-icon.svg",
                  alt: i ? "pause" : "play",
                  className:
                    "w-6 h-6 rounded-full shadow-[0px_4px_8px_0px_rgba(0,0,0,0.25)]",
                }),
          })
        );
      };
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(0, [956, 387, 874, 671, 558, 870, 773, 386, 441, 684, 358], () =>
      t(7676)
    ),
      (_N_E = e.O());
  },
]);
