const Jimp = require('jimp');

async function run() {
    try {
        const img = await Jimp.read('/Users/abhishekhulage/.gemini/antigravity/brain/f8e70ad2-f298-4f88-bf2c-e91e89529c35/developer_favicon_caricature_1773855111795.png');
        const w = img.bitmap.width;
        const h = img.bitmap.height;
        const r = Math.min(w, h) / 2 - 2; // radius with a tiny 2px padding for alias edge

        img.scan(0, 0, w, h, function(x, y, idx) {
            const dx = x - w / 2;
            const dy = y - h / 2;
            // If distance from center is greater than radius, make it transparent
            if (dx * dx + dy * dy > r * r) {
                this.bitmap.data[idx + 3] = 0; // Alpha channel
            }
        });

        await img.writeAsync('/Users/abhishekhulage/Projects/rohan-hulage.github.io/public/favicon.png');
        console.log('Successfully created circular transparent favicon.');
    } catch (err) {
        console.error('Error masking image:', err);
    }
}

run();
