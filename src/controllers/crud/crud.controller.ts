import { Controller, Get, Param, Query } from '@nestjs/common';
import { CrudService } from './../../services/crud/crud.service';
import { Crud } from './../../contracts/Crud';

@Controller('cruds')
export class CrudController {

    constructor(private crudService: CrudService) {
        //
    }

    @Get()
    index(@Query() query: any): Crud[] {
        return this.crudService.search();
    }

    @Get(':id')
    find(@Param('id') id: number) {
        return this.crudService.find(id);
    }
}
