import { IsNotEmpty, IsNumber } from "class-validator";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Transform, TransformFnParams } from "class-transformer";
import { Categoria } from "../../categoria/entities/categoria.entity";

@Entity({ name: 'tb_postagens' })
export class Produto {

    @PrimaryGeneratedColumn() 
    id: number;

    @Transform(({ value }: TransformFnParams) => value?.trim())
    @IsNotEmpty()
    @Column({ length: 100, nullable: false}) 
    nome: string;

    @IsNumber({ maxDecimalPlaces: 2})
    @IsNotEmpty()
    @Column({ type: "decimal", precision: 10, scale: 2, nullable: false })
    preco: number;

    @Column({length: 5000})
    foto: string;

    @ManyToOne(() => Categoria, (categoria) => categoria.produto, {
        onDelete: "CASCADE" 
    })
    categoria: Categoria;

}