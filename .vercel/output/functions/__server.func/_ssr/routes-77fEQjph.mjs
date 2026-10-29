import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as ImagePlus, i as Printer, n as Trash2, r as Save } from "../_libs/lucide-react.mjs";
import { a as Bar, c as ResponsiveContainer, i as XAxis, l as Tooltip, n as BarChart, o as Pie, r as YAxis, s as Cell, t as PieChart } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-77fEQjph.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var MONTHS = [
	"Jan",
	"Feb",
	"Mar",
	"Apr",
	"May",
	"Jun",
	"Jul",
	"Aug",
	"Sep",
	"Oct",
	"Nov",
	"Dec"
];
var SEASON = [
	65,
	85,
	118,
	138,
	143,
	108,
	100,
	118,
	117,
	100,
	84,
	58
];
function blankDraft() {
	return {
		id: "draft",
		clientName: "James Davis",
		clientPhone: "(717) 802-1607",
		clientEmail: "davis7x@hotmail.com",
		address: "3929 Brookridge Dr, Mechanicsburg, PA 17050",
		preparedBy: "Tony Lostracco",
		preparedPhone: "(888) 270-2884",
		preparedEmail: "tony@publicservicesolar.com",
		date: "Oct 28, 2026",
		product: "propel",
		moduleCount: 25,
		moduleModel: "REC Solar REC460AA PURE-RX-DC",
		inverterCount: 25,
		inverterModel: "Enphase Energy IQ8X-80-M-DOM-US @ 240 V",
		systemKw: 11.5,
		yearOneKwh: 13409,
		monthlyBill: 224.25,
		remainingBill: 15,
		monthlyRec: 27.94,
		price: 22885,
		apr: 8.99,
		termYears: 25,
		paymentOverride: "",
		imageDataUrl: null
	};
}
function money(n, digits = 2) {
	if (!Number.isFinite(n)) return "—";
	return n.toLocaleString("en-US", {
		style: "currency",
		currency: "USD",
		minimumFractionDigits: digits,
		maximumFractionDigits: digits
	});
}
function monthlyPayment(principal, aprPercent, years) {
	const n = Math.round(years * 12);
	if (principal <= 0 || n <= 0) return 0;
	const r = aprPercent / 100 / 12;
	if (r === 0) return principal / n;
	const pow = (1 + r) ** n;
	return principal * r * pow / (pow - 1);
}
function compute(d) {
	const override = Number(d.paymentOverride);
	const payment = d.product === "cash" ? 0 : d.paymentOverride.trim() !== "" && Number.isFinite(override) ? override : monthlyPayment(d.price, d.apr, d.termYears);
	const totalUtility = d.monthlyBill;
	const totalSolar = d.remainingBill + payment - d.monthlyRec;
	const monthlySavings = totalUtility - totalSolar;
	const yearOneUtility = (d.monthlyBill - d.remainingBill) * 12;
	const yearOneRec = d.monthlyRec * 12;
	const yearOneReturn = yearOneUtility + yearOneRec;
	const paybackYears = d.product === "cash" && yearOneReturn > 0 ? d.price / yearOneReturn : null;
	const solarShare = d.monthlyBill > 0 ? Math.max(0, Math.min(100, (d.monthlyBill - d.remainingBill) / d.monthlyBill * 100)) : 0;
	const weight = SEASON.reduce((a, b) => a + b, 0);
	const monthlyKwh = MONTHS.map((month, i) => ({
		month,
		kwh: Math.round(d.yearOneKwh * SEASON[i] / weight)
	}));
	return {
		payment,
		totalUtility,
		totalSolar,
		monthlySavings,
		lifetimeSavings: monthlySavings * 12 * 25,
		utility25: d.monthlyBill * 12 * 25,
		solarShare,
		yearOneUtility,
		yearOneRec,
		yearOneReturn,
		paybackYears,
		monthlyKwh
	};
}
function productTitle(product) {
	if (product === "propel") return "PROPEL — Prepaid Energy Service Agreement to Ownership";
	if (product === "ownership") return "Ownership details";
	return "Cash purchase";
}
function designSrc(d) {
	return d.imageDataUrl || "/sample-design.png";
}
function fileToDesignUrl(file, maxWidth = 1600) {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.onerror = () => reject(reader.error ?? /* @__PURE__ */ new Error("Could not read the image"));
		reader.onload = () => {
			const img = new Image();
			img.onload = () => {
				const scale = Math.min(1, maxWidth / img.width);
				const canvas = document.createElement("canvas");
				canvas.width = Math.max(1, Math.round(img.width * scale));
				canvas.height = Math.max(1, Math.round(img.height * scale));
				const ctx = canvas.getContext("2d");
				if (!ctx) {
					reject(/* @__PURE__ */ new Error("Could not prepare the image"));
					return;
				}
				ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
				resolve(canvas.toDataURL("image/jpeg", .86));
			};
			img.onerror = () => reject(/* @__PURE__ */ new Error("That file is not a readable image"));
			img.src = String(reader.result);
		};
		reader.readAsDataURL(file);
	});
}
function Mark({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 36 36",
		className,
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "18",
				cy: "9",
				r: "4.2",
				className: "fill-accent"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M18 4.2v-2M18 16.2v2M11.5 6.2l-1.6-1.6M24.5 6.2l1.6-1.6",
				className: "fill-none stroke-accent",
				strokeWidth: "1.4",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M6 20.5 18 12l12 8.5V32H6V20.5Z",
				className: "fill-panel-fg"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M15 32V24h6v8",
				className: "fill-panel"
			})
		]
	});
}
function ProposalDocument({ draft }) {
	const math = compute(draft);
	const src = designSrc(draft);
	const rates = draft.product === "propel" ? [
		8.99,
		9.99,
		10.99
	] : [draft.apr];
	const mix = [{
		name: "Solar",
		value: Math.round(math.solarShare)
	}, {
		name: "Utility",
		value: Math.round(100 - math.solarShare)
	}];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "mx-auto flex w-full min-w-0 max-w-3xl flex-col gap-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "proposal-sheet overflow-hidden rounded-card bg-panel text-panel-fg shadow-lg",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between px-6 pt-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mark, { className: "size-9" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "font-display text-sm font-semibold tracking-wide",
								children: ["PUBLIC SERVICE ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-accent",
									children: "SOLAR"
								})]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs tracking-widest text-panel-muted uppercase",
							children: draft.date
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "px-6 pt-10 pb-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-semibold tracking-widest text-accent uppercase",
								children: "Solar energy redefined"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "font-display mt-3 max-w-xl text-4xl leading-tight font-semibold",
								children: "Clean energy, lower bills, one clear proposal."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 inline-flex rounded-full border border-accent px-4 py-2 font-display text-lg",
								children: "Public Service Solar"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-4 border-t border-white/10 px-6 py-5 text-sm sm:grid-cols-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs tracking-widest text-panel-muted uppercase",
									children: "Prepared for"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 font-semibold",
									children: draft.clientName || "Client"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-panel-muted",
									children: draft.clientPhone
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-panel-muted",
									children: draft.clientEmail
								})
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs tracking-widest text-panel-muted uppercase",
									children: "Prepared by"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 font-semibold",
									children: draft.preparedBy
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-panel-muted",
									children: draft.preparedPhone
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-panel-muted",
									children: draft.preparedEmail
								})
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs tracking-widest text-panel-muted uppercase",
								children: "Project site"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1",
								children: draft.address || "—"
							})] })
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "proposal-sheet rounded-card border border-line bg-card p-6 shadow-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold tracking-widest text-accent uppercase",
						children: "Your solar power system"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display mt-1 text-3xl font-semibold",
						children: "Your custom solar system"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 grid gap-4 sm:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-card border border-line p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-lg font-semibold",
								children: "System components"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
								className: "mt-3 space-y-3 text-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between gap-4 border-b border-line pb-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
											className: "text-accent",
											children: "Solar modules"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
											className: "text-right break-words",
											children: [
												"(",
												draft.moduleCount,
												") ",
												draft.moduleModel
											]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between gap-4 border-b border-line pb-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
											className: "text-accent",
											children: "Inverters"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
											className: "text-right break-words",
											children: [
												"(",
												draft.inverterCount,
												") ",
												draft.inverterModel
											]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "System size" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", { children: [draft.systemKw.toFixed(3), " DC kW"] })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "Year one production" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", { children: [draft.yearOneKwh.toLocaleString(), " kWh"] })]
									})
								]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
							className: "overflow-hidden rounded-card border border-accent bg-paper",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src,
								alt: `Aurora design for ${draft.clientName || "this proposal"}`,
								className: "aspect-square w-full object-cover"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
								className: "px-3 py-2 text-xs text-muted",
								children: "Aurora Design for this proposal only. Swap the export and the next job keeps its own image."
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 grid gap-4 sm:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "h-64 rounded-card border border-line p-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-semibold",
									children: "Post-solar energy mix"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
									width: "100%",
									height: "90%",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PieChart, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Pie, {
										data: mix,
										dataKey: "value",
										nameKey: "name",
										innerRadius: 46,
										outerRadius: 72,
										stroke: "none",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, { fill: "var(--color-accent)" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, { fill: "var(--color-line)" })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { formatter: (value) => `${value}%` })] })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-center text-xs text-muted",
									children: [
										"Solar ",
										Math.round(math.solarShare),
										"% · Utility ",
										Math.round(100 - math.solarShare),
										"%"
									]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "h-64 rounded-card border border-line p-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-semibold",
								children: "Solar electricity generated"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
								width: "100%",
								height: "100%",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
									data: math.monthlyKwh,
									margin: {
										top: 8,
										right: 4,
										left: 0,
										bottom: 0
									},
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
											dataKey: "month",
											tick: { fontSize: 10 },
											interval: 0
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
											tick: { fontSize: 10 },
											width: 36
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { formatter: (value) => [`${value} kWh`, "Estimated"] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
											dataKey: "kwh",
											fill: "var(--color-accent)",
											radius: [
												3,
												3,
												0,
												0
											]
										})
									]
								})
							})]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "proposal-sheet rounded-card border border-line bg-card p-6 shadow-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold tracking-widest text-accent uppercase",
						children: "The numbers"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display mt-1 text-3xl font-semibold",
						children: productTitle(draft.product)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 font-display text-3xl font-semibold text-accent",
						children: money(draft.price)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold tracking-wide text-accent uppercase",
						children: draft.product === "propel" ? "Prepaid baseline ESA amount" : "Solution price"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted",
						children: draft.product === "cash" ? "Paid in full. Incentives stay with the homeowner." : `${draft.termYears} year · ${draft.apr.toFixed(2)}%${draft.paymentOverride.trim() ? " · payment entered manually" : ""}`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 grid gap-4 sm:grid-cols-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
								label: "Year 1 monthly savings",
								value: money(math.monthlySavings)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
								label: "Estimated monthly payment",
								value: money(math.payment)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
								label: "25-year savings",
								value: money(math.lifetimeSavings, 0)
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-5 overflow-x-auto",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
							className: "w-full min-w-md text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: "border-b border-line text-left",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "py-2 font-semibold text-accent",
										children: "Monthly cost"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "py-2 font-semibold",
										children: "Utility only"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "py-2 font-semibold",
										children: "With solar"
									})
								]
							}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tbody", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
									label: "Average remaining electric bill",
									a: money(draft.monthlyBill),
									b: money(draft.remainingBill)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
									label: "Monthly solar payments",
									a: money(0),
									b: money(math.payment)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
									label: "Minus monthly average REC",
									a: money(0),
									b: `-${money(draft.monthlyRec)}`
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
									label: "Total average monthly payments",
									a: money(math.totalUtility),
									b: money(math.totalSolar),
									strong: true
								})
							] })]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-5 text-lg",
						children: [
							"Over the next 25 years, you would pay",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-semibold text-accent",
								children: money(math.utility25, 0)
							}),
							" to the utility — money that can stay with the home instead."
						]
					}),
					draft.product === "propel" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-5 overflow-x-auto",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
							className: "w-full min-w-md text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: "bg-accent text-left text-accent-ink",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-3 py-2 font-medium",
									children: "Prepaid rate"
								}), rates.map((rate) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("th", {
									className: "px-3 py-2 font-medium",
									children: [rate.toFixed(2), "%"]
								}, rate))]
							}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: "border-b border-line",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-3 py-2",
									children: "Monthly payment"
								}), rates.map((rate) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-3 py-2",
									children: money(monthlyPayment(draft.price, rate, draft.termYears))
								}, rate))]
							}) })]
						})
					}),
					draft.product === "cash" && math.paybackYears != null && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 text-sm",
						children: [
							"First-year utility savings ",
							money(math.yearOneUtility, 0),
							" · REC ",
							money(math.yearOneRec),
							" · simple payback ",
							math.paybackYears.toFixed(1),
							" years."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-xs leading-relaxed text-muted",
						children: "Estimates use the numbers entered for this proposal and a typical seasonal production shape scaled to year-one kWh. REC prices move daily and are not guaranteed. A financed payment assumes approval for that product. Public Service Solar is not a lender and does not guarantee incentives or utility rates."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "proposal-sheet rounded-card border border-line bg-card p-6 shadow-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold tracking-widest text-accent uppercase",
						children: "Agreement snapshot"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display mt-1 text-2xl font-semibold",
						children: "Ready to drop into the contract"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "mt-4 grid gap-3 text-sm sm:grid-cols-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field$1, {
								k: "Customer",
								v: draft.clientName
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field$1, {
								k: "Site",
								v: draft.address
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field$1, {
								k: "System",
								v: `${draft.systemKw.toFixed(3)} kW DC · ${draft.yearOneKwh.toLocaleString()} kWh year one`
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field$1, {
								k: "Equipment",
								v: `${draft.moduleCount}× ${draft.moduleModel}`
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field$1, {
								k: "Price",
								v: money(draft.price)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field$1, {
								k: "Payment",
								v: draft.product === "cash" ? "Cash at signing" : `${money(math.payment)} / mo · ${draft.apr.toFixed(2)}% · ${draft.termYears} yr`
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field$1, {
								k: "Product",
								v: productTitle(draft.product)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field$1, {
								k: "Prepared",
								v: `${draft.preparedBy} · ${draft.date}`
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm text-muted",
						children: "This page carries the same figures as the proposal. Attach your contract template next and these fields can fill it."
					})
				]
			})
		]
	});
}
function Stat({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-card bg-panel px-4 py-3 text-panel-fg",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-display text-2xl font-semibold text-accent",
			children: value
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs text-panel-muted",
			children: label
		})]
	});
}
function Row({ label, a, b, strong }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
		className: "border-b border-line",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
				className: `py-2 ${strong ? "font-semibold" : ""}`,
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
				className: "py-2",
				children: a
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
				className: "py-2",
				children: b
			})
		]
	});
}
function Field$1({ k, v }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-lg border border-line px-3 py-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "text-xs tracking-wide text-muted uppercase",
			children: k
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: "font-medium",
			children: v || "—"
		})]
	});
}
var DB_NAME = "pss-proposals";
var STORE = "proposals";
function openDb() {
	return new Promise((resolve, reject) => {
		const req = indexedDB.open(DB_NAME, 1);
		req.onupgradeneeded = () => {
			const db = req.result;
			if (!db.objectStoreNames.contains(STORE)) db.createObjectStore(STORE, { keyPath: "id" });
		};
		req.onsuccess = () => resolve(req.result);
		req.onerror = () => reject(req.error ?? /* @__PURE__ */ new Error("Could not open proposal storage"));
	});
}
async function listProposals() {
	const db = await openDb();
	return new Promise((resolve, reject) => {
		const req = db.transaction(STORE, "readonly").objectStore(STORE).getAll();
		req.onsuccess = () => {
			resolve(req.result.sort((a, b) => b.savedAt - a.savedAt));
		};
		req.onerror = () => reject(req.error);
	});
}
async function saveProposal(draft) {
	const db = await openDb();
	const row = {
		...draft,
		savedAt: Date.now()
	};
	return new Promise((resolve, reject) => {
		const req = db.transaction(STORE, "readwrite").objectStore(STORE).put(row);
		req.onsuccess = () => resolve(row);
		req.onerror = () => reject(req.error);
	});
}
async function deleteProposal(id) {
	const db = await openDb();
	return new Promise((resolve, reject) => {
		const req = db.transaction(STORE, "readwrite").objectStore(STORE).delete(id);
		req.onsuccess = () => resolve();
		req.onerror = () => reject(req.error);
	});
}
var RATES = [
	8.99,
	9.99,
	10.99
];
function ProposalStudio() {
	const [draft, setDraft] = (0, import_react.useState)(() => blankDraft());
	const [saved, setSaved] = (0, import_react.useState)([]);
	const [status, setStatus] = (0, import_react.useState)("");
	const [dragging, setDragging] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		listProposals().then(setSaved).catch(() => setStatus("Saved proposals could not be loaded in this browser."));
	}, []);
	function patch(partial) {
		setDraft((current) => ({
			...current,
			...partial
		}));
	}
	async function onFile(file) {
		if (!file) return;
		setStatus("Reading Aurora export…");
		try {
			patch({ imageDataUrl: await fileToDesignUrl(file) });
			setStatus("This proposal now has its own Aurora image.");
		} catch (error) {
			setStatus(error instanceof Error ? error.message : "Could not use that image.");
		}
	}
	async function onSave() {
		const id = draft.id === "draft" ? crypto.randomUUID() : draft.id;
		const next = {
			...draft,
			id
		};
		const row = await saveProposal(next);
		setDraft(next);
		setSaved((list) => [row, ...list.filter((item) => item.id !== row.id)]);
		setStatus(`Saved ${next.clientName || "proposal"} with its Aurora image.`);
	}
	async function onDelete(id) {
		await deleteProposal(id);
		setSaved((list) => list.filter((item) => item.id !== id));
		if (draft.id === id) setDraft(blankDraft());
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-paper",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
			className: "no-print border-b border-line bg-panel text-panel-fg",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "font-display text-lg font-semibold tracking-wide",
					children: ["PUBLIC SERVICE ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-accent",
						children: "SOLAR"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-panel-muted",
					children: "Proposal studio · one Aurora design per job"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => {
							setDraft(blankDraft());
							setStatus("New proposal. Drop a fresh Aurora export.");
						},
						className: "rounded-lg border border-white/15 px-3 py-2 text-sm",
						children: "New"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => void onSave(),
						className: "inline-flex items-center gap-2 rounded-lg bg-accent px-3 py-2 text-sm font-semibold text-accent-ink",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Save, { className: "size-4" }), "Save"]
					})]
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-6 px-4 py-6 lg:grid-cols-[22rem_minmax(0,1fr)]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "no-print min-w-0 space-y-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "rounded-card border border-line bg-card p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-lg font-semibold",
								children: "Aurora design"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted",
								children: "Export the layout from Aurora CAD and drop it here. Saving stores that image with this proposal only."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								onDragOver: (event) => {
									event.preventDefault();
									setDragging(true);
								},
								onDragLeave: () => setDragging(false),
								onDrop: (event) => {
									event.preventDefault();
									setDragging(false);
									onFile(event.dataTransfer.files[0]);
								},
								className: `mt-3 flex cursor-pointer flex-col items-center gap-2 rounded-card border border-dashed p-3 text-center ${dragging ? "border-accent bg-paper" : "border-line"}`,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: designSrc(draft),
										alt: "",
										className: "h-36 w-full rounded-lg object-cover"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "inline-flex items-center gap-2 text-sm font-semibold text-accent",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImagePlus, { className: "size-4" }), draft.imageDataUrl ? "Replace Aurora image" : "Add Aurora image"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "file",
										accept: "image/png,image/jpeg,image/webp",
										className: "sr-only",
										onChange: (event) => void onFile(event.target.files?.[0])
									})
								]
							}),
							draft.imageDataUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "mt-2 text-sm text-muted underline",
								onClick: () => patch({ imageDataUrl: null }),
								children: "Use the sample roof until a new export is added"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "space-y-3 rounded-card border border-line bg-card p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-lg font-semibold",
								children: "Customer & site"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Client name",
								value: draft.clientName,
								onChange: (clientName) => patch({ clientName })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Phone",
								value: draft.clientPhone,
								onChange: (clientPhone) => patch({ clientPhone })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Email",
								value: draft.clientEmail,
								onChange: (clientEmail) => patch({ clientEmail })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Address",
								value: draft.address,
								onChange: (address) => patch({ address })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Date",
								value: draft.date,
								onChange: (date) => patch({ date })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Prepared by",
								value: draft.preparedBy,
								onChange: (preparedBy) => patch({ preparedBy })
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "space-y-3 rounded-card border border-line bg-card p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-lg font-semibold",
								children: "System"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Num, {
								label: "System size (kW)",
								value: draft.systemKw,
								onChange: (systemKw) => patch({ systemKw }),
								step: "0.001"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Num, {
								label: "Year-one production (kWh)",
								value: draft.yearOneKwh,
								onChange: (yearOneKwh) => patch({ yearOneKwh })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Num, {
								label: "Module count",
								value: draft.moduleCount,
								onChange: (moduleCount) => patch({ moduleCount })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Module model",
								value: draft.moduleModel,
								onChange: (moduleModel) => patch({ moduleModel })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Num, {
								label: "Inverter count",
								value: draft.inverterCount,
								onChange: (inverterCount) => patch({ inverterCount })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Inverter model",
								value: draft.inverterModel,
								onChange: (inverterModel) => patch({ inverterModel })
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "space-y-3 rounded-card border border-line bg-card p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-lg font-semibold",
								children: "Numbers"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "block text-sm font-medium",
								children: ["Product", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									value: draft.product,
									onChange: (event) => {
										const product = event.target.value;
										patch({
											product,
											termYears: product === "ownership" ? 20.5 : 25,
											apr: product === "cash" ? 0 : draft.apr || 8.99
										});
									},
									className: "mt-1 w-full rounded-lg border border-line bg-card px-3 py-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "propel",
											children: "PROPEL prepaid ESA"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "ownership",
											children: "Ownership financing"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "cash",
											children: "Cash"
										})
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Num, {
								label: "Price ($)",
								value: draft.price,
								onChange: (price) => patch({ price })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Num, {
								label: "Current monthly bill ($)",
								value: draft.monthlyBill,
								onChange: (monthlyBill) => patch({ monthlyBill }),
								step: "0.01"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Num, {
								label: "Remaining bill with solar ($)",
								value: draft.remainingBill,
								onChange: (remainingBill) => patch({ remainingBill }),
								step: "0.01"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Num, {
								label: "Monthly REC ($)",
								value: draft.monthlyRec,
								onChange: (monthlyRec) => patch({ monthlyRec }),
								step: "0.01"
							}),
							draft.product !== "cash" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex flex-wrap gap-2",
									children: RATES.map((rate) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => patch({
											apr: rate,
											paymentOverride: ""
										}),
										className: `rounded-full px-3 py-1 text-sm ${draft.apr === rate ? "bg-accent text-accent-ink" : "bg-paper text-ink"}`,
										children: [rate.toFixed(2), "%"]
									}, rate))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Num, {
									label: "APR (%)",
									value: draft.apr,
									onChange: (apr) => patch({
										apr,
										paymentOverride: ""
									}),
									step: "0.01"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Num, {
									label: "Term (years)",
									value: draft.termYears,
									onChange: (termYears) => patch({ termYears }),
									step: "0.5"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Manual monthly payment (optional)",
									value: draft.paymentOverride,
									onChange: (paymentOverride) => patch({ paymentOverride })
								})
							] })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "rounded-card border border-line bg-card p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "font-display text-lg font-semibold",
									children: "Saved proposals"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => window.print(),
									className: "inline-flex items-center gap-1 text-sm font-semibold text-accent",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, { className: "size-4" }), "Print"]
								})]
							}),
							status && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted",
								children: status
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "mt-3 space-y-2",
								children: [saved.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
									className: "text-sm text-muted",
									children: "Nothing saved yet. Each save keeps its own image."
								}), saved.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-center gap-2 rounded-lg border border-line p-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => setDraft(item),
										className: "flex min-w-0 flex-1 items-center gap-2 text-left",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: designSrc(item),
											alt: "",
											className: "size-12 rounded-md object-cover"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "min-w-0",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "block truncate font-medium",
												children: item.clientName || "Untitled"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "block truncate text-xs text-muted",
												children: item.address
											})]
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										"aria-label": `Delete ${item.clientName}`,
										onClick: () => void onDelete(item.id),
										className: "p-2 text-muted",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-4" })
									})]
								}, item.id))]
							})
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProposalDocument, { draft })]
		})]
	});
}
function Field({ label, value, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block text-sm font-medium",
		children: [label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			value,
			onChange: (event) => onChange(event.target.value),
			className: "mt-1 w-full rounded-lg border border-line bg-card px-3 py-2 font-normal"
		})]
	});
}
function Num({ label, value, onChange, step = "1" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block text-sm font-medium",
		children: [label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			type: "number",
			step,
			value: Number.isFinite(value) ? Number(value.toFixed(4)) : 0,
			onChange: (event) => onChange(event.target.value === "" ? 0 : Number(event.target.value)),
			className: "mt-1 w-full rounded-lg border border-line bg-card px-3 py-2 font-normal"
		})]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProposalStudio, {});
}
//#endregion
export { Home as component };
