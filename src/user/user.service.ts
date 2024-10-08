/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './schemas/user.schema';
import { CreateUserDto } from '../auth/dto/auth.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const newUser = new this.userModel(createUserDto);
    return newUser.save(); // Hashing will be handled by the pre-save hook
  }

  async findByEmail(email: string): Promise<User | null> {
    // Ensure the returned user is typed correctly
    return this.userModel.findOne({ email }).lean() as Promise<User | null>; // Use lean() to return plain object
  }
}
