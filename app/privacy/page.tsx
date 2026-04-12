export const metadata = {
  title: "Privacy Policy | Lychee AI Legal",
};

export default function PrivacyPage() {
  return (
    <div className="section-stack">
      <div className="card">
        <div className="meta">Last updated: April 2026</div>
        <h1>Privacy Policy</h1>
        <p>
          Lychee AI uses account information, prompts, reference media, generated assets, purchase
          status, and technical diagnostics to operate the service.
        </p>
      </div>

      <div className="policy">
        <section>
          <h2>Information we use</h2>
          <p>
            We may process account identity, email address, uploaded images or videos, prompts,
            generated outputs, subscription state, credit records, and diagnostic information needed
            to investigate failures and keep the service stable.
          </p>
        </section>

        <section>
          <h2>How we use it</h2>
          <p>
            We use this information to authenticate users, process image and video generations,
            deliver generated assets, restore purchases, prevent abuse, and improve service
            reliability.
          </p>
        </section>

        <section>
          <h2>External model services</h2>
          <p>
            When you generate content, Lychee AI may send your prompt, reference media, and
            generation parameters such as resolution, aspect ratio, or duration to external model
            services, including Seedream and Seedance generation providers, in order to fulfill the
            request.
          </p>
        </section>

        <section>
          <h2>Sharing</h2>
          <p>
            We share data only with the providers required to operate the service, such as
            authentication, storage, content delivery, subscription, and AI generation vendors.
          </p>
        </section>

        <section>
          <h2>Retention and deletion</h2>
          <p>
            We retain account and generation data only for as long as needed to operate the service,
            support purchases, investigate failures, and comply with legal obligations. You can
            request account deletion from inside the app. Deleting an account removes the app auth
            identity and associated active service records.
          </p>
        </section>

        <section>
          <h2>Contact</h2>
          <p>
            For privacy or account questions, contact <a href="mailto:support@lizh.ai">support@lizh.ai</a>.
          </p>
        </section>
      </div>
    </div>
  );
}
