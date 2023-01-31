import React from 'react'
import Layout from 'components/Layout'
import { SEO } from 'components/seo'
import { StaticImage } from 'gatsby-plugin-image'
import Link from 'components/Link'
import PostLayout from 'components/PostLayout'
import { handbook } from '../sidebars/sidebars.json'
import SearchBox from 'components/SearchBox'

const otherLinks = [
    {
        name: 'Company',
        links: [
            { name: 'Story', to: '/handbook/company/story' },
            { name: 'Team', to: '/handbook/company/team' },
            { name: 'Investors', to: '/handbook/company/investors' },
            { name: 'Basic Process', to: '/handbook/company/process' },
            { name: 'Working With Trello', to: '/handbook/company/trello' },
        ],
    },
    {
        name: 'Strategy',
        links: [
            {
                name: 'Overview',
                to: '/handbook/strategy/overview',
            },
            {
                name: 'Direction',
                to: '/handbook/strategy/direction',
            },
        ],
    },
    {
        name: 'Engineering',
        links: [
            {
                name: 'Product Cycle',
                to: '/handbook/engineering/initial-planning',
            },
            {
                name: 'Product/Feature Life Cycle',
                to: '/handbook/engineering/feature-life-cycle',
            },
            {
                name: 'Wireframe Design Guidelines',
                to: '/handbook/engineering/wireframe-design-guidelines',
            },
            {
                name: 'Development Stages',
                to: '/handbook/engineering/development-stages',
            },
            {
                name: 'Infrastructure System',
                to: '/handbook/engineering/infrastructure-system',
            },
            {
                name: 'Project Types',
                to: '/handbook/engineering/project-types',
            },
        ],
    },
    {
        name: 'Product',
        links: [
            {
                name: 'Finza',
                to: '/handbook/product/metrics',
            },
            {
                name: 'Demo App',
                to: '/handbook/product/user-feedback',
            },
            {
                name: 'Payouts SDK',
                to: '/handbook/product/paid-features',
            },
            {
                name: 'Marketplace',
                to: '/handbook/product/releasing-as-beta',
            },
        ],
    },
    {
        name: 'Design',
        links: [
            {
                name: 'Product Design process',
                to: '/handbook/design/process',
            },
        ],
    },
    {
        name: 'Sales & marketing',
        links: [
            {
                name: 'Overview',
                to: '/handbook/growth/marketing',
            },
            {
                name: 'Sales',
                to: '/handbook/growth/marketing/sales',
            },
            {
                name: 'Co Work-Space',
                to: '/handbook/growth/marketing/co-work-space',
            },
        ],
    },
]

export const Handbook: React.FC = () => {
    return (
        <Layout>
            <SEO title="Handbook - PostHog" />

            <PostLayout article={false} title={'Handbook'} menu={handbook} hideSidebar hideSurvey>
                <div className="space-y-16 lg:space-y-20 lg:-mt-12 mb-8">
                    <section>
                        <div className="flex justify-start relative items-center -mx-px h-80">
                            <div className="w-full z-20">
                                <h1 className="font-bold text-5xl mb-2">Company handbook</h1>
                                <h5 className="opacity-60 font-semibold leading-tight mb-8">
                                    This explains how we operate as a company.
                                </h5>

                                <SearchBox filter="handbook" placeholder="Search handbook..." />
                                <p className="text-gray mt-4">
                                    First time here? Read the{' '}
                                    <Link to="/handbook/getting-started/start-here">getting started</Link> guide.
                                </p>
                            </div>

                            <div className="absolute hidden md:block overflow-hidden inset-y-0 right-0 h-full w-full z-10">
                                <span className="absolute right-0 bottom-0">
                                    <StaticImage
                                        src="../../contents/images/ren-1.png"
                                        alt="This hog has an answer"
                                        width={400}
                                        placeholder="blurred"
                                    />
                                </span>
                            </div>
                        </div>

                        <h4>Top links</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-dashed border-gray-accent-light dark:border-gray-accent-dark">
                            {otherLinks.map((category) => {
                                return (
                                    <div
                                        key={category.name}
                                        className="space-y-2 py-4 md:py-6 px-4 md:px-8 border-dashed border-b border-r border-gray-accent-light dark:border-gray-accent-dark"
                                    >
                                        <h4 className="mb-0">{category.name}</h4>
                                        <ul className="p-0 space-y-1">
                                            {category.links.map((link) => {
                                                return (
                                                    <li key={link.to} className="list-none">
                                                        <Link to={link.to}>{link.name}</Link>
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                )
                            })}
                        </div>
                    </section>

                    <section className="space-y-8"></section>
                </div>
            </PostLayout>
        </Layout>
    )
}

export default Handbook
