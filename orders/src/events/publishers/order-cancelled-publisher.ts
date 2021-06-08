import { Subjects, Publisher, OrderCancelledEvent } from '@mslearning/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
