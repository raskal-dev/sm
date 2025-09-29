import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserRepository } from '../repositories/user.repository';
import { UserEntity } from '../../domain/entities/user.entity';
import { CreateUserDto } from '../../application/dtos/create-user.dto';
import { UpdateUserDto } from '../../application/dtos/update-user.dto';

@ApiTags('Users')
@Controller('users')
export class UserController {
  constructor(private readonly userRepository: UserRepository) {}

  @Post()
  @ApiResponse({
    status: 201,
    description: 'User created successfully',
    type: UserEntity,
  })
  async create(@Body() dto: CreateUserDto) {
    return this.userRepository.create(dto as UserEntity);
  }

  @Get()
  @ApiResponse({
    status: 200,
    description: 'List of users',
    type: [UserEntity],
  })
  async findAll() {
    return this.userRepository.findAll();
  }

  @Get(':id')
  @ApiResponse({ status: 200, description: 'User by id', type: UserEntity })
  async findOne(@Param('id') id: string) {
    return this.userRepository.findById(id);
  }

  @Patch(':id')
  @ApiResponse({ status: 200, description: 'User updated', type: UserEntity })
  async update(@Param('id') id: string, @Body() dto: UpdateUserDto) {
    const existingUser = await this.userRepository.findById(id);
    if (!existingUser) {
      throw new Error('User not found');
    }

    const updatedUser = new UserEntity({
      ...existingUser,
      ...dto,
      updatedAt: new Date(),
    });

    return this.userRepository.update(updatedUser);
  }

  @Delete(':id')
  @ApiResponse({ status: 200, description: 'User deleted' })
  async remove(@Param('id', new ParseUUIDPipe()) id: string) {
    const user = await this.userRepository.findById(id);
    if (!user) {
      throw new Error('User not found');
    }
    return this.userRepository.delete(id);
  }
}
