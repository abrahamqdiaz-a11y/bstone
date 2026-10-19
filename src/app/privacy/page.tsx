import { PageHero } from "@/components/templates/PageHero";
import { business } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Privacy Policy | Briarstone Prep, Sarasota, FL",
  description:
    "How Briarstone Prep, a Sarasota estate cleanout and home preparation company, collects, uses, and protects the information you share on this website.",
  path: "/privacy",
});

// VERIFY: have this policy reviewed before launch, and update it if analytics,
// CRM, or email providers change.
const updated = "October 15, 2026";

export default function PrivacyPage() {
  const contact = business.email ? `email us at ${business.email}` : "contact us through our contact form";
  return (
    <>
      <PageHero
        crumbs={[{ name: "Privacy", path: "/privacy" }]}
        eyebrow="Legal"
        title="Privacy policy"
        lead={`Last updated ${updated}. This policy explains what ${business.name} collects through this website and how we use it.`}
        showCtas={false}
      />
      <div className="container-bs py-16">
        <div className="prose-bs mx-auto max-w-[44rem]">
          <h2>Information you give us</h2>
          <p>
            When you request a consultation, we collect the details you enter: your name, email address, phone number
            (optional), the property&rsquo;s city or ZIP code, the service and timeline you choose, your description of
            the project, and any photos you attach. We use this information only to respond to your request and to
            plan and provide the services you ask about.
          </p>
          <p>
            Please don&rsquo;t include financial account numbers, health information, or other sensitive details in the
            form. We don&rsquo;t need them to respond.
          </p>
          <h2>How it&rsquo;s handled</h2>
          <p>
            Form submissions are sent to the systems we use to manage inquiries, such as our email and customer
            records. We don&rsquo;t sell your information or share it with third parties for their own marketing. We
            may share details with a provider we coordinate on your project only when that&rsquo;s needed to do the
            work and you&rsquo;ve agreed to it.
          </p>
          <h2>Analytics</h2>
          <p>
            If we use analytics, it is only after you accept analytics cookies in the banner. Analytics help us
            understand which pages are useful. We don&rsquo;t send the contents of our forms to analytics providers.
            You can change your choice at any time by clearing this site&rsquo;s data in your browser.
          </p>
          <h2>Spam protection</h2>
          <p>
            To protect our forms from automated abuse, we may use a verification service such as Cloudflare Turnstile,
            which processes limited technical information about your browser.
          </p>
          <h2>Retention and your choices</h2>
          <p>
            We keep inquiry information only as long as needed to respond, provide services, and meet our business and
            legal obligations. To ask what we hold about you, or to ask us to correct or delete it, {contact}.
          </p>
        </div>
      </div>
    </>
  );
}
