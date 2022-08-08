import { Injectable } from '@nestjs/common';
import { MessagesRepository } from './message.repository';
@Injectable()
export class MessagesService {
  constructor(public messagesRepo: MessagesRepository) {}

  findOne = async (id: string) => {
    return await this.messagesRepo.findOne(id);
  };

  create = async (content: string) => {
    return await this.messagesRepo.create(content);
  };

  findAll = async () => {
    return await this.messagesRepo.findAll();
  };
}
