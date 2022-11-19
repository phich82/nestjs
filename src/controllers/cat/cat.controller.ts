import {
    Body,
    Controller,
    Get,
    Header,
    HttpCode,
    Param,
    Post,
    Redirect,
    Req
} from '@nestjs/common';
import { Request } from 'express';
import { Observable, of } from 'rxjs';
import { CreateCatDto } from 'src/models/dtos/CreateCatDto';

@Controller('cats')
export class CatController {
    @Get()
    @Redirect('https://nestjs.com', 301)
    index(@Req() request: Request): string {
        console.log('request => ', request);
        return 'This action returns all cats';
    }

    @Post()
    @Header('Cache-Control', 'none')
    @HttpCode(204)
    store(@Body() params: Body): string {
        console.log('params => ', params);
        return 'This action create a new cat.';
    }

    @Get(':id')
    findOne(@Param() params): string {
        console.log(params.id);
        return `This action returns a #${params.id} cat`;
    }

    @Get(':id/async')
    async findAsync(): Promise<any[]> {
        return [1, 2];
    }

    @Get(':id/observable')
    findAsyncObservable(): Observable<any[]> {
        return of([5, 6, 7]);
    }

    @Post(':id/dto')
    testBody(@Body() body: CreateCatDto): string {
        console.log('body => ', body);
        return 'Test body';
    }
}
