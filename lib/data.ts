import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'dev.kashifnaeem@gmail.com',
    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Kashif, I am reaching out to you because...',
    oldPortfolio: '',
    upworkProfile: '',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/kash-if-Naeem' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/kashifnaeem-dev/' },
    // Add more links as needed
];

export const MY_STACK = {
    frontend: [
        { name: 'JavaScript', icon: '/logo/js.png' },
        { name: 'TypeScript', icon: '/logo/ts.png' },
        { name: 'React', icon: '/logo/react.png' },
        { name: 'Angular', icon: '/logo/angular2.png' },
        { name: 'Bootstrap', icon: '/logo/bootstrap.svg' },
        { name: 'HTML', icon: '/logo/html.jpg' },
        { name: 'CSS', icon: '/logo/css3.png' },
    ],
    backend: [
        { name: 'C#', icon: '/logo/csharp.png' },
        { name: 'Node.js', icon: '/logo/node.png' },
        { name: 'Express.js', icon: '/logo/express.png' },
    ],
    database: [
        { name: 'MySQL', icon: '/logo/mysql.svg' },
        { name: 'MongoDB', icon: '/logo/mongodb.svg' },
    ],
    Testing: [
        { name: 'Cypress', icon: '/logo/cypress.svg' },
        { name: 'Selenium', icon: '/logo/selenium.png' },
        { name: 'Mocha', icon: '/logo/mocha.png' },
        { name: 'Chai', icon: '/logo/chai.png' },
    ],
    tools: [
        { name: 'Git', icon: '/logo/git.png' },
        { name: 'Azure DevOps', icon: '/logo/azure.jpeg' },
        { name: 'Postman', icon: '/logo/postman.png' },
        { name: 'GitHub Copilot', icon: '/logo/github-copilot.png' },
        { name: 'Claude AI', icon: '/logo/claudeai.png' },
        { name: 'ChatGPT', icon: '/logo/chatgpt.png' },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'Allianz Inspection Hub',
        slug: 'inspection-hub',
        liveUrl: 'https://eng.inspectionhub.allianz.co.uk/',
        year: 2025,
        description: `
      A comprehensive inspection management platform built for Allianz field engineers to streamline on-site inspection workflows, reporting, and data visualization.<br/><br/>

      Key Features:<br/>
      <ul>
        <li>🗺️ Google Maps Integration: Location-based inspection assignment and field navigation</li>
        <li>📋 Inspection Workflows: Structured multi-step inspection forms with validation</li>
        <li>📊 Reporting & Analytics: Dynamic report generation with data visualization components</li>
        <li>♿ Accessibility Compliant: Keyboard navigation, breadcrumbs, ARIA patterns, and responsive layouts</li>
        <li>⚡ Performance Optimized: Infinite scrolling, optimized API consumption, lazy loading</li>
      </ul><br/>

      Technical Highlights:
      <ul>
        <li>Built with Angular 13 and TypeScript using GraphQL (Apollo Client) for efficient data fetching</li>
        <li>Integrated Google Maps API for field engineer location tracking and task assignment</li>
        <li>Automated test coverage with Jasmine/Karma (unit) and Cypress (E2E)</li>
        <li>Maintained CI/CD pipelines in Azure DevOps using YAML</li>
      </ul>
      `,
        role: `
      Software Developer (Frontend Focused)<br/>
      Contributed across the full stack:
      <ul>
        <li>🎨 Frontend: Built and maintained Angular components with TypeScript</li>
        <li>🔗 API Layer: Integrated GraphQL queries/mutations via Apollo Client</li>
        <li>🗺️ Maps: Implemented Google Maps features for field inspection workflows</li>
        <li>✅ Testing: Wrote unit tests (Jasmine/Karma) and E2E tests (Cypress)</li>
        <li>⚙️ DevOps: Maintained Azure DevOps CI/CD pipelines with YAML</li>
        <li>♿ Accessibility: Led keyboard navigation and WCAG compliance improvements</li>
      </ul>
      `,
        techStack: [
            'Angular 13',
            'TypeScript',
            'GraphQL',
            'Apollo Client',
            'Google Maps API',
            'Jasmine',
            'Karma',
            'Cypress',
            'Azure DevOps',
        ],
        thumbnail: '/projects/IH1.png',
        longThumbnail: '/projects/IH2.png',
        images: ['/projects/IH1.png', '/projects/IH2.png'],
    },

    {
        title: 'Kinetic Inspect',
        slug: 'kinetic-inspect-mobile',
        liveUrl: '',
        year: 2025,
        description: `
      A cross-platform mobile inspection application built with Flutter, enabling field engineers to conduct inspections, generate reports, and sync data seamlessly on both iOS and Android.<br/><br/>

      Key Features:<br/>
      <ul>
        <li>📱 Cross-Platform: Single codebase running natively on iOS and Android via Flutter</li>
        <li>📋 Inspection Workflows: Step-by-step guided inspection process with form validation</li>
        <li>📄 Report Generation: Automated PDF report creation from completed inspections</li>
        <li>🔌 API Integration: Connected to .NET backend APIs and SQL Server for data persistence</li>
        <li>🧪 API Validation: Tested and validated all endpoints using Postman</li>
      </ul><br/>

      Technical Highlights:
      <ul>
        <li>Developed using Flutter (Dart) for true cross-platform performance</li>
        <li>Integrated with .NET REST APIs for inspection data management</li>
        <li>Implemented offline-capable inspection workflows with local state management</li>
        <li>Validated backend API contracts and responses using Postman collections</li>
      </ul>
      `,
        role: `
      Mobile Developer<br/>
      Led mobile development end-to-end:
      <ul>
        <li>📱 Flutter Development: Built all screens and inspection workflow UI components</li>
        <li>🔗 API Integration: Connected Flutter app to .NET REST APIs and SQL Server</li>
        <li>📄 Report Generation: Implemented automated inspection report export feature</li>
        <li>🧪 Testing: Validated API endpoints and data flows using Postman</li>
        <li>🚀 Deployment: Managed builds for both iOS and Android platforms</li>
      </ul>
      `,
        techStack: [
            'Flutter',
            'Dart',
            '.NET APIs',
            'SQL Server',
            'REST APIs',
            'Postman',
        ],
        thumbnail: '/projects/KIM.jpeg',
        longThumbnail: '/projects/KIM2.jpeg',
        images: ['/projects/KIM.jpeg', '/projects/KIM2.jpeg'],
    },

    {
        title: 'Smart Real Estate MLSP',
        slug: 'smart-real-estate',
        liveUrl: '',
        year: 2025,
        description: `
      A scalable real estate platform built on the ABP Framework, enabling property listing, visualization, and management with advanced role-based access and mapping features.<br/><br/>

      Key Features:<br/>
      <ul>
        <li>🏠 Property Listings: Organized property catalog with filtering and search capabilities</li>
        <li>🗺️ Maps Integration: Google Maps and Google Directions APIs for property visualization and navigation</li>
        <li>🔐 Role-Based Access: Dynamic UI rendering based on user roles and permissions</li>
        <li>⚡ Performance Optimized: Lazy loading, optimized API consumption, and component-based architecture</li>
        <li>✅ Tested: Unit tests with Jasmine/Karma ensuring component reliability</li>
      </ul><br/>

      Technical Highlights:
      <ul>
        <li>Built with Angular 16 and TypeScript on the ABP (ASP.NET Boilerplate) architecture</li>
        <li>Integrated Google Maps and Directions APIs for property location features</li>
        <li>Applied lazy loading for improved initial load performance</li>
        <li>Implemented role-based access control with dynamic UI rendering per user role</li>
      </ul>
      `,
        role: `
      Software Engineer<br/>
      Full frontend ownership:
      <ul>
        <li>🎨 Frontend: Built scalable Angular 16 modules with TypeScript</li>
        <li>🗺️ Maps: Integrated Google Maps and Directions APIs for property features</li>
        <li>🔐 Auth & Roles: Implemented role-based access controls and dynamic UI rendering</li>
        <li>⚡ Performance: Applied lazy loading and component-based architecture patterns</li>
        <li>✅ Testing: Wrote unit tests with Jasmine/Karma for component stability</li>
      </ul>
      `,
        techStack: [
            'Angular 16',
            'TypeScript',
            'REST APIs',
            'ABP Framework',
            'Google Maps API',
            'Google Directions API',
            'Jasmine',
            'Karma',
        ],
        thumbnail: '/projects/mls1.png',
        longThumbnail: '/projects/mls2.png',
        images: ['/projects/mls1.png', '/projects/mls2.png'],
    },

    {
        title: 'Slaxy by Alex',
        slug: 'slaxy',
        liveUrl: 'https://slaxy.de/',
        year: 2020,
        description: `
      A custom Shopify e-commerce store built for the German market, featuring a responsive storefront, third-party plugin integrations, and a polished user experience across all devices.<br/><br/>

      Key Features:<br/>
      <ul>
        <li>🛒 Custom Storefront: Tailored Shopify theme with brand-specific UI design</li>
        <li>📱 Fully Responsive: Optimized layout across desktop, tablet, and mobile</li>
        <li>🔌 Third-Party Plugins: Integrated marketing tools, payment gateways, and app extensions</li>
        <li>🧪 Manual Testing: Cross-device and cross-browser UI validation</li>
        <li>🚀 SEO Optimized: Improved page structure and performance for search discoverability</li>
      </ul><br/>

      Technical Highlights:
      <ul>
        <li>Built on Shopify with custom Liquid templating and CSS/JS customizations</li>
        <li>Integrated third-party payment gateways and marketing plugins</li>
        <li>Performed thorough manual testing across browsers and device sizes</li>
        <li>Optimized page performance and SEO structure for the German market</li>
      </ul>
      `,
        role: `
      Shopify Developer<br/>
      End-to-end Shopify development:
      <ul>
        <li>🎨 Theme Development: Customized Shopify Liquid templates and CSS/JS</li>
        <li>🔌 Integrations: Added third-party apps, payment gateways, and marketing tools</li>
        <li>🧪 QA: Conducted cross-browser and responsive UI testing</li>
        <li>🚀 Performance: Resolved production issues and optimized page load speed</li>
        <li>📈 SEO: Improved page structure and metadata for search engines</li>
      </ul>
      `,
        techStack: [
            'Shopify',
            'Liquid',
            'JavaScript',
            'CSS3',
            'Third-Party APIs',
            'Payment Gateways',
        ],
        thumbnail: '',
        longThumbnail: '',
        images: [],
    },

    {
        title: 'Eliquids Store',
        slug: 'eliquids',
        liveUrl: '',
        year: 2020,
        description: `
      A Shopify-based e-commerce store for an eliquids/vape brand, featuring a fully customized storefront with product catalog management, responsive design, and seamless third-party integrations.<br/><br/>

      Key Features:<br/>
      <ul>
        <li>🛒 Product Catalog: Organized eliquid product listings with variant management</li>
        <li>📱 Responsive Design: Consistent shopping experience across all screen sizes</li>
        <li>🔌 App Integrations: Integrated third-party Shopify apps and marketing tools</li>
        <li>💳 Payment Setup: Configured payment gateway for smooth checkout flow</li>
        <li>🧪 Cross-Browser Testing: Validated UI behavior across multiple browsers and devices</li>
      </ul><br/>

      Technical Highlights:
      <ul>
        <li>Customized Shopify theme using Liquid templating with brand-specific styling</li>
        <li>Integrated third-party Shopify apps for enhanced store functionality</li>
        <li>Performed manual testing and UI validation for consistent UX</li>
        <li>Optimized product page performance and SEO structure</li>
      </ul>
      `,
        role: `
      Shopify Developer<br/>
      Full store development and QA:
      <ul>
        <li>🎨 Theme Customization: Built and styled Shopify Liquid templates</li>
        <li>🔌 Integrations: Connected third-party apps and payment solutions</li>
        <li>🧪 Testing: Cross-browser and responsive testing for UI consistency</li>
        <li>⚡ Optimization: Improved page speed and SEO for product discoverability</li>
      </ul>
      `,
        techStack: [
            'Shopify',
            'Liquid',
            'JavaScript',
            'CSS3',
            'Third-Party Apps',
            'Payment Gateways',
        ],
        thumbnail: '/projects/eliquids1.png',
        longThumbnail: '/projects/eliquids2.png',
        images: ['/projects/eliquids1.png', '/projects/eliquids2.png'],
    },

    {
        title: 'YaleTown Floor',
        slug: 'yaletown-floor',
        liveUrl: '',
        year: 2021,
        description: `
      A Shopify-based e-commerce platform for a flooring brand, enhanced with additional custom features, third-party integrations, and comprehensive cross-browser testing for a consistent shopping experience.<br/><br/>

      Key Features:<br/>
      <ul>
        <li>🪵 Product Showcase: Visual flooring product catalog with detailed variant options</li>
        <li>📱 Responsive Layout: Fully tested across desktop, tablet, and mobile devices</li>
        <li>🔌 Third-Party Integrations: Extended store functionality with Shopify apps and plugins</li>
        <li>🌐 Cross-Browser Support: Validated consistent behavior across all major browsers</li>
        <li>⚡ Performance: Optimized page load times and UI component rendering</li>
      </ul><br/>

      Technical Highlights:
      <ul>
        <li>Customized existing Shopify theme with additional features and styling</li>
        <li>Integrated third-party Shopify apps for enhanced store capabilities</li>
        <li>Conducted thorough cross-browser and responsive testing</li>
        <li>Resolved UI inconsistencies and improved overall performance</li>
      </ul>
      `,
        role: `
      Shopify Developer<br/>
      Feature development and QA:
      <ul>
        <li>🎨 Customization: Extended existing theme with new features via Liquid/JS/CSS</li>
        <li>🔌 Integrations: Configured third-party plugins and Shopify app integrations</li>
        <li>🧪 Testing: Comprehensive cross-browser and responsive testing</li>
        <li>🐛 Bug Fixes: Resolved production issues and UI inconsistencies</li>
        <li>⚡ Performance: Improved page load speed and rendering efficiency</li>
      </ul>
      `,
        techStack: [
            'Shopify',
            'Liquid',
            'JavaScript',
            'CSS3',
            'Third-Party Apps',
        ],
        thumbnail: '/projects/yaletown1.png',
        longThumbnail: '/projects/yaletown2.png',
        images: ['/projects/yaletown1.png', '/projects/yaletown2.png'],
    },
];

export const MY_EXPERIENCE = [
    {
        title: 'Software Engineer',
        company: 'Contour Software',
        duration: 'Jan 2022 - Present',
    },
    {
        title: 'Frontend Developer (Part-time)',
        company: 'SmartMLSP',
        duration: 'Nov 2022 - Oct 2025',
    },
    {
        title: 'Full Stack Developer',
        company: 'Gaper.io',
        duration: 'Aug 2021 - Dec 2021',
    },
    {
        title: 'Associate Software Engineer',
        company: 'Volpea Solutions',
        duration: 'July 2020 - July 2021',
    },
];
