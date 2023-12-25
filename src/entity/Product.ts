import { Column, Entity, Generated, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class products {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  @Generated('uuid')
  uuid!: string;

  @Column()
  name!: string;

  @Column()
  price!: number;

  @Column({ default: 'zero.png' })
  imageName!: string;

  @Column({ default: `${process.env.APP_DOMAIN}/src/zero.png` })
  imageURL!: string; // Beri tanda "!" untuk menandakan bahwa nilai akan diinisialisasi nanti
}
