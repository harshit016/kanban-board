// src/components/KanbanBoardComponent.js
import React, { useEffect, useState } from "react";
import { fetchTickets } from "../services/ticketApi";
import TicketCard from "./TicketCard";
import GroupSelector from "./GroupSelector";
import SortSelector from "./SortSelector";
import "../styles/KanbanBoardStyles.css";

const KanbanBoardComponent = () => {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [grouping, setGrouping] = useState("status");
  const [sorting, setSorting] = useState("priority");

  useEffect(() => {
    const loadTickets = async () => {
      const data = await fetchTickets();
      if (data) {
        setTickets(data.tickets);
        setUsers(data.users);
      }
    };
    loadTickets();
  }, []);

  const groupedTickets = tickets.reduce((acc, ticket) => {
    let groupKey;
    if (grouping === "status") groupKey = ticket.status;
    else if (grouping === "user") {
      const user = users.find((u) => u.id === ticket.userId);
      groupKey = user ? user.name : "Unassigned";
    } else if (grouping === "priority") groupKey = ticket.priority;
    if (!acc[groupKey]) acc[groupKey] = [];
    acc[groupKey].push(ticket);
    return acc;
  }, {});

  const sortedGroups = Object.keys(groupedTickets).sort((a, b) => {
    if (grouping === "priority") return b - a;
    return a.localeCompare(b);
  });

  return (
    <div className="kanban-board">
      {/* Top-right image */}
      {/* <img src="your-image-url.jpg" alt="Top-right" className="top-right-image" /> */}

      <div className="selectors">
        <GroupSelector grouping={grouping} setGrouping={setGrouping} />
        <SortSelector sorting={sorting} setSorting={setSorting} />
      </div>

      <div className="columns">
        {sortedGroups.map((group) => (
          <div key={group} className="column">
            <h3>{group}</h3>
            {groupedTickets[group]
              .sort((a, b) =>
                sorting === "priority"
                  ? b.priority - a.priority
                  : a.title.localeCompare(b.title)
              )
              .map((ticket) => (
                <TicketCard key={ticket.id} ticket={ticket} />
              ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default KanbanBoardComponent;
