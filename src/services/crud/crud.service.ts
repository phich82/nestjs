import { Injectable } from '@nestjs/common';
import { Crud } from 'src/contracts/Crud';

@Injectable()
export class CrudService {
    private readonly cruds: Crud[] = [];

    search(): Crud[] {
        return this.cruds;
    }

    create(crud: Crud): boolean {
        this.cruds.push(crud);
        return true;
    }

    find(id: number): Crud {
        const crud = this.cruds.filter((crud) => crud.id === id);
        if (crud.length > 0) {
            return crud.pop();
        }
        return null;
    }
}
