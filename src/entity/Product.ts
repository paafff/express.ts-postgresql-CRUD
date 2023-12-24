import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class products {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  price!: number;

  @Column()
  image!: string; // Beri tanda "!" untuk menandakan bahwa nilai akan diinisialisasi nanti
}
