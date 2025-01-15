import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import dotenv from 'dotenv';
dotenv.config();

const paths = {
    HOME: '/home',
    CONTACT_US: '/contact-us',
    CAREER: '/careers',
    NEWS: '/news',
    '/': '/',
    LIBRARY: '/library',
    PROJECTS: '/project',
    DETAIL_PROJECTS: '/project/:id',
    NEWS_DETAIL: '/news/:id',
    CAREER_DETAIL: '/careers/:id',
    COMPANY_ACTIVITY: '/company-activity',
    PHOTO_GALLERY: '/picture-gallery',
    VIDEO_GALLERY: '/video-gallery',
    DETAIL_ACTIVITY: '/company-activity/:id',
    BLOG: '/blog',
    BLOG_DETAIL: '/blog/:id',
    E_BOOK_WHITEPAPERS: '/e-books-whitepapers',
    CORPORATION: '/field-of-activity',
    GLOBAL: '/global',
    ABOUT_US: '/featured-projects',
    OPERATION: '/field-operation/:id',
    FIELD_OPERATION: '/field-operation',
};

const generateSitemap = async () => {
    const smStream = new SitemapStream({
        hostname: process.env.VITE_URL_FRONTEND,
    });

    const writeStream = createWriteStream('D:/CMC/public/sitemap.xml');

    smStream.pipe(writeStream);

    Object.entries(paths).forEach(([key, path]) => {
        let priority = 0.7;

        if (path === '/' || path === '/home' || path === '/news' || path === '/blog' || path === '/careers') {
            priority = 1.0;
        }

        if (path.includes(':id')) {
            smStream.write({
                url: path.replace(':id', '1'),
                changefreq: 'weekly',
                priority: priority,
            });
        } else {
            smStream.write({
                url: path,
                changefreq: 'weekly',
                priority: priority,
            });
        }
    });

    smStream.end();

    await streamToPromise(smStream);
    console.log('Sitemap generated successfully!');
};

generateSitemap().catch((err) => {
    console.error('Error generating sitemap:', err);
});
