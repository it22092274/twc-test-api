/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Contact } from './Schemas/contact.schema';
import { CreateContactDto, UpdateContactDto } from './dto/contact.dto';

@Injectable()
export class ContactsService {
  constructor(@InjectModel(Contact.name) private contactModel: Model<Contact>) {}

  async createContact(createContactDto: CreateContactDto): Promise<Contact> {
    const newContact = new this.contactModel(createContactDto);
    return newContact.save();
  }

  async findAllContacts(): Promise<Contact[]> {
    return this.contactModel.find().exec();
  }

  async updateContact(id: string, updateContactDto: UpdateContactDto): Promise<Contact> {
    const contact = await this.contactModel.findByIdAndUpdate(id, updateContactDto, {
      new: true,
    });

    if (!contact) {
      throw new NotFoundException(`Contact with ID ${id} not found`);
    }

    return contact;
  }

  async deleteContact(id: string): Promise<Contact> {
    const contact = await this.contactModel.findByIdAndDelete(id);
    if (!contact) {
      throw new NotFoundException(`Contact with ID ${id} not found`);
    }
    return contact;
  }
}
