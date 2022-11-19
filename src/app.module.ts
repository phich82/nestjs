import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatController } from './controllers/cat/cat.controller';
import { CrudController } from './controllers/crud/crud.controller';
import { CrudService } from './services/crud/crud.service';

@Module({
  imports: [],
  controllers: [AppController, CatController, CrudController],
  providers: [AppService, CrudService],
})
export class AppModule {}
