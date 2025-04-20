export default function PrivacyPage() {
  return (
    <main className="flex min-h-screen flex-col py-12 bg-white">
      <div className="container px-4 md:px-6 mx-auto max-w-4xl">
        <div className="flex flex-col items-center text-center space-y-4 mb-8">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tighter">Privacy Policy</h1>
          <p className="text-gray-500">Last updated: {new Date().toLocaleDateString()}</p>
        </div>

        <div className="prose max-w-none">
          <h2>1. Introduction</h2>
          <p>
            At ZarooriMall, we respect your privacy and are committed to protecting your personal data. This Privacy
            Policy explains how we collect, use, and safeguard your information when you visit our website or purchase
            our digital products.
          </p>

          <h2>2. Information We Collect</h2>
          <p>
            We may collect personal information such as your name, email address, and payment information when you make
            a purchase. We also collect usage data through cookies and similar technologies.
          </p>

          <h2>3. How We Use Your Information</h2>
          <p>
            We use your information to process transactions, provide customer support, and send you important updates
            about your purchase. We may also use your data to improve our products and services.
          </p>

          <h2>4. Disclaimer</h2>
          <p>
            <strong>
              We do not claim that using our products will guarantee promotion of your business or prevent copyright
              issues. Results may vary based on individual effort, market conditions, and other factors.
            </strong>
          </p>

          <h2>5. Data Security</h2>
          <p>
            We implement appropriate security measures to protect your personal information from unauthorized access,
            alteration, disclosure, or destruction.
          </p>

          <h2>6. Third-Party Services</h2>
          <p>
            We may use third-party services to process payments and deliver digital products. These services have their
            own privacy policies and we recommend reviewing them.
          </p>

          <h2>7. Your Rights</h2>
          <p>
            Depending on your location, you may have rights regarding your personal data, including the right to access,
            correct, or delete your information.
          </p>

          <h2>8. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new
            policy on this page.
          </p>

          <h2>9. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at support@zaroorimall.com.</p>
        </div>
      </div>
    </main>
  )
}
