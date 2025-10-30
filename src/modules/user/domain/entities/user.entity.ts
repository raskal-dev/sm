export class UserEntity {
  public readonly id: string;
  public lastName: string;
  public email: string;
  public readonly createdAt: Date;
  public readonly updatedAt: Date;
  public isActive: boolean;
  public firstName?: string;
  public tel?: string;
  public address?: string;
  public image?: string;
  public passwordHash?: string;

  constructor(data: {
    id: string;
    lastName: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
    isActive: boolean;
    firstName?: string | null;
    tel?: string | null;
    address?: string | null;
    image?: string | null;
    passwordHash?: string | null;
  }) {
    this.id = data.id;
    this.lastName = data.lastName;
    this.email = data.email;
    this.createdAt = data.createdAt;
    this.updatedAt = data.updatedAt;
    this.isActive = data.isActive;

    this.firstName = data.firstName ?? undefined;
    this.tel = data.tel ?? undefined;
    this.address = data.address ?? undefined;
    this.image = data.image ?? undefined;
    this.passwordHash = data.passwordHash ?? undefined;
  }
}
