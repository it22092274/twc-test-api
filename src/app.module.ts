/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { ContactsModule } from './contacts/contacts.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://root:root@test.lvd7n.mongodb.net/?retryWrites=true&w=majority&appName=test'),
    AuthModule,
    ContactsModule,
  ],
})
export class AppModule {}
