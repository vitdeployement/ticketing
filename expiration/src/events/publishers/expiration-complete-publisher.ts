import { Subjects, Publisher, ExpirationCompleteEvent } from '@mslearning/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}