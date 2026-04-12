import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <span className="eyebrow">Legal and support</span>
        <h1>Lychee AI public policy pages</h1>
        <p>
          This site hosts the public URLs used by Lychee AI in App Store Connect for privacy policy
          and support references.
        </p>
      </section>

      <section className="grid">
        <Link className="card" href="/privacy">
          <h2>Privacy Policy</h2>
          <p>How account data, prompts, reference media, generated assets, purchases, and diagnostics are handled.</p>
        </Link>
        <Link className="card" href="/support">
          <h2>Support</h2>
          <p>Contact details, account deletion help, subscription support, and app review assistance.</p>
        </Link>
      </section>
    </>
  );
}
