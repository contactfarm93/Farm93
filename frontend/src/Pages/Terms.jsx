import React from 'react';
import Footer from './Footer';

export default function Terms() {
  return (
    <div className="bg-[#FFFAE9] text-gray-800">
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 md:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-center sm:text-left">
          Terms and Conditions
        </h1>

        <p className="mb-4 text-justify">
          These terms and conditions outline the rules and regulations for the use of S&P Precision Farms Pvt. Ltd.'s Website, located at <a href="https://www.Farm93.com" className="text-blue-600 underline">www.Farm93.com</a>.
        </p>
        <p className="mb-4 text-justify">
          By accessing this website, we assume you accept these terms and conditions. Do not continue to use www.Farm93.com if you do not agree to all of the terms and conditions stated on this page.
        </p>

        <h2 className="text-2xl sm:text-3xl font-semibold mt-8 mb-4">Terminology</h2>
        <p className="mb-4 text-justify">
          The following terminology applies to these Terms and Conditions, Privacy Statement, and Disclaimer Notice and all Agreements: "Client", "You", and "Your" refers to you, the person accessing this website. "The Company", "Ourselves", "We", "Our", and "Us" refers to our Company. "Party", "Parties", or "Us" refers to both the Client and ourselves.
        </p>

        <h2 className="text-2xl sm:text-3xl font-semibold mt-8 mb-4">Cookies</h2>
        <p className="mb-4 text-justify">
          We employ the use of cookies. By accessing www.Farm93.com, you agree to use cookies in accordance with our <a href="/privacy" className="text-blue-600 underline">Privacy Policy</a>.
        </p>
        <p className="mb-4 text-justify">
          Cookies are used to retrieve user details, enable functionality, and improve user experience. Some affiliates or advertising partners may also use cookies.
        </p>

        <h2 className="text-2xl sm:text-3xl font-semibold mt-8 mb-4">License</h2>
        <p className="mb-4 text-justify">
          Unless otherwise stated, S&P Precision Farms Pvt. Ltd. and/or its licensors own the intellectual property rights for all material on www.Farm93.com. All rights reserved. You may access this for personal use subject to restrictions.
        </p>
        <ul className="list-disc list-inside mb-4 space-y-1">
          <li>Do not republish material from www.Farm93.com</li>
          <li>Do not sell, rent, or sub-license material from www.Farm93.com</li>
          <li>Do not reproduce, duplicate, or copy material from www.Farm93.com</li>
          <li>Do not redistribute content from www.Farm93.com</li>
          <li>Do not reproduce or duplicate logos from www.Farm93.com</li>
        </ul>

        <h2 className="text-2xl sm:text-3xl font-semibold mt-8 mb-4">User Comments</h2>
        <p className="mb-4 text-justify">
          Users may post comments on certain areas of the website. Comments reflect the views of the user, not the Company. S&P Precision Farms Pvt. Ltd. reserves the right to monitor and remove inappropriate comments.
        </p>
        <ul className="list-disc list-inside mb-4 space-y-1">
          <li>Ensure you have all necessary licenses to post comments</li>
          <li>Do not violate intellectual property or privacy rights</li>
          <li>Do not post defamatory, offensive, or unlawful content</li>
        </ul>
        <p className="mb-4 text-justify">
          By posting, you grant S&P Precision Farms Pvt. Ltd. a non-exclusive license to use, reproduce, edit, and authorize others to use your comments.
        </p>

        <h2 className="text-2xl sm:text-3xl font-semibold mt-8 mb-4">Hyperlinking to our Content</h2>
        <p className="mb-4 text-justify">
          Certain organizations may link to our website without prior approval, including government agencies, search engines, and accredited businesses. Other link requests may be approved at our discretion.
        </p>

        <h2 className="text-2xl sm:text-3xl font-semibold mt-8 mb-4">iFrames</h2>
        <p className="mb-4 text-justify">
          You may not create frames around our webpages that alter the visual presentation without prior written permission.
        </p>

        <h2 className="text-2xl sm:text-3xl font-semibold mt-8 mb-4">Content Liability</h2>
        <p className="mb-4 text-justify">
          We are not responsible for content appearing on your website. You agree to defend us against claims arising from your website.
        </p>

        <h2 className="text-2xl sm:text-3xl font-semibold mt-8 mb-4">Your Privacy</h2>
        <p className="mb-4 text-justify">
          Please review our <a href="/privacy" className="text-blue-600 underline">Privacy Policy</a>.
        </p>

        <h2 className="text-2xl sm:text-3xl font-semibold mt-8 mb-4">Reservation of Rights</h2>
        <p className="mb-4 text-justify">
          We reserve the right to request removal of links, amend terms, and ensure compliance. Continuous linking implies agreement to these terms.
        </p>

        <h2 className="text-2xl sm:text-3xl font-semibold mt-8 mb-4">Disclaimer</h2>
        <p className="mb-4 text-justify">
          To the maximum extent permitted by law, we exclude all warranties relating to the website. This includes limitations on liability for death, personal injury, fraud, or any loss from using the website.
        </p>
      </div>
      <Footer/>
    </div>
  );
}
