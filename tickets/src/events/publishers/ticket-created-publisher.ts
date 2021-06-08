import { Publisher, Subjects, TicketCreatedEvent } from '@mslearning/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
