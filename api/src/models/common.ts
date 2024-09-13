import { ApiProperty } from '@nestjs/swagger';

export type CommonModelProps = {
  id?: number;
  createdAt?: Date;
  updatedAt?: Date;
};

export class CommonModel {
  @ApiProperty()
  id?: number;

  @ApiProperty()
  createdAt?: Date;

  @ApiProperty()
  updatedAt?: Date;

  constructor(props: CommonModelProps) {
    const { id, createdAt, updatedAt } = props;

    this.id = id;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
