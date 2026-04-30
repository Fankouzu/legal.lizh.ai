export const metadata = {
  title: "Terms of Use | Lychee AI Legal",
};

export default function TermsPage() {
  return (
    <div className="section-stack">
      <div className="card">
        <div className="meta">Last updated: April 2026</div>
        <h1>Terms of Use (EULA)</h1>
        <p>
          These Terms of Use govern your use of the Lychee AI mobile application
          and related services provided by Lychee AI. By using the app, you agree
          to these terms.
        </p>
      </div>

      <div className="policy">
        <section>
          <h2>1. Acceptance of Terms</h2>
          <p>
            By downloading, installing, or using the Lychee AI app, you agree to
            be bound by these Terms of Use and our{" "}
            <a href="/privacy">Privacy Policy</a>. If you do not agree, do not
            use the app.
          </p>
        </section>

        <section>
          <h2>2. Description of Service</h2>
          <p>
            Lychee AI is an AI-powered image and video creation tool. The app
            allows you to generate images from text prompts, transform existing
            images, create short videos from text or images, and manage your
            creative works. Generation requests are processed by external AI
            model services.
          </p>
        </section>

        <section>
          <h2>3. Account Requirements</h2>
          <p>
            You must create an account to use the service. You are responsible
            for maintaining the confidentiality of your account credentials and
            for all activities that occur under your account. You must be at
            least 13 years of age to use the service.
          </p>
        </section>

        <section>
          <h2>4. Subscriptions and Payments</h2>
          <p>
            Lychee AI offers auto-renewable subscriptions through Apple In-App
            Purchase. The following terms apply to subscriptions:
          </p>
          <ul>
            <li>
              <strong>Title of auto-renewing subscription:</strong> Lychee AI
              Pro (as displayed on the subscription screen in the app)
            </li>
            <li>
              <strong>Length of subscription:</strong> 1 month (monthly) or 12
              months (annual), as selected at purchase
            </li>
            <li>
              <strong>Price:</strong> Pricing is displayed on the subscription
              purchase screen before confirmation and may vary by region
            </li>
            <li>
              <strong>Payment:</strong> Charged to your Apple ID account at
              confirmation of purchase
            </li>
            <li>
              <strong>Auto-renewal:</strong> Subscription automatically renews
              unless auto-renew is turned off at least 24 hours before the end
              of the current period
            </li>
            <li>
              <strong>Renewal charge:</strong> Account will be charged for
              renewal within 24 hours prior to the end of the current period
            </li>
            <li>
              <strong>Cancellation:</strong> You may cancel your subscription at
              any time through your Apple ID account settings. Cancellation takes
              effect at the end of the current billing period
            </li>
            <li>
              <strong>Restore purchases:</strong> You can restore previously
              purchased subscriptions from the subscription screen in the app
            </li>
          </ul>
        </section>

        <section>
          <h2>5. User-Generated Content</h2>
          <p>
            You retain ownership of the prompts you provide and the creative
            works you generate. You are responsible for ensuring that your prompts
            and use of generated content comply with applicable laws. You must
            not use the service to generate content that is illegal, harmful,
            threatening, abusive, defamatory, or otherwise objectionable.
          </p>
        </section>

        <section>
          <h2>6. Data Sharing with Model Services</h2>
          <p>
            When you submit a generation request, your prompt, reference media,
            and generation parameters are sent to external AI model services to
            fulfill the request. The app presents a one-time consent sheet
            explaining this data sharing before your first generation. By
            proceeding with a generation, you consent to this data sharing.
          </p>
        </section>

        <section>
          <h2>7. Content Moderation</h2>
          <p>
            Lychee AI uses moderated model providers with content restrictions.
            The app does not allow open public content distribution. We reserve
            the right to refuse or remove content that violates these terms or
            our content policies.
          </p>
        </section>

        <section>
          <h2>8. Intellectual Property</h2>
          <p>
            The app, its design, logos, and original content are the property of
            Lychee AI and are protected by intellectual property laws. You may
            not copy, modify, distribute, or create derivative works from the
            app without our prior written consent.
          </p>
        </section>

        <section>
          <h2>9. Disclaimer of Warranties</h2>
          <p>
            The app is provided &quot;as is&quot; without warranties of any kind,
            either express or implied, including but not limited to implied
            warranties of merchantability, fitness for a particular purpose, and
            non-infringement. We do not guarantee that the app will be
            error-free, uninterrupted, or that generation results will meet
            your expectations.
          </p>
        </section>

        <section>
          <h2>10. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, Lychee AI shall not be
            liable for any indirect, incidental, special, consequential, or
            punitive damages arising out of your use of the app. Our total
            liability shall not exceed the amount you paid for the service in
            the twelve months preceding the claim.
          </p>
        </section>

        <section>
          <h2>11. Account Deletion</h2>
          <p>
            You may delete your account at any time from within the app by
            navigating to Settings &gt; Account Center &gt; Delete Account.
            Upon deletion, your authentication identity and associated active
            service records are removed from our systems.
          </p>
        </section>

        <section>
          <h2>12. Termination</h2>
          <p>
            We may suspend or terminate your access to the service at any time
            for violation of these terms or for any other reason at our
            discretion.
          </p>
        </section>

        <section>
          <h2>13. Changes to Terms</h2>
          <p>
            We may update these Terms of Use from time to time. We will notify
            you of material changes through the app or by updating the &quot;Last
            updated&quot; date on this page. Continued use of the app after changes
            constitutes acceptance of the revised terms.
          </p>
        </section>

        <section>
          <h2>14. Governing Law</h2>
          <p>
            These terms shall be governed by and construed in accordance with
            applicable laws, without regard to conflict of law principles.
          </p>
        </section>

        <section>
          <h2>15. Contact</h2>
          <p>
            For questions about these terms, contact{" "}
            <a href="mailto:support@lizh.ai">support@lizh.ai</a>.
          </p>
        </section>

        <section>
          <h2>Links</h2>
          <ul>
            <li>
              <a href="/privacy">Privacy Policy</a>
            </li>
            <li>
              <a href="/support">Support</a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
