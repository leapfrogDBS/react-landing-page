import { services } from '../services.js';
import ServiceCard from './ServiceCard';

export default function Services() {
    return (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {services.map(service => <ServiceCard key={service.id} service={service} />)}
        </div>
    )
}
