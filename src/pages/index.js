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

const learnModules = [
    {
        module: 'Models',
        topics: ['StreamPlatform', 'WatchList', 'Review'],
        isCode: true,
    },
    {
        module: 'Serializers',
        topics: ['Model serializers, nested serializers, validation'],
        isCode: false,
    },
    {
        module: 'Views',
        topics: ['APIView', 'GenericAPIView', 'ViewSets', 'Mixins'],
        isCode: true,
    },
    {
        module: 'Authentication',
        topics: ['Token authentication, JWT (SimpleJWT)'],
        isCode: false,
    },
    {
        module: 'Permissions',
        topics: [
            'IsAuthenticated',
            'IsAdminUser',
            'IsAuthenticatedOrReadOnly',
            'Custom permissions',
        ],
        isCode: true,
    },
    {
        module: 'Throttling',
        topics: ['Scope-based and custom throttle classes'],
        isCode: false,
    },
    {
        module: 'Filtering',
        topics: ['SearchFilter', 'OrderingFilter', 'Custom queryset filtering'],
        isCode: true,
    },
    {
        module: 'Pagination',
        topics: [
            'PageNumberPagination',
            'LimitOffsetPagination',
            'Custom pagination',
        ],
        isCode: true,
    },
    {
        module: 'Testing',
        topics: [
            'APITestCase',
            'setUp',
            'Registration, login, logout, CRUD, TDD concepts',
        ],
        isCode: true,
    },
    {
        module: 'Project',
        topics: ['requirements.txt, import cleanup, GitHub publishing'],
        isCode: false,
    },
];

export default function Home() {
    return (
        <Layout
            title="What You'll Learn"
            description="Course overview for the Django REST Framework series">

            <HomepageHeader />

            <main className="container margin-vert--lg">

                <Heading as="h2">What You'll Learn</Heading>

                <p>
                    Throughout this course, you will build a complete{' '}
                    <strong>Streaming Service Review API</strong> from scratch
                    using Django REST Framework. Here is a summary of everything
                    covered:
                </p>

                <table>
                    <thead>
                    <tr>
                        <th>Module</th>
                        <th>Topics</th>
                    </tr>
                    </thead>
                    <tbody>
                    {learnModules.map(({ module, topics, isCode }) => (
                        <tr key={module}>
                            <td>
                                <strong>{module}</strong>
                            </td>
                            <td>
                                {isCode
                                    ? topics.map((t, i) => (
                                        <span key={i}>
                                                  {t.startsWith(t[0].toUpperCase()) &&
                                                  !t.includes(' ') ? (
                                                      <code>{t}</code>
                                                  ) : (
                                                      t
                                                  )}
                                            {i < topics.length - 1 && ', '}
                                              </span>
                                    ))
                                    : topics.join(', ')}
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>

                <hr />

                <Heading as="h2">Prerequisites</Heading>

                <p>
                    All you need is basic knowledge of <strong>Python</strong>{' '}
                    and <strong>Django</strong> to get started.
                </p>

                <Heading as="h2">What You Get</Heading>

                <ul>
                    <li>High-quality video lectures</li>
                    <li>Complete source code used throughout the course</li>
                    <li>Additional resources in the form of links and PDFs</li>
                </ul>

                <blockquote>
                    <p>
                        This course takes you from the very basics all the way
                        through automated testing — making it a complete
                        end-to-end learning experience.
                    </p>
                </blockquote>

            </main>
        </Layout>
    );
}