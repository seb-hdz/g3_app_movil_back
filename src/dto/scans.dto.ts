import { IsNotEmpty, IsString } from 'class-validator';

export class CreateScanDTO {
  @IsString()
  @IsNotEmpty()
  imageData64: string;
}
