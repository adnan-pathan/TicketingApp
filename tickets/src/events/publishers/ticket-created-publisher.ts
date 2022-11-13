import { Publisher, Subjects, TicketCreatedEvent } from "@ticketingappforadnan/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
