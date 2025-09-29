import { Injectable } from '@nestjs/common';
import { IUserRepository } from '../../domain/interfaces/user-repository.interface';
import { PrismaService } from 'src/core/database/prisma.service';
import { UserEntity } from '../../domain/entities/user.entity';
import { first } from 'rxjs';

@Injectable()
export class UserRepository implements IUserRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(user: UserEntity): Promise<UserEntity> {
    const newUser = await this.prisma.user.create({
      data: {
        id: user.id,
        lastName: user.lastName,
        email: user.email,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
        firstName: user.firstName ?? undefined,
        tel: user.tel ?? undefined,
        address: user.address ?? undefined,
        image: user.image ?? undefined,
      },
    });
    return new UserEntity(newUser);
  }

  async findById(id: string): Promise<UserEntity | null> {
    const user = await this.prisma.user.findUnique({ where: { id } });
    if (!user) return null;
    return new UserEntity({ ...user });
  }

  async findAll(): Promise<UserEntity[]> {
    const users = await this.prisma.user.findMany();
    return users.map((user) => new UserEntity({ ...user }));
  }

  async update(user: UserEntity): Promise<UserEntity> {
    const updateUser = await this.prisma.user.update({
      where: { id: user.id },
      data: user,
    });
    return new UserEntity({
      ...updateUser,
    });
  }

  async delete(id: string): Promise<void> {
    if (!id) throw new Error('User id is required');
    await this.prisma.user.delete({ where: { id } });
  }
}
