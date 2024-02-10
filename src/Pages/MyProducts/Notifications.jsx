
import React, { useState } from 'react';

const allNotifications = [
  { number: 1, date: '18.07.2023', status: 'Новое', text: 'Вода была доставлена и передана заказчику...' },
  { number: 2, date: '18.07.2023', status: 'Новое', text: 'Вода была доставлена и передана заказчику...' },
  { number: 3, date: '19.07.2023', status: 'Новое', text: 'Вода была доставлена и передана заказчику...' },
  { number: 4, date: '19.07.2023', status: 'Новое', text: 'Вода была доставлена и передана заказчику...' },
  { number: 5, date: '19.07.2023', status: 'Прочитано', text: 'Вода была доставлена и передана заказчику...' },
  { number: 6, date: '19.07.2023', status: 'Прочитано', text: 'Вода была доставлена и передана заказчику...' },
  { number: 7, date: '20.07.2023', status: 'Прочитано', text: 'Вода была доставлена и передана заказчику...' },
  { number: 8, date: '20.07.2023', status: 'Прочитано', text: 'Вода была доставлена и передана заказчику...' },
  { number: 9, date: '20.07.2023', status: 'Прочитано', text: 'Вода была доставлена и передана заказчику...' },
  { number: 10, date: '21.07.2023', status: 'Прочитано', text: 'Вода была доставлена и передана заказчику...' },
  { number: 11, date: '21.07.2023', status: 'Прочитано', text: 'Вода была доставлена и передана заказчику...' },
  { number: 12, date: '22.07.2023', status: 'Прочитано', text: 'Вода была доставлена и передана заказчику...' },
];

const Notifications = () => {
  const [search, setSearch] = useState('');
  const [notifications, setNotifications] = useState(allNotifications);

  const handleSearch = (event) => {
    setSearch(event.target.value);
    if (event.target.value) {
      const filteredNotifications = allNotifications.map(notification => {
        if (notification.date.includes(event.target.value)) {
          return { ...notification, status: 'Новое' };
        } else {
          return { ...notification, status: 'Прочитано' };
        }
      });
      setNotifications(filteredNotifications);
    } else {
      setNotifications(allNotifications);
    }
  };

  return (
    <div className="p-8">
      <div className="flex flex-row justify-between">
        <h1 className="text-3xl font-bold mb-4">Оповещения</h1>
        <input
          type="text"
          placeholder="🔍 Найти"
          value={search}
          onChange={handleSearch}
          className="p-1 border rounded-lg w-72 bg-gray-200"
        />
      </div>

      <div className="overflow-x-auto mt-6 mx-auto">
        <table className="w-full whitespace-nowrap">
          <thead>
            <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b bg-gray-50">
              <th className="px-4 py-3">№</th>
              <th className="px-4 py-3">Дата</th>
              <th className="px-4 py-3">Статус</th>
              <th className="px-4 py-3">Текст обновления</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y">
            {notifications.map((row, i) => (
              <tr key={i} className="text-gray-700">
                <td className="px-4 py-3">{i + 1}</td>
                <td className="px-4 py-3">{row.date}</td>
                <td className={`px-4 py-3 ${row.status === 'Новое' ? 'bg-green-200 rounded p-1' : ''}`}>{row.status}</td>
                <td className="px-4 py-3">{row.text}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Notifications;
