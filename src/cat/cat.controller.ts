import { Controller, Get, Post, Param } from '@nestjs/common';
import { CatService } from './cat.service';

@Controller('cat')
export class CatController {
constructor(private readonly catService: CatService) {}

  @Get()
  findAll(@Param() x) {
    return this.catService.findAll();
  }

  @Post()
  ins() {
    return this.catService.insert();
  }
}
