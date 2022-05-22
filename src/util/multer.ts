import { Request } from 'express';
import multer from 'multer';
import * as path from 'path';

type DestinationCallback = (error: Error | null, destination: string) => void;
type FileNameCallback = (error: Error | null, filename: string) => void;

const storage = multer.diskStorage({
  destination(
    req: Request,
    file: Express.Multer.File,
    done: DestinationCallback
  ) {
    done(null, 'src/public/upload');
  },

  filename(req: Request, file: Express.Multer.File, done: FileNameCallback) {
    const ext = path.extname(file.originalname);
    const fileName = `${path.basename(
      file.originalname,
      ext
    )}_${Date.now()}${ext}`;
    done(null, fileName);
  },
});

const limits = { fileSize: 10 * 1024 * 1024 };

const multerConfig = {
  storage,
  limits,
};

const upload = multer(multerConfig);
export default upload;
