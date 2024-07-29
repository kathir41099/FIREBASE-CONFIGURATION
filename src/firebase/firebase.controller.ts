import { Controller, Post, Body } from '@nestjs/common';
import { FirebaseService } from './firebase.service';
import * as admin from 'firebase-admin';

@Controller('messages')
export class FirebaseController {
  constructor(private readonly firebaseService: FirebaseService) {}

  @Post('send')
  async sendMessage(
    @Body() body: { token: string; payload: admin.messaging.MessagingPayload },
  ) {
    const { token, payload } = {
      token:
        'egRJB7dlTOGLIuWTwR1T7O:APA91bGO-FC4gVisw5qTPMn-8yhohPxf5OvZuJIdCedeLVhLd7DP9n8enQu7BkE6EVkeETb2apbG4ww6LePDCPQ6ZcR9Z2-4U6gHG_olGrOouvIqPpaXrYEzKeIW0o1byJgpm4qgg5gz',
      payload: {
        notification: {
          title: 'Test Message',
          body: 'This is a test message',
        },
      },
    };
    return this.firebaseService.sendMessage(token, payload);
  }
}
