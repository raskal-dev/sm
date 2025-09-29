import { UserEntity } from '../entities/user.entity';

export interface IUserRepository {
  create(user: UserEntity): Promise<UserEntity>;
  findAll(): Promise<UserEntity[]>;
  findById(id: string): Promise<UserEntity | null>;
  update(user: UserEntity): Promise<UserEntity>;
  delete(id: string): Promise<void>;
}
