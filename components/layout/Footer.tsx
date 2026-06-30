import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      {/* Full-width map */}
      <div className="relative h-80 w-full sm:h-96">
        <iframe
          title="Epione Health location"
          src="https://maps.google.com/maps?width=100%25&amp;height=370&amp;hl=en&amp;q=jasmine%20centre,%20pio%20gama%20road,%20westlands%20nairobi,%20pio%20gama%20road+(Epione%20Health)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          className="absolute inset-0 h-full w-full grayscale-[35%] contrast-[1.05]"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

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

            <div className="mt-4 space-y-4 text-sm text-slate-600">
              <div>
                <p className="font-medium text-slate-700">
                  Office Address
                </p>
                <p>123 Riverside Drive</p>
                <p>Nairobi, Kenya</p>
              </div>

              <div>
                <p className="font-medium text-slate-700">
                  Postal Address
                </p>
                <p>P.O. Box 12345-00100</p>
                <p>Nairobi, Kenya</p>
              </div>

              <div className="space-y-1 pt-1">
                <p>sales@epione-health.com</p>
                <p>+254 746 246 801</p>
              </div>
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