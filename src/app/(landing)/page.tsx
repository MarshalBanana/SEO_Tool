'use client'
import { LandingCTA } from '@/designSystem/landing/LandingCTA'
import { LandingContainer } from '@/designSystem/landing/LandingContainer'
import LandingFAQ from '@/designSystem/landing/LandingFAQ'
import { LandingFeatures } from '@/designSystem/landing/LandingFeatures'
import { LandingHero } from '@/designSystem/landing/LandingHero'
import { LandingHowItWorks } from '@/designSystem/landing/LandingHowItWorks'
import { LandingPainPoints } from '@/designSystem/landing/LandingPainPoints'
import { LandingPricing } from '@/designSystem/landing/LandingPricing'
import { LandingSocialProof } from '@/designSystem/landing/LandingSocialProof'
import { LandingSocialRating } from '@/designSystem/landing/LandingSocialRating'
import { LandingTestimonials } from '@/designSystem/landing/LandingTestimonials'
import {
  EditOutlined,
  SearchOutlined,
  LinkOutlined,
  AuditOutlined,
  LineChartOutlined,
  TagsOutlined,
  FileTextOutlined,
  StarOutlined,
  RobotOutlined,
} from '@ant-design/icons'

export default function LandingPage() {
  const features = [
    {
      heading: 'Keyword Research',
      description:
        'Discover the best keywords to target for maximum search engine visibility.',
      icon: <SearchOutlined />,
    },
    {
      heading: 'Backlink Checker',
      description:
        'Analyze your backlink profile and uncover new opportunities for growth.',
      icon: <LinkOutlined />,
    },
    {
      heading: 'Website Audit',
      description:
        'Identify and fix technical SEO issues to improve your site’s performance.',
      icon: <AuditOutlined />,
    },
    {
      heading: 'Rank Tracking',
      description:
        'Monitor your search engine rankings and track your progress over time.',
      icon: <LineChartOutlined />,
    },
    {
      heading: 'Meta Tag Generator',
      description:
        'Create optimized meta tags to enhance your site’s search engine visibility.',
      icon: <TagsOutlined />,
    },
    {
      heading: 'Content Optimization',
      description:
        'Optimize your content to ensure it ranks well and engages your audience.',
      icon: <FileTextOutlined />,
    },
    {
      heading: 'XML Sitemap Generator',
      description:
        'Generate XML sitemaps to help search engines crawl your site more effectively.',
      icon: <StarOutlined />,
    },
    {
      heading: 'Robots.txt Generator',
      description:
        'Create robots.txt files to control how search engines index your site.',
      icon: <RobotOutlined />,
    },
  ]

  const testimonials = [
    {
      name: 'John Doe',
      designation: 'Digital Marketer',
      content:
        'This suite of SEO tools has transformed our online presence. Our traffic has increased by 50% in just three months!',
      avatar: 'https://randomuser.me/api/portraits/men/5.jpg',
    },
    {
      name: 'Jane Smith',
      designation: 'Content Creator',
      content:
        'The keyword research tool is a game-changer. It’s so easy to find the right keywords for my content.',
      avatar: 'https://randomuser.me/api/portraits/women/6.jpg',
    },
    {
      name: 'Mike Johnson',
      designation: 'Web Developer',
      content:
        'I love the website audit feature. It helped me identify and fix issues that were holding back our site’s performance.',
      avatar: 'https://randomuser.me/api/portraits/men/7.jpg',
    },
    {
      name: 'Emily Davis',
      designation: 'SEO Specialist',
      content:
        'The rank tracking tool is fantastic. It’s great to see our progress and know that our efforts are paying off.',
      avatar: 'https://randomuser.me/api/portraits/men/12.jpg',
    },
    {
      name: 'Chris Lee',
      designation: 'Small Business Owner',
      content:
        'These tools are incredibly user-friendly and have made a huge difference for our business.',
      avatar: 'https://randomuser.me/api/portraits/men/17.jpg',
    },
    {
      name: 'Sarah Wilson',
      designation: 'Blogger',
      content:
        'The content optimization tool has helped me create better content that ranks higher and engages my readers.',
      avatar: 'https://randomuser.me/api/portraits/women/27.jpg',
    },
  ]

  const navItems = [
    {
      title: 'Home',
      link: '/',
    },
    {
      title: 'Tools',
      link: '/tools',
    },
    {
      title: 'Pricing',
      link: '#pricing',
    },
  ]

  const packages = [
    {
      title: 'Basic',
      description: 'Essential tools for small businesses and beginners.',
      monthly: 9,
      yearly: 69,
      features: ['Keyword Research', 'Backlink Checker'],
    },
    {
      title: 'Pro',
      description: 'Advanced tools for growing businesses and professionals.',
      monthly: 19,
      yearly: 129,
      features: ['Website Audit', 'Rank Tracking', 'Meta Tag Generator'],
      highlight: true,
    },
    {
      title: 'Enterprise',
      description: 'Comprehensive tools for large businesses and agencies.',
      monthly: 49,
      yearly: 399,
      features: [
        'Content Optimization',
        'XML Sitemap Generator',
        'Robots.txt Generator',
      ],
    },
  ]

  const questionAnswers = [
    {
      question: 'What is SEO?',
      answer:
        'SEO stands for Search Engine Optimization. It involves optimizing your website to rank higher in search engine results.',
    },
    {
      question: 'How can these tools help my business?',
      answer:
        'Our tools help you identify and implement effective SEO strategies, improving your search engine rankings and driving more traffic to your site.',
    },
    {
      question: 'Is there a free trial?',
      answer:
        'Yes, we offer a 14-day free trial for all our plans. You can try out all the features before committing to a subscription.',
    },
    {
      question: 'Can I cancel my subscription at any time?',
      answer:
        'Yes, you can cancel your subscription at any time. There are no long-term commitments.',
    },
  ]

  const logos = [
    { url: 'https://i.imgur.com/afwBIFK.png' },
    { url: 'https://i.imgur.com/LlloOPa.png' },
    { url: 'https://i.imgur.com/j8jPb4H.png' },
    { url: 'https://i.imgur.com/mJ1sZFv.png' },
  ]

  const steps = [
    {
      heading: 'Sign Up',
      description:
        'Create an account to get started with our suite of SEO tools.',
    },
    {
      heading: 'Choose Your Tools',
      description:
        'Select the tools that best meet your needs and start optimizing your site.',
    },
    {
      heading: 'Analyze & Optimize',
      description:
        'Use our tools to analyze your site and implement effective SEO strategies.',
    },
    {
      heading: 'Track Your Progress',
      description:
        'Monitor your search engine rankings and track your progress over time.',
    },
  ]

  const painPoints = [
    {
      emoji: '🔍',
      title: 'Struggling to find the right keywords?',
    },
    {
      emoji: '🔗',
      title: 'Unsure about your backlink profile?',
    },
    {
      emoji: '⚙️',
      title: 'Technical SEO issues holding you back?',
    },
  ]

  const avatarItems = [
    {
      src: 'https://randomuser.me/api/portraits/men/51.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/women/9.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/women/52.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/men/5.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/men/4.jpg',
    },
  ]

  return (
    <LandingContainer navItems={navItems}>
      <LandingHero
        title="Achieve Your SEO Dreams"
        subtitle="Unlock the full potential of your website with our comprehensive suite of SEO tools."
        buttonText="Get Started"
        buttonLink="/register"
        pictureUrl="https://marblism-dashboard-api--production-public.s3.us-west-1.amazonaws.com/VJZf4S-seotool-rcTq"
        socialProof={
          <LandingSocialRating
            avatarItems={avatarItems}
            numberOfUsers={1000}
            suffixText="from happy users"
          />
        }
      />
      <LandingSocialProof logos={logos} title="Featured on" />
      <LandingPainPoints
        title="SEO Challenges Impacting Your Business"
        painPoints={painPoints}
      />
      <LandingHowItWorks title="How It Works" steps={steps} />
      <LandingFeatures
        id="features"
        title="Tools to Achieve Your SEO Goals"
        subtitle="Our suite of tools is designed to help you improve your search engine rankings and drive more traffic to your site."
        features={features}
      />
      <LandingTestimonials
        title="Success Stories"
        subtitle="See how our tools have helped others achieve their SEO dreams."
        testimonials={testimonials}
      />
      <LandingPricing
        id="pricing"
        title="Choose Your Plan"
        subtitle="Find the perfect plan to meet your SEO needs."
        packages={packages}
      />
      <LandingFAQ
        id="faq"
        title="Frequently Asked Questions"
        subtitle="Got questions? We've got answers."
        questionAnswers={questionAnswers}
      />
      <LandingCTA
        title="Ready to Boost Your SEO?"
        subtitle="Sign up now and start optimizing your site today."
        buttonText="Get Started"
        buttonLink="/register"
      />
    </LandingContainer>
  )
}
