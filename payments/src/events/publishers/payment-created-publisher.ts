import { Subjects, Publisher, PaymentCreatedEvent } from "@ticketingappforadnan/common";

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
