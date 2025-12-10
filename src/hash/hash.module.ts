// src/hash/hash.module.ts
import { Module } from '@nestjs/common';
import { HashService } from './hash.service';

@Module({
  providers: [HashService],
  exports: [HashService], // Export so other modules can use it
})
export class HashModule {}
