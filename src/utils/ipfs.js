import {create as ipfsHttpClient} from 'ipfs-http-client';

const projectId = "2F4fMl63JKTNXBaEVSLkEP84uCy";
const projectSecret = "d3502f20a0c429845938a95a1a6cc677";
const subDomain = "offero"
const auth ='Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64');

const FileUpload = async (file) => {
    const client = await ipfsHttpClient({
        host: 'ipfs.infura.io',
        port: 5001,
        protocol: 'https',
        headers:{
            authorization: auth,
        },
    });
  
 //   ipfs.pin.add('QmeGAVddnBSnKc1DLE7DLV9uuTqo5F7QbaveTjr45JUdQn').then((res) => {
 //     console.log(res);
 // });

    const UploadtoIPFS = async (file) => {
        const subdomain = 'https://offero.infura-ipfs.io';
        try {
          console.log("client", client);
         const added = await client.add({ content: file });
         console.log("added", added);
         const URL = `${subdomain}/ipfs/${added.path}`;
         console.log("URL", URL)
         return URL;
       } catch (error) {
         console.log('Error uploading file to IPFS.', error);
       }
    };

    const result =  await UploadtoIPFS(file);
    console.log('result', result);
    return result;
  };


export default FileUpload;

//const FileUpload = async (file) => {
//    const ipfs = create('https://ipfs.infura.io:5001/api/v0');
//    try {
//        var ipfsresult = await ipfs.add(file);
//        return `https://ipfs.infura.io/ipfs/${ipfsresult.path}`;
//    } catch (err) {
//        return false;
//    }
//};

