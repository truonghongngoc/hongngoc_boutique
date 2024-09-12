import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AuthModule } from './modules/auth/auth.module';
import { MailerModule } from '@nestjs-modules/mailer';
import { ConfigModule } from '@nestjs/config';
import configuration from 'src/config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
    }),
    MailerModule.forRoot({
      transport: {
        host: 'smtp.gmail.com',
        port: 465, // Port 587 can also be used for TLS
        secure: true, // Set to true if you are using SSL/TLS
        auth: {
          user: 'tienryo.it@gmail.com', // Your Gmail address
          pass: 'lhvy flgq xlzy uggx', // Your Gmail password or App password for 2-step verification
        },
      },
      defaults: {
        from: '"No Reply" <no-reply@gmail.com>', // Default sender name and address
      },
    }),
    AuthModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
