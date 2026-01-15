import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | WiFi QR Generator',
  description: 'Our privacy policy explains how we protect your data. WiFi QR codes are generated locally in your browser - your credentials never leave your device.',
};

export default function PrivacyPage() {
  return (
    <div className="py-8 max-w-3xl mx-auto">
      <div className="mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Privacy Policy
        </h1>
        <p className="text-gray-600">
          Last updated: January 2025
        </p>
      </div>

      <div className="prose prose-gray max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Data Stays on Your Device</h2>
          <p className="text-gray-600 mb-4">
            WiFi QR Code Generator is built with privacy-first principles. When you create a WiFi QR code:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li>All QR codes are generated <strong>locally in your browser</strong></li>
            <li>Your WiFi network name and password are <strong>never sent to our servers</strong></li>
            <li>We do not store, log, or collect any information you enter</li>
            <li>No tracking cookies or analytics that identify you personally</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">URL-Based Print Feature</h2>
          <p className="text-gray-600 mb-4">
            When you use the &quot;Print&quot; feature, your WiFi credentials are encoded into the URL as a base64 string.
            This allows the print page to display your QR code without server-side processing.
          </p>
          <p className="text-gray-600">
            <strong>Important:</strong> This URL is stored in your browser&apos;s history and may be visible if shared.
            Only share print URLs with people you trust.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Services</h2>
          <p className="text-gray-600 mb-4">
            Our website is hosted on Cloudflare Pages, which may collect standard server logs including:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li>IP addresses (anonymized by Cloudflare)</li>
            <li>Request timestamps</li>
            <li>Browser and device information</li>
          </ul>
          <p className="text-gray-600 mt-4">
            We do not have access to or control over this data collection. Please refer to{' '}
            <a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              Cloudflare&apos;s Privacy Policy
            </a> for more information.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies</h2>
          <p className="text-gray-600 mb-4">
            We do not use any first-party cookies. The website may use essential cookies required for the site to function properly.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Children&apos;s Privacy</h2>
          <p className="text-gray-600">
            Our service is not directed toward children under 13. We do not knowingly collect personal information from children.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Policy</h2>
          <p className="text-gray-600">
            We may update this privacy policy from time to time. Any changes will be posted on this page with an updated revision date.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-gray-600">
            If you have any questions about this privacy policy, please{' '}
            <a href="mailto:privacy@wifi-qr-code.online" className="text-blue-600 hover:underline">
              contact us
            </a>.
          </p>
        </section>
      </div>
    </div>
  );
}
