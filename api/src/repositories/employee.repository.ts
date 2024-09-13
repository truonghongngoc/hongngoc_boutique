import { Injectable } from '@nestjs/common';
import { Prisma, Employee } from '@prisma/client';
import { PrismaTransaction } from '../libs/prisma';

@Injectable()
export class EmployeesRepository {
  constructor() {}

  async findMany(
    prisma: PrismaTransaction,
    params: {
      skip?: number;
      take?: number;
      cursor?: Prisma.EmployeeWhereUniqueInput;
      where?: Prisma.EmployeeWhereInput;
      orderBy?: Prisma.EmployeeOrderByWithRelationInput;
    },
  ): Promise<Employee[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return prisma.employee.findMany({
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
      where: Prisma.EmployeeWhereInput;
    },
  ): Promise<Employee | null> {
    return prisma.employee.findFirst({
      where: params.where,
    });
  }

  async create(
    prisma: PrismaTransaction,
    data: Prisma.EmployeeCreateInput,
  ): Promise<Employee> {
    return prisma.employee.create({
      data,
    });
  }

  async update(
    prisma: PrismaTransaction,
    params: {
      where: Prisma.EmployeeWhereUniqueInput;
      data: Prisma.EmployeeUpdateInput;
    },
  ): Promise<Employee> {
    const { where, data } = params;
    return prisma.employee.update({
      data,
      where,
    });
  }

  async upsert(
    prisma: PrismaTransaction,
    params: {
      where: Prisma.EmployeeWhereUniqueInput;
      update: Prisma.EmployeeUpdateInput;
      create: Prisma.EmployeeCreateInput;
    },
  ): Promise<Employee> {
    const { where, update, create } = params;
    return prisma.employee.upsert({
      create: create,
      update: update,
      where,
    });
  }

  async remove(
    prisma: PrismaTransaction,
    where: Prisma.EmployeeWhereUniqueInput,
  ): Promise<Employee> {
    return prisma.employee.delete({
      where,
    });
  }
}
