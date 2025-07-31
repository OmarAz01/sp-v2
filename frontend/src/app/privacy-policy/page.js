import Link from 'next/link'

export default function PrivacyPolicy() {
  return (
    <div className='max-w-3xl mx-auto px-4 py-12 sm:mb-16'>
      <h1 className='text-3xl font-bold mb-6 text-textPrimary'>Privacy Policy</h1>
      <p className='mb-4 text-textSecondary'>Last updated: {new Date().toLocaleDateString()}</p>
      <h2 className='text-xl font-semibold mb-2 text-textPrimary'>1. Introduction</h2>
      <p className='mb-4 text-textSecondary'>
        SupplementPicks (“the Site”) is committed to protecting your privacy. This Privacy Policy
        explains how we collect, use, and safeguard your information when you use our Site.
      </p>
      <h2 className='text-xl font-semibold mb-2 text-textPrimary'>2. Information We Collect</h2>
      <p className='mb-4 text-textSecondary'>
        We do not collect personal information unless you voluntarily provide it (e.g., by
        contacting us). We may collect non-personal information such as browser type, device
        information, and usage data to improve the Site.
      </p>
      <h2 className='text-xl font-semibold mb-2 text-textPrimary'>3. Use of Information</h2>
      <p className='mb-4 text-textSecondary'>
        Non-personal information is used to analyze trends, administer the Site, and improve user
        experience. Personal information, if provided, will only be used to respond to your
        inquiries.
      </p>
      <h2 className='text-xl font-semibold mb-2 text-textPrimary'>4. Cookies</h2>
      <p className='mb-4 text-textSecondary'>
        The Site may use cookies or similar technologies to enhance your experience. You can disable
        cookies in your browser settings.
      </p>
      <h2 className='text-xl font-semibold mb-2 text-textPrimary'>5. Third-Party Links</h2>
      <p className='mb-4 text-textSecondary'>
        SupplementPicks.com participates in affiliate programs As a result, when you click on
        certain links on our website, you may be directed to Amazon.com or other sites, and we may
        earn a commission on qualifying purchases made through those links. All links to products
        are affiliate links. We may receive a commission for purchases made through these links.
        Note that these external sites are not operated by us. Therefore, we strongly advise you to
        review the Privacy Policy of these websites. We have no control over, and assume no
        responsibility for the content, privacy policies, or practices of any third-party sites or
        services.
      </p>
      <h2 className='text-xl font-semibold mb-2 text-textPrimary'>6. Amazon Services LLC</h2>
      <p className='mb-4 text-textSecondary'>
        CERTAIN CONTENT THAT APPEARS ON THIS SITE COMES FROM AMAZON SERVICES LLC. THIS CONTENT IS
        PROVIDED AS IS AND IS SUBJECT TO CHANGE OR REMOVAL AT ANY TIME. Please refer to Amazon.coms
        Privacy Policy for information about how they collect, use, and protect user data.
      </p>
      <h2 className='text-xl font-semibold mb-2 text-textPrimary'>7. Data Security</h2>
      <p className='mb-4 text-textSecondary'>
        We implement reasonable security measures to protect your information. However, no method of
        transmission over the Internet or electronic storage is 100% secure.
      </p>
      <h2 className='text-xl font-semibold mb-2 text-textPrimary'>8. Changes to This Policy</h2>
      <p className='mb-4 text-textSecondary'>
        We may update this Privacy Policy from time to time. Changes will be posted on this page
        with an updated effective date.
      </p>
      <h2 className='text-xl font-semibold mb-2 text-textPrimary'>9. Contact</h2>
      <p className='mb-4 text-textSecondary'>
        If you have any questions about this Privacy Policy, please email{' '}
        <Link href='mailto:omaralzoubi001@gmail.com' className='text-brandName underline'>
          omaralzoubi001@gmail.com
        </Link>
        .
      </p>
    </div>
  )
}
