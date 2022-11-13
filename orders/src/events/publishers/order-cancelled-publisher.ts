import { Subjects, Publisher, OrderCancelledEvent } from "@ticketingappforadnan/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
