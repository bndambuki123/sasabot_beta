import React from 'react';

export const PrivacyPolicy = () => {
  return (
    <div className="pt-20 pb-16">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">Privacy Policy</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-8">Effective Date: 15 May 2025</p>
          
          <p className="mb-6">This Privacy Policy describes how Sasabot™ ("we", "our", or "us") collects, uses, shares, and protects your personal information when you use our website and related services (collectively, the "Services").</p>
          
          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">1. Information We Collect</h2>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3">a) Information You Provide to Us Directly</h3>
          <ul className="list-disc pl-6 mb-4 text-gray-600">
            <li>Registration Information: Name, email address, phone number, business name, and other contact details.</li>
            <li>Account Credentials: Username, passwords, authentication tokens.</li>
            <li>Payment Information: Billing name, billing address, and credit/debit card or MPESA details.</li>
            <li>Communication Content: Messages, support inquiries, feedback, or responses to surveys.</li>
          </ul>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3">b) Information We Collect Automatically</h3>
          <ul className="list-disc pl-6 mb-4 text-gray-600">
            <li>Usage Data: Pages visited, time spent, features used, clicks, and browsing behavior.</li>
            <li>Device Data: IP address, browser type, device identifiers, operating system, and settings.</li>
            <li>Cookies and Similar Technologies: We use cookies and web beacons to personalize your experience.</li>
          </ul>
          
          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">2. How We Use Your Information</h2>
          <ul className="list-disc pl-6 mb-4 text-gray-600">
            <li>To Provide and Improve the Services</li>
            <li>Customer Support</li>
            <li>Billing and Payments</li>
            <li>Communication</li>
            <li>Analytics and Research</li>
            <li>Legal Compliance</li>
          </ul>
          
          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">3. Data Storage and Retention</h2>
          <p className="mb-6 text-gray-600">Your personal data is stored securely on cloud servers. We retain your data only for as long as necessary to fulfill the purposes outlined in this policy or as required by law.</p>
          
          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">4. Your Rights and Choices</h2>
          <p className="mb-4 text-gray-600">You have the right to:</p>
          <ul className="list-disc pl-6 mb-4 text-gray-600">
            <li>Access a copy of the personal data we hold about you</li>
            <li>Correct or update inaccurate data</li>
            <li>Request deletion (right to be forgotten)</li>
            <li>Restrict or object to certain types of data processing</li>
            <li>Withdraw consent at any time</li>
            <li>Receive your data in a portable format</li>
          </ul>
          
          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">5. Security Measures</h2>
          <p className="mb-6 text-gray-600">We implement robust administrative, technical, and physical safeguards to protect your personal data, including encryption, firewalls, and secure access controls.</p>
          
          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">6. Contact Us</h2>
          <p className="mb-6 text-gray-600">
            If you have questions, concerns, or complaints about this Privacy Policy or our practices, contact us at:
            <br />
            <a href="mailto:privacy@sasabot.ai" className="text-blue-600 hover:text-blue-700">privacy@sasabot.ai</a>
          </p>
        </div>
      </div>
    </div>
  );
};