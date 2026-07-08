import { MetadataRoute } from 'next'

export default function sitemap (): MetadataRoute.Sitemap {
    return [
        { url: 'https://www.krishchopra.net', lastModified: new Date() },
        { url: 'https://www.krishchopra.net/writing', lastModified: new Date() },
        { url: 'https://www.krishchopra.net/shorts' , lastModified: new Date() },
        { url: 'https://www.krishchopra.net/about', lastModified: new Date() },
        { url: 'https://www.krishchopra.net/contact', lastModified: new Date() },
    ]
}