import React from 'react';
import Footer from './Footer';

export default function Privacy() {
  return (
    <div className="bg-[#FFFAE9]  text-gray-800">
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 md:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-center sm:text-left">
          Privacy Policy
        </h1>
        <p className="mb-4 text-center sm:text-left">Last updated: 01 September 2025</p>

        <p className="mb-4 text-justify">
          This Privacy Policy describes our policies and procedures on the collection, use, and disclosure of your information when you use the Service and tells you about your privacy rights and how the law protects you.
        </p>
        <p className="mb-4 text-justify">
          We use your Personal Data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this Privacy Policy.
        </p>

        <h2 className="text-2xl sm:text-3xl font-semibold mt-8 mb-4">Interpretation and Definitions</h2>

        <h3 className="text-xl sm:text-2xl font-semibold mt-6 mb-2">Interpretation</h3>
        <p className="mb-4 text-justify">
          Words with initial capital letters have meanings defined under the following conditions and shall have the same meaning whether in singular or plural form.
        </p>

        <h3 className="text-xl sm:text-2xl font-semibold mt-6 mb-2">Definitions</h3>
        <p className="mb-4 text-justify">For the purposes of this Privacy Policy:</p>
        <ul className="list-disc list-inside mb-4 space-y-1">
          <li><strong>Account:</strong> A unique account created for you to access our Service or parts of our Service.</li>
          <li><strong>Company:</strong> S&P Precision Farms Pvt Ltd, 329, Rohit Nagar, Phase 1, Bawadiya Kalan Main Road.</li>
          <li><strong>Cookies:</strong> Small files placed on your device to track browsing history and preferences.</li>
          <li><strong>Country:</strong> Madhya Pradesh, India</li>
          <li><strong>Device:</strong> Any device that can access the Service such as a computer, cellphone, or digital tablet.</li>
          <li><strong>Personal Data:</strong> Any information that relates to an identified or identifiable individual.</li>
          <li><strong>Service:</strong> Refers to the Website.</li>
          <li><strong>Service Provider:</strong> Any third-party company or individual processing data on behalf of the Company.</li>
          <li><strong>Third-party Social Media Service:</strong> Any social network or website used to log in or create an account to use the Service.</li>
          <li><strong>Usage Data:</strong> Data collected automatically from the Service usage.</li>
          <li><strong>Website:</strong> S&P Precision Farms Pvt Ltd, accessible from <a href="https://www.farm93.com" className="text-blue-600 underline">www.farm93.com</a></li>
          <li><strong>You:</strong> The individual accessing or using the Service.</li>
        </ul>

        <h2 className="text-2xl sm:text-3xl font-semibold mt-8 mb-4">Collecting and Using Your Personal Data</h2>

        <h3 className="text-xl sm:text-2xl font-semibold mt-6 mb-2">Types of Data Collected</h3>
        <p className="mb-4 text-justify"><strong>Personal Data:</strong> While using our Service, we may ask you to provide personally identifiable information such as:</p>
        <ul className="list-disc list-inside mb-4 space-y-1">
          <li>Email address</li>
          <li>First name and last name</li>
          <li>Phone number</li>
          <li>Address, State, Province, ZIP/Postal code, City</li>
          <li>Usage Data</li>
        </ul>

        <p className="mb-4 text-justify"><strong>Usage Data:</strong> Collected automatically when using the Service, including IP address, browser type, pages visited, time spent, device identifiers, and other diagnostic data.</p>

        <h3 className="text-xl sm:text-2xl font-semibold mt-6 mb-2">Tracking Technologies and Cookies</h3>
        <p className="mb-4 text-justify">
          We use Cookies, Flash Cookies, Web Beacons, and other tracking technologies to track activity on our Service and store information to improve and analyze our Service.
        </p>
        <ul className="list-disc list-inside mb-4 space-y-1">
          <li><strong>Necessary / Essential Cookies:</strong> Session Cookies essential for the Service.</li>
          <li><strong>Cookies Policy / Notice Acceptance Cookies:</strong> Persistent Cookies identifying if users accepted cookies.</li>
          <li><strong>Functionality Cookies:</strong> Persistent Cookies remembering user preferences.</li>
        </ul>

        <h3 className="text-xl sm:text-2xl font-semibold mt-6 mb-2">Use of Your Personal Data</h3>
        <ul className="list-disc list-inside mb-4 space-y-1">
          <li>Provide and maintain our Service</li>
          <li>Manage Your Account</li>
          <li>Performance of a contract</li>
          <li>Contact You for updates and communication</li>
          <li>Provide news, offers, and information</li>
          <li>Manage Your requests</li>
          <li>Business transfers</li>
          <li>Other purposes like analytics and improvement</li>
        </ul>

        <h3 className="text-xl sm:text-2xl font-semibold mt-6 mb-2">Retention of Your Personal Data</h3>
        <p className="mb-4 text-justify">
          Personal Data is retained only as long as necessary for legal obligations, disputes, and enforcing agreements.
        </p>

        <h3 className="text-xl sm:text-2xl font-semibold mt-6 mb-2">Security of Your Personal Data</h3>
        <p className="mb-4 text-justify">
          We use commercially acceptable means to protect Your Personal Data but cannot guarantee absolute security.
        </p>

        <h3 className="text-xl sm:text-2xl font-semibold mt-6 mb-2">Children's Privacy</h3>
        <p className="mb-4 text-justify">
          Our Service does not address anyone under 13. We do not knowingly collect data from children under 13. If discovered, we remove it promptly.
        </p>

        <h3 className="text-xl sm:text-2xl font-semibold mt-6 mb-2">Contact Us</h3>
        <p className="mb-4 text-justify">
          If you have any questions about this Privacy Policy, contact us via email: <a href="mailto:contactfarm93@gmail.com" className="text-blue-600 underline">contactfarm93@gmail.com</a>
        </p>
      </div>
      <Footer/>
    </div>
  );
}
