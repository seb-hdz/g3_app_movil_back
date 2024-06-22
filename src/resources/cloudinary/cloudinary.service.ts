// cloudinary.service.ts

import { Injectable } from '@nestjs/common';
import {
  UploadApiErrorResponse,
  UploadApiResponse,
  v2 as cloudinary,
} from 'cloudinary';

@Injectable()
export class CloudinaryService {
  async uploadScan(
    imageData64: string,
  ): Promise<UploadApiResponse | UploadApiErrorResponse> {
    try {
      return await cloudinary.uploader.unsigned_upload(
        `data:image/png;base64,${imageData64.replace('data:image/png;base64,', '')}`,
        process.env.CLOUDINARY_PRESET,
      );
    } catch (e) {
      console.log({ e });
    }
  }
}
