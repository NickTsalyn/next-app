import axios from "axios";
import { notFound } from "next/navigation";
import React from "react";

export const dynamicParams = true;

export async function generateStaticParams() {
  const res = await axios.get("http://localhost:4000/tickets/");
  const tickets = await res.data;

  return tickets.map((ticket) => ({
    id: ticket.id,
  }));
}

async function getTicket(id) {
  try {
    const response = await axios.get("http://localhost:4000/tickets/" + id, {
      next: {
        revalidate: 60, // use 0 to opt out of using cache
      },
    });
    return response.data;
  } catch {
    notFound();
  }
}

export default async function TicketDetails({ params }) {
  const ticket = await getTicket(params.id);

  return (
    <main>
      <nav>
        <h2>Ticket Details</h2>
      </nav>
      <div className="card">
        <h3>{ticket.title}</h3>
        <small>Created by {ticket.user_email}</small>
        <p>{ticket.body}</p>
        <div className={`pill ${ticket.priority}`}>{ticket.priority} priority</div>
      </div>
    </main>
  );
}
