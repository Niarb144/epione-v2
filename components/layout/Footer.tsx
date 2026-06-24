import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <h3 className="font-heading text-xl font-bold">
              Epione Health
            </h3>

            <p className="mt-4 text-sm text-slate-600">
              Advancing Africa's future through sustainable access
              to health products and technologies.
            </p>
          </div>

          <div>
            <h4 className="font-semibold">
              Company
            </h4>

            <div className="mt-4 flex flex-col gap-2">
              <Link href="/about">About</Link>
              <Link href="/services">Services</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold">
              Products
            </h4>

            <div className="mt-4 flex flex-col gap-2">
              <Link href="/products">
                Pharmaceuticals
              </Link>

              <Link href="/products">
                Medical Devices
              </Link>

              <Link href="/products">
                Personal Care
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold">
              Contact
            </h4>

            <div className="mt-4 space-y-2 text-sm text-slate-600">
              <p>Nairobi, Kenya</p>
              <p>sales@epione-health.com</p>
              <p>+254 746 246 801</p>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-slate-200 pt-8 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Epione Health.
          All rights reserved.
        </div>
      </div>
    </footer>
  );
}