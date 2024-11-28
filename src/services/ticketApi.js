// src/services/ticketApi.js
export const fetchTickets = async () => {
  return {
    tickets: [
      { id: "CAM-1", title: "Update User Profile Page UI", tag: ["Feature request"], userId: "usr-1", status: "Todo", priority: 4 },
      { id: "CAM-2", title: "Add Multi-Language Support", tag: ["Feature Request"], userId: "usr-2", status: "In progress", priority: 3 },
      { id: "CAM-3", title: "Optimize Database Queries for Performance", tag: ["Feature Request"], userId: "usr-2", status: "In progress", priority: 1 },
      { id: "CAM-4", title: "Implement Email Notification System", tag: ["Feature Request"], userId: "usr-1", status: "In progress", priority: 3 },
      { id: "CAM-5", title: "Enhance Search Functionality", tag: ["Feature Request"], userId: "usr-5", status: "In progress", priority: 0 },
    ],
    users: [
      { id: "usr-1", name: "Anoop Sharma", available: false },
      { id: "usr-2", name: "Yogesh", available: true },
      { id: "usr-3", name: "Shankar Kumar", available: true },
      { id: "usr-4", name: "Ramesh", available: true },
      { id: "usr-5", name: "Suresh", available: true },
    ],
  };
};
