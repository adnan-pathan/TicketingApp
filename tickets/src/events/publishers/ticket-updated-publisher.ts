import { Publisher, Subjects, TicketUpdatedEvent } from "@ticketingappforadnan/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
