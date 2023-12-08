// First Image
import { create } from 'kubo-rpc-client';
import fs from 'fs';
// import { uploadFileToIPFS, uploadJSONToIPFS } from './ipfs-uploader.js'

// connect to ipfs daemon API server
const ipfs = create('http://43.129.194.130:5001');

// Second Image
export async function uploadFileToIPFS(filePath) {
    const file = fs.readFileSync(filePath);
    const result = await ipfs.add({ path: filePath, content: file });
    console.log(result);
    return result;
}

export async function uploadJSONToIPFS(json) {
    const result = await ipfs.add(JSON.stringify(json));
    return result;
}

// Usage example
uploadFileToIPFS('files/Untitled.png');
