/* eslint no-console: 0 */
const s3 = require('s3');

// Get Env Vars
require('dotenv').config();

const Uploader = new Promise((resolve, reject) => {
  const client = s3.createClient({
    maxAsyncS3: 20, // this is the default
    s3RetryCount: 3, // this is the default
    s3RetryDelay: 1000, // this is the default
    multipartUploadThreshold: 20971520, // this is the default (20 MB)
    multipartUploadSize: 15728640, // this is the default (15 MB),
    s3Options: {
      accessKeyId: process.env.AWS_S3_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_S3_SECRET_ACCESS_KEY,
      region: process.env.AWS_S3_REGION,
      sslEnabled: true
    },
  });
  const uploader = client.uploadDir({
    localDir: 'build/',
    deleteRemoved: true,
    signatureVersion: 'v4',
    s3Params: {
      Bucket: process.env.AWS_S3_BUCKET,
      // Prefix: "some/remote/dir/",
    },
  });
  uploader.on('error', (err) => {
    console.error('Unable to sync:', err.stack);
    reject();
  });
  uploader.on('progress', () => {
    console.log('Progress ...', uploader.progressAmount, uploader.progressTotal);
  });
  uploader.on('end', () => {
    console.log('Done Uploading Success.');
    resolve();
  });
});

module.exports = Uploader;
