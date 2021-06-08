import { Publisher, OrderCreatedEvent, Subjects } from '@mslearning/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
