import { Publisher, Subjects, TicketUpdatedEvent } from '@mslearning/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
