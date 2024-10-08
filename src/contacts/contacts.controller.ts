/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { CreateContactDto, UpdateContactDto } from './dto/contact.dto';

@Controller('contacts')
export class ContactsController {
  constructor(private contactsService: ContactsService) {}

  @Post()
  createContact(@Body() createContactDto: CreateContactDto) {
    return this.contactsService.createContact(createContactDto);
  }

  @Get()
  findAllContacts() {
    return this.contactsService.findAllContacts();
  }

  @Patch(':id')
  updateContact(
    @Param('id') id: string,
    @Body() updateContactDto: UpdateContactDto,
  ) {
    return this.contactsService.updateContact(id, updateContactDto);
  }

  @Delete(':id')
  deleteContact(@Param('id') id: string) {
    return this.contactsService.deleteContact(id);
  }
}
