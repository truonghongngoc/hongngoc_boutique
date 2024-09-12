import { Injectable } from '@nestjs/common';
import { Prisma, Organization } from '@prisma/client';
import { PrismaTransaction } from '../libs/prisma';

@Injectable()
export class OrganizationsRepository {
  constructor() {}

  async findMany(
    prisma: PrismaTransaction,
    params: {
      skip?: number;
      take?: number;
      cursor?: Prisma.OrganizationWhereUniqueInput;
      where?: Prisma.OrganizationWhereInput;
      orderBy?: Prisma.OrganizationOrderByWithRelationInput;
    },
  ): Promise<Organization[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return prisma.organization.findMany({
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
      where: Prisma.OrganizationWhereInput;
    },
  ): Promise<Organization | null> {
    return prisma.organization.findFirst({
      where: params.where,
    });
  }

  async create(
    prisma: PrismaTransaction,
    data: Prisma.OrganizationCreateInput,
  ): Promise<Organization> {
    return prisma.organization.create({
      data,
    });
  }

  async update(
    prisma: PrismaTransaction,
    params: {
      where: Prisma.OrganizationWhereUniqueInput;
      data: Prisma.OrganizationUpdateInput;
    },
  ): Promise<Organization> {
    const { where, data } = params;
    return prisma.organization.update({
      data,
      where,
    });
  }

  async upsert(
    prisma: PrismaTransaction,
    params: {
      where: Prisma.OrganizationWhereUniqueInput;
      update: Prisma.OrganizationUpdateInput;
      create: Prisma.OrganizationCreateInput;
    },
  ): Promise<Organization> {
    const { where, update, create } = params;
    return prisma.organization.upsert({
      create: create,
      update: update,
      where,
    });
  }

  async remove(
    prisma: PrismaTransaction,
    where: Prisma.OrganizationWhereUniqueInput,
  ): Promise<Organization> {
    return prisma.organization.delete({
      where,
    });
  }
}
