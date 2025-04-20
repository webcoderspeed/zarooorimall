export default function TermsPage() {
  return (
    <main className="flex min-h-screen flex-col py-12 bg-white">
      <div className="container px-4 md:px-6 mx-auto max-w-4xl">
        <div className="flex flex-col items-center text-center space-y-4 mb-8">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tighter">Terms and Conditions</h1>
          <p className="text-gray-500">Last updated: {new Date().toLocaleDateString()}</p>
        </div>

        <div className="prose max-w-none">
          <h2>1. Introduction</h2>
          <p>
            Welcome to ZarooriMall. These Terms and Conditions govern your use of our website and services. By accessing
            or using our services, you agree to be bound by these Terms.
          </p>

          <h2>2. Digital Products</h2>
          <p>
            ZarooriMall offers a bundle of digital products for sale. These products are intended for personal use only.
          </p>

          <h2>3. Disclaimer</h2>
          <p>
            <strong>
              We do not claim that using our products will guarantee promotion of your business or prevent copyright
              issues. Results may vary based on individual effort, market conditions, and other factors.
            </strong>
          </p>

          <h2>4. Intellectual Property</h2>
          <p>
            All content included in our digital bundle is owned by ZarooriMall or its content suppliers and is protected
            by intellectual property laws. You may not reproduce, distribute, or create derivative works without our
            express consent.
          </p>

          <h2>5. Refund Policy</h2>
          <p>
            Due to the digital nature of our products, all sales are final and non-refundable. Please contact our
            support team if you experience any issues with your purchase.
          </p>

          <h2>6. Limitation of Liability</h2>
          <p>
            ZarooriMall shall not be liable for any indirect, incidental, special, consequential, or punitive damages
            resulting from your use or inability to use our products.
          </p>

          <h2>7. Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms at any time. Your continued use of our services after such
            modifications constitutes your acceptance of the revised Terms.
          </p>

          <h2>8. Contact Information</h2>
          <p>If you have any questions about these Terms, please contact us at support@example.com.</p>
        </div>
      </div>
    </main>
  )
}
