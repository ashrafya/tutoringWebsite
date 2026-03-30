import { Helmet } from 'react-helmet-async';

const HomeSEO: React.FC = () => (
  <Helmet>
    <title>Tutor Oaks | Ontario High School Tutoring — Math, Physics & Chemistry</title>
    <meta
      name="description"
      content="Expert one-on-one tutoring for Ontario high school students in Grade 10–12 Math, Physics, and Chemistry. Online sessions, flexible scheduling, and proven results. Book a free consultation today."
    />
    <link rel="canonical" href="https://tutoroaks.ca/" />

    {/* Open Graph */}
    <meta property="og:type"        content="website" />
    <meta property="og:url"         content="https://tutoroaks.ca/" />
    <meta property="og:title"       content="Tutor Oaks | Ontario High School Tutoring" />
    <meta property="og:description" content="Expert one-on-one tutoring for Ontario Grade 10–12 students in Math, Physics, and Chemistry. Online, flexible, results-driven." />
    <meta property="og:image"       content="https://tutoroaks.ca/logo.png" />

    {/* Twitter Card */}
    <meta name="twitter:card"        content="summary_large_image" />
    <meta name="twitter:title"       content="Tutor Oaks | Ontario High School Tutoring" />
    <meta name="twitter:description" content="Expert one-on-one tutoring for Ontario Grade 10–12 students in Math, Physics, and Chemistry." />
    <meta name="twitter:image"       content="https://tutoroaks.ca/logo.png" />

    {/* LocalBusiness + TutoringService JSON-LD */}
    <script type="application/ld+json">{`
      {
        "@context": "https://schema.org",
        "@type": "EducationalOrganization",
        "name": "Tutor Oaks",
        "url": "https://tutoroaks.ca",
        "logo": "https://tutoroaks.ca/logo.png",
        "description": "Expert one-on-one tutoring for Ontario high school students in Grade 10–12 Math, Physics, and Chemistry.",
        "address": {
          "@type": "PostalAddress",
          "addressRegion": "ON",
          "addressCountry": "CA"
        },
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": "Ontario, Canada"
        },
        "serviceType": ["High School Tutoring", "Math Tutoring", "Physics Tutoring", "Chemistry Tutoring"],
        "priceRange": "$$",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "65"
        },
        "founder": {
          "@type": "Person",
          "name": "Yawar Ashraf",
          "alumniOf": {
            "@type": "CollegeOrUniversity",
            "name": "University of Toronto"
          }
        },
        "sameAs": []
      }
    `}</script>
  </Helmet>
);

export default HomeSEO;
