import { Scan } from './scan.types';

export interface Result {
  id: string;
  scanId: Scan['id'];
  hasCancer: boolean;
  scanUrl: string;
}
