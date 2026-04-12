export const metadata = {
  title: "Support | Lychee AI Legal",
};

export default function SupportPage() {
  return (
    <div className="section-stack">
      <div className="card">
        <div className="meta">Support for Lychee AI users and App Review</div>
        <h1>Support</h1>
        <p>
          Use the channels below for account, subscription, deletion, and app review support.
        </p>
      </div>

      <ul className="support-list">
        <li className="support-item">
          <h2>General support</h2>
          <p>Email: <a href="mailto:support@lizh.ai">support@lizh.ai</a></p>
        </li>
        <li className="support-item">
          <h2>Account deletion requests</h2>
          <p>
            The preferred path is to delete the account from inside the app. If you cannot access the
            account center, email support and include the email address used for registration.
          </p>
        </li>
        <li className="support-item">
          <h2>Subscription help</h2>
          <p>
            Subscription purchases, renewals, cancellations, and restores are handled through the App
            Store. If your subscription state looks incorrect, contact support with your App Store
            transaction details.
          </p>
        </li>
        <li className="support-item">
          <h2>App Review contact</h2>
          <p>
            For App Store review follow-up, contact <a href="mailto:support@lizh.ai">support@lizh.ai</a> and
            include your review reference number.
          </p>
        </li>
      </ul>
    </div>
  );
}
