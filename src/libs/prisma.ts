import { Prisma } from '@prisma/client';
import { PrismaService } from '../services/prisma.service';

export type PrismaTransaction = PrismaService;

export const prisma = new PrismaService();

export async function transaction<R>(
  fn: (prismaTransaction: PrismaService) => Promise<R>,
) {
  try {
    return await prisma.$transaction(fn, {
      isolationLevel: Prisma.TransactionIsolationLevel.Serializable, // optional, default defined by database configuration
      maxWait: 5000, // default: 2000
      timeout: 10000, // default: 5000
    });
  } catch (e) {
    console.error('ERROR_TRANSACTION', e);

    throw new Error('ERROR_TRANSACTION');
  }
}
