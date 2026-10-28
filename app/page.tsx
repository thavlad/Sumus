import Link from "next/link";

const categories = [
  { name: "Phones", href: "/category/phones/" },
  { name: "TVs and Audio", href: "/category/tv-audio/" },
  { name: "Home Appliances", href: "/category/home-appliances/" },
  { name: "Power and Solar", href: "/category/power-solar/" },
  { name: "Smart Home", href: "/category/smart-home/" },
  { name: "Accessories", href: "/category/accessories/" },
];

const trustPoints = [
  "Genuine products",
  "Nationwide delivery",
  "Warranty on every item",
  "After-sales support",
  "Secure payment",
];

// Placeholder details. Replace them with your real store information.
const STORE_NAME = "Store";
const PHONE_DISPLAY = "+234 000 000 0000";
const PHONE_LINK = "tel:+2340000000000";

export default function HomePage() {
  return (
    <>
      {/* Temporary header. The full header with search and menu comes in Step 4. */}
      <header className="border-b border-slate-200">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <Link href="/" className="text-xl font-bold text-blue-700">
            {STORE_NAME}
          </Link>
          <a href={PHONE_LINK} className="text-sm font-medium text-slate-700">
            {PHONE_DISPLAY}
          </a>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="bg-blue-700 text-white">
          <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-100">
              Genuine products, delivered
            </p>
            <h1 className="mt-3 max-w-2xl text-3xl font-bold leading-tight md:text-5xl">
              Phones, electronics and home appliances for Nigeria
            </h1>
            <p className="mt-4 max-w-xl text-blue-50">
              Lagos delivery in 1 to 3 working days. Nationwide delivery in 2 to 7 working days.
            </p>
            <Link
              href="/shop/"
              className="mt-8 inline-block rounded-lg bg-white px-6 py-3 font-semibold text-blue-700 hover:bg-blue-50"
            >
              Shop now
            </Link>
          </div>
        </section>

        {/* Categories */}
        <section className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-2xl font-bold">Shop by category</h2>
          <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3">
            {categories.map((category) => (
              <Link
                key={category.href}
                href={category.href}
                className="rounded-xl border border-slate-200 p-5 font-medium hover:border-blue-600 hover:text-blue-700"
              >
                {category.name}
              </Link>
            ))}
          </div>
        </section>

        {/* Trust */}
        <section className="bg-slate-50">
          <div className="mx-auto grid max-w-6xl gap-4 px-4 py-12 sm:grid-cols-2 lg:grid-cols-5">
            {trustPoints.map((point) => (
              <p key={point} className="font-medium text-slate-800">
                <span className="mr-2 text-blue-700">✓</span>
                {point}
              </p>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-slate-600">
          © {new Date().getFullYear()} {STORE_NAME}. All rights reserved.
        </div>
      </footer>
    </>
  );
}
