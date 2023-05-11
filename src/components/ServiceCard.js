import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function ServiceCard({ service }) {
    return (
      <div className="service-card">
        <FontAwesomeIcon icon={service.icon} />
        <h3>{service.title}</h3>
        <p>{service.description}</p>
      </div>
    );
  }
  