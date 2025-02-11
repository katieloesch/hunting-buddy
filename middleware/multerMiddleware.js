import multer from 'multer';

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'public/uploads');
//   },
//   filename: (req, file, cb) => {
//     const fileName = file.originalname;
//     cb(null, fileName);
//   },
// });

//

// will upload image as buffer using datauri as disk space on render not available with the free version
const storage = multer.memoryStorage();

const upload = multer({ storage });

export default upload;
