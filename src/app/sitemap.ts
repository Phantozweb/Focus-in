import { MetadataRoute } from 'next';
import { PROJECTS_DETAILS_DATA, UPDATES_DATA } from '@/lib/constants';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = 'https://focus-in.netlify.app'; // Replace with your actual domain

  // Static pages
  const staticRoutes = [
    '/',
    '/about',
    '/projects',
    '/updates',
    '/support',
  ].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date().toISOString(),
    priority: route === '/' ? 1.0 : 0.8,
  }));

  // Project pages
  const projectRoutes = PROJECTS_DETAILS_DATA.map((project) => ({
    url: `${siteUrl}/projects/${project.slug}`,
    lastModified: new Date().toISOString(),
    priority: 0.9,
  }));

  // Update pages
  const updateRoutes = UPDATES_DATA.map((update) => ({
    url: `${siteUrl}/updates/${update.slug}`,
    lastModified: new Date(update.date).toISOString(),
    priority: 0.7,
  }));

  return [...staticRoutes, ...projectRoutes, ...updateRoutes];
}
