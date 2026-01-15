import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | WiFi QR Generator',
  description: 'Terms of Service for WiFi QR Code Generator - Free WiFi QR code generation tool.',
};

export default function TermsPage() {
  return (
    <div className="py-8 max-w-3xl mx-auto">
      <div className="mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Terms of Service
        </h1>
        <p className="text-gray-600">
          Last updated: January 2025
        </p>
      </div>

      <div className="prose prose-gray max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Acceptance of Terms</h2>
          <p className="text-gray-600">
            By accessing and using WiFi QR Code Generator, you accept and agree to be bound by these Terms of Service.
            If you do not agree to these terms, please do not use our service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Service Description</h2>
          <p className="text-gray-600 mb-4">
            WiFi QR Code Generator is a free online tool that allows users to create QR codes for WiFi networks.
            The service is provided &quot;as is&quot; without any warranties, expressed or implied.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Use of Service</h2>
          <p className="text-gray-600 mb-4">
            You agree to use WiFi QR Code Generator only for lawful purposes and in accordance with these Terms.
            You are solely responsible for:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li>The accuracy of WiFi credentials you enter</li>
            <li>Ensuring you have authorization to create QR codes for the networks you use</li>
            <li>Any consequences resulting from the use of generated QR codes</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Privacy</h2>
          <p className="text-gray-600 mb-4">
            Your use of our service is also governed by our{' '}
            <a href="/privacy" className="text-blue-600 hover:underline">
              Privacy Policy
            </a>, which explains how we protect your data.
          </p>
          <p className="text-gray-600">
            Importantly, WiFi credentials are processed entirely in your browser and are never sent to our servers.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Intellectual Property</h2>
          <p className="text-gray-600 mb-4">
            You retain all ownership rights to the WiFi credentials you enter and the QR codes you generate.
          </p>
          <p className="text-gray-600">
            The WiFi QR Code Generator name, logo, and associated branding are the property of WiFi QR Generator
            and may not be used without written permission.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Disclaimer of Warranties</h2>
          <p className="text-gray-600">
            THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND,
            EITHER EXPRESS OR IMPLIED. WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED,
            TIMELY, SECURE, OR ERROR-FREE.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
          <p className="text-gray-600 mb-4">
            In no event shall WiFi QR Generator be liable for any indirect, incidental, special,
            consequential, or punitive damages, including without limitation, loss of profits, data,
            or business opportunities, arising out of or related to your use of the service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to Terms</h2>
          <p className="text-gray-600">
            We reserve the right to modify these Terms at any time. Changes will be effective
            immediately upon posting to this page. Your continued use of the service after any
            changes constitutes acceptance of the new Terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
          <p className="text-gray-600">
            If you have any questions about these Terms, please{' '}
            <a href="mailto:terms@wifi-qr-code.online" className="text-blue-600 hover:underline">
              contact us
            </a>.
          </p>
        </section>
      </div>
    </div>
  );
}
