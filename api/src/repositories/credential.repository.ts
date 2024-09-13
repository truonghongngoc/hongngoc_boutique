import { Injectable } from '@nestjs/common';
import { Prisma, Credential } from '@prisma/client';
import { PrismaTransaction } from '../libs/prisma';

@Injectable()
export class CredentialsRepository {
  constructor() {}

  async findMany(
    prisma: PrismaTransaction,
    params: {
      skip?: number;
      take?: number;
      cursor?: Prisma.CredentialWhereUniqueInput;
      where?: Prisma.CredentialWhereInput;
      orderBy?: Prisma.CredentialOrderByWithRelationInput;
    },
  ): Promise<Credential[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return prisma.credential.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async findOne(
    prisma: PrismaTransaction,
    params: {
      where: Prisma.CredentialWhereInput;
    },
  ): Promise<Credential | null> {
    return prisma.credential.findFirst({
      where: params.where,
    });
  }

  async create(
    prisma: PrismaTransaction,
    data: Prisma.CredentialCreateInput,
  ): Promise<Credential> {
    return prisma.credential.create({
      data,
    });
  }

  async update(
    prisma: PrismaTransaction,
    params: {
      where: Prisma.CredentialWhereUniqueInput;
      data: Prisma.CredentialUpdateInput;
    },
  ): Promise<Credential> {
    const { where, data } = params;
    return prisma.credential.update({
      data,
      where,
    });
  }

  async remove(
    prisma: PrismaTransaction,
    where: Prisma.CredentialWhereUniqueInput,
  ): Promise<Credential> {
    return prisma.credential.delete({
      where,
    });
  }
}
