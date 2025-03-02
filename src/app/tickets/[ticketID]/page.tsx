export default async function TicketDetails({
  params,
}: {
  params: Promise<{ ticketID: string }>;
}) {
  const ticketID = (await params).ticketID;
  return (
    <div>
      <h1>Ticket {ticketID}</h1>
    </div>
  );
}
