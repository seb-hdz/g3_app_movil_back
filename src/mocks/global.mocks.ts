import { Result } from 'src/types/result.types';
import { Scan } from 'src/types/scan.types';
import { User } from 'src/types/user.types';

export const buildId = (id?: string): string => id ?? crypto.randomUUID();

export const buildUser = (overrides: Partial<User> = {}): User => ({
  id: buildId(),
  name: 'User',
  email: 'email@example.com',
  password: 'password',
  age: 25,
  ...overrides,
});

export const buildResult = (overrides: Partial<Result> = {}): Result => ({
  id: buildId(),
  scanId: buildId(),
  hasCancer: true,
  scanUrl: 'https://picsum.photos/256',
  ...overrides,
});

export const buildScan = (overrides: Partial<Scan> = {}): Scan => ({
  id: buildId(),
  userId: buildId(),
  url: 'https://picsum.photos/256',
  createdAt: new Date(),
  ...overrides,
});
