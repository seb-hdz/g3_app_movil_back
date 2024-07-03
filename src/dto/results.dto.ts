import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';
import { Scan } from 'src/types/scan.types';

export class CreateResultDTO {
  @IsString()
  @IsNotEmpty()
  scanId: Scan['id'];

  @IsString()
  @IsNotEmpty()
  scanUrl: string;

  @IsBoolean()
  @IsNotEmpty()
  hasCancer: boolean;
}

export class UpdateResultDTO {
  @IsBoolean()
  @IsNotEmpty()
  hasCancer: boolean;
}
