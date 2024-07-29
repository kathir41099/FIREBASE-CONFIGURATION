import { Injectable, OnModuleInit } from '@nestjs/common';
import * as admin from 'firebase-admin';

@Injectable()
export class FirebaseService implements OnModuleInit {
  constructor() {}

  onModuleInit() {
    admin.initializeApp({
      credential: admin.credential.cert({
        projectId: 'chat-app-8e813',
        privateKey:
          '-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDCAdCkvSpPBH+L\nKAryamu41ylOP+vNPRE8VUl+fW6+f1HwOfhoXsO1shnTGS0fZ8bqe6uo/HLbJOka\n3v6l90vqRGiM2ZxZRjW61hCKxTUqRL/CoE13VhL1lK4a/ss7T6Kz26Oe/Vo3b5CK\nWpwG0rvUO2SAVYPTYQ1X73cxxE/yuuddwtKjMQj887cjWwkwaeYg9vgnoA9J6jIw\nnHK5rO9zx167l5g1DOLRya1bRTCeABIhAPxMx0PZa+G0xt7/BZ/ofDAmGKZumfh8\naKbywTpN49tLNfyzSwg+5nbJH+wWkCULF0QetwOUXwCz4YpEGxJNzViskFNDD1UP\njoGewxVpAgMBAAECggEAD+LjKWI+ESteoE/+mXwiZwfjX393eR5rh2O6eWufAmVd\nmcy9bRp5byru12zj14MBdFj9JQDLDOvYVLV257M42a2RXBtDpMHNi4eU4jAk2tm3\nVCIZRdDcC5UJrrc3gBtUyOKO4ul/FjQCA3pI9XwTGl1krOeTvF7hn1ZCDeaz3z3O\n9KNPhc3x23seygPF/tlJ+jBUJIhjasmmOOn2CYwSgYy4jpeJW9xo+Fx5MbV4aPAp\nfpr9zQoDBhGJviXv45bR2KDKExRUSwf/4PyRI7JSKKiPG6essqsciXO9wSKorxaH\nwuUCjqqlgOMUdsIpqSABC/IqX9xO5iC8kVJcUGpNAQKBgQD/2BH0D+i+AQxIgsG6\nzH/oz2qfXmG6QQDnWQCX4fsfP0cis8/qYCvIcfkgj3TSsSYyEbvThGoyAOsA9r6v\nE05BzgXnONyWQAcEv1fhOB0Lj+DPY0wWaYY/kYPl0nnUXtKF6kvquAEah0jp+urE\npVf2TUd8JVeDnJWg0DkfwDpLQQKBgQDCIBgLSq3w5lfbJWDNFaSjHNJJt+z5/A1U\n7a/ME/ZofgA9x84rRbuLcS5tckRT+8FDde2tA8+UHqXz0JR7H7P1ux7VwNPQSjpf\nDEFyl+pKH/vzKVljqPhFFaa5eDD9U3VDR2WyGN9zrOmQlqKmpZ+iPdv5e58NBhEC\ngH/tXVMIKQKBgEMJRosAsCc49xL4z/I2Kz3BO1rOzCSVa7syoukpGTeyyNza6Jus\n30wCMRjK/f1G1Y9A/koJ5Bl+DBWQkZ4mHNc5OGrBh2sHE8+2ozwsC9A/vtQYXJNy\nyu5VHo5Ve/6daeQU5Bd4ZzGgSQal7GXiPQ4Yaaap0ih2Gu6sIIulPqEBAoGBAK0J\nEIWYJp2xpKRZmASWgy9FtIgzYw+dRYDrcST2slCH580p+bMGsFpmI505GoDFyopI\nZvguimwcOY6v4HozUyT5i027WNK0J32rnfb4RMWX5uvjcqNr7QkfeIKgCQL1znOP\nA64Rj7Q7b+IK86aZwUZL33VtZOOmAal6Qw2gfy+pAoGAJWT/671LT8soX8Z7hUO7\neUFxmqxhWivOzfjBh2lyoSsSkLWNrJIJzbAgWErc6LBiEVxh8LKZltebxM0FLTt+\ncBcw2dIERzQ60X1GMg6c4EY3n1nC5KCF0sVjEIZz0W6fPdXk0mp7bTGm8pc0+yFA\nR4aiBE1AhmT7a+s52Z0grHs=\n-----END PRIVATE KEY-----\n',
        clientEmail:
          'firebase-adminsdk-9ki8e@chat-app-8e813.iam.gserviceaccount.com',
      }),
      // databaseURL: this.configService.get<string>('FIREBASE_DATABASE_URL'),
    });
  }

  getAuth() {
    return admin.auth();
  }

  getFirestore() {
    return admin.firestore();
  }

  getStorage() {
    return admin.storage();
  }

  async sendMessage(token: string, payload: admin.messaging.MessagingPayload) {
    try {
      const response = await admin.messaging().sendToDevice(token, payload);
      return response;
    } catch (error) {
      console.error('Error sending message:', error);
      throw error;
    }
  }
}
