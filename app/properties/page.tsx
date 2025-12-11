import { Metadata } from 'next';
import PropertiesPageClient from './PropertiesPageClient';
import { getProperties, getNeighborhoods } from '@/data/mockData';

export const metadata: Metadata = {
    title: 'Properties',
    description: 'Browse our exclusive collection of luxury properties in Dubai. Find apartments, villas, penthouses, and more in prime locations.',
};

export default async function PropertiesPage() {
    const [properties, neighborhoods] = await Promise.all([
        getProperties(),
        getNeighborhoods(),
    ]);

    return <PropertiesPageClient properties={properties} neighborhoods={neighborhoods} />;
}

