import path from "path";
import express from "express";
import multer from "multer";
import sharp from "sharp";

const router = express.Router();

const storage = multer.diskStorage({
    destination(req, file, cb){
        cb(null,'uploads/');
    },
    filename(req, file, cb){
        cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
    }
});

function checkFileType(file, cb){
    const filetypes = /jpg|jpeg|png/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);
    if(extname && mimetype){
        return cb(null, true);
    } else {
        cb('Images only!');
    }
}

const upload = multer({
    storage,
})

router.post('/', upload.single('image'), async (req,res) => {
    try {
        if (!req.file) {
            return res.status(400).send('No file uploaded.');
        }

        const width = 640;
        const height = 510;

        await sharp(req.file.path)
            .resize({
                width,
                height,
                fit: 'fill',
                position: 'center'
            })
            .toFile(`uploads/downscaled-${req.file.filename}`);

        res.send({
            message: 'Image uploaded',
            image: `/uploads/downscaled-${req.file.filename}`
        });
    } catch (err) {
        console.error(err);
        res.status(500).send('An error occurred during image processing.');
    }
    
})

export default router;