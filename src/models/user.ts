import { ApiProperty } from '@nestjs/swagger';
import { CommonModel } from './common';

export class UserModel extends CommonModel {
  @ApiProperty()
  email: string;

  @ApiProperty()
  name?: string;

  constructor(
    props: {
      email: string;
      name?: string;
    } & CommonModel,
  ) {
    super(props);
    const { email, name } = props;
    this.email = email;
    this.name = name;
  }
}

export class OrganizationModel extends CommonModel {
  @ApiProperty()
  domain: string;

  @ApiProperty()
  name: string;

  constructor(
    props: {
      domain: string;
      name: string;
    } & CommonModel,
  ) {
    super(props);
    Object.assign(this, props);
  }
}
