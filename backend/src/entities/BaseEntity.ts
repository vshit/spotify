import { PrimaryKey } from '@mikro-orm/core';

export abstract class BaseEntity {
  @PrimaryKey()
  id: number;

  @PrimaryKey()
  createdAt: Date = new Date();

  @PrimaryKey({ onUpdate: () => new Date() })
  updatedAt: Date = new Date();
}
