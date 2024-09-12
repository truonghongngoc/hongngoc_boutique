import { Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { PrismaTransaction } from '../libs/prisma';

@Injectable()
export class UsersRepository {
  constructor() {}

  async findMany(
    prisma: PrismaTransaction,
    params: {
      skip?: number;
      take?: number;
      cursor?: Prisma.UserWhereUniqueInput;
      where?: Prisma.UserWhereInput;
      orderBy?: Prisma.UserOrderByWithRelationInput;
    },
  ): Promise<User[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return prisma.user.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async findOne(
    prisma: PrismaTransaction,
    params: { id: number },
  ): Promise<User | null> {
    return prisma.user.findFirst({
      where: {
        id: params.id,
      },
    });
  }

  async create(
    prisma: PrismaTransaction,
    data: Prisma.UserCreateInput,
  ): Promise<User> {
    return prisma.user.create({
      data,
    });
  }

  async update(
    prisma: PrismaTransaction,
    params: {
      where: Prisma.UserWhereUniqueInput;
      data: Prisma.UserUpdateInput;
    },
  ): Promise<User> {
    const { where, data } = params;
    return prisma.user.update({
      data,
      where,
    });
  }

  async remove(
    prisma: PrismaTransaction,
    where: Prisma.UserWhereUniqueInput,
  ): Promise<User> {
    return prisma.user.delete({
      where,
    });
  }
}
