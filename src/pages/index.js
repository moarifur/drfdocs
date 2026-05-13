import clsx from 'clsx';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
                <Heading as="h1" className="hero__title">
                    Django REST Framework Course
                </Heading>

                <p className="hero__subtitle">
                    Build powerful APIs with Python and Django using a complete
                    project-based learning approach.
                </p>
            </div>
        </header>
    );
}

export default function Home() {
    return (
        <Layout
            title="Introduction"
            description="Course overview for the Django REST Framework series">

            <HomepageHeader />

            <main className="container margin-vert--lg">

                <Heading as="h1">Introduction</Heading>

                <Heading as="h2">Overview</Heading>

                <p>
                    Welcome to this comprehensive course on <strong>Django REST Framework (DRF)</strong> —
                    built with a project-based approach from the ground up.
                    The goal is to help you build flexible, powerful APIs using Python and Django.
                </p>

                <Heading as="h2">What You Will Build</Heading>

                <p>
                    Throughout the course, you will build an <strong>IMDB clone</strong> —
                    a movie information API covering storylines, ratings, and reviews,
                    similar to the popular IMDB website.
                </p>

                <Heading as="h2">Topics Covered</Heading>

                <ul>
                    <li>Basic concepts of APIs and REST architecture</li>
                    <li>Serializers</li>
                    <li>Function-Based Views and Class-Based Views</li>
                    <li>Generic Views, Viewsets, and Routers</li>
                    <li>Permissions for different user types</li>
                    <li>Authentication: Basic, Token, and JWT</li>
                    <li>Throttling</li>
                    <li>Filtering, Searching, and Ordering</li>
                    <li>Pagination</li>
                    <li>Automated Testing</li>
                </ul>

                <Heading as="h2">Prerequisites</Heading>

                <p>
                    All you need is basic knowledge of <strong>Python</strong> and <strong>Django</strong> to get started.
                </p>

                <Heading as="h2">What You Get</Heading>

                <ul>
                    <li>High-quality video lectures</li>
                    <li>Complete source code used throughout the course</li>
                    <li>Additional resources in the form of links and PDFs</li>
                </ul>

                <blockquote>
                    <p>
                        This course takes you from the very basics all the way through
                        automated testing — making it a complete end-to-end learning experience.
                    </p>
                </blockquote>

            </main>
        </Layout>
    );
}