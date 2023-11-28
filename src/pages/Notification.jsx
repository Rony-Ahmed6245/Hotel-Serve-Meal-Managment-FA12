
import { useLoaderData } from 'react-router-dom';

const Notification = () => {
  // Assume that useLoaderData returns an array of notifications
  const data = useLoaderData([]);

  return (
    <div className="mt-20">
      {/* Display the number of notifications */}
      <p>Notifications: {data.length}</p>

      {/* Render individual notifications (modify based on your data structure) */}
      {data.map((notification, index) => (
        <div key={index} className="notification-item">
          {notification.message}
        </div>
      ))}
    </div>
  );
};

export default Notification;
