/* eslint-disable prettier/prettier */
export class CreateContactDto {
    fullName: string;
    email: string;
    phoneNumber: string;
    gender: string;
    userid: string;
  }
  
  export class UpdateContactDto {
    fullName?: string;
    email?: string;
    phone?: string;
    gender?: string;
    userid: string
  }
  