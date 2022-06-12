class File_Crypto {
    constructor(pkey) {
        this.pkey = pkey;
    }
    static convertWordArrayToUint8Array(wordArray) {
        var arrayOfWords = wordArray.hasOwnProperty("words")
            ? wordArray.words
            : [];
        var length = wordArray.hasOwnProperty("sigBytes")
            ? wordArray.sigBytes
            : arrayOfWords.length * 4;
        var uInt8Array = new Uint8Array(length),
            index = 0,
            word,
            i;
        for (i = 0; i < length; i++) {
            word = arrayOfWords[i];
            uInt8Array[index++] = word >> 24;
            uInt8Array[index++] = (word >> 16) & 0xff;
            uInt8Array[index++] = (word >> 8) & 0xff;
            uInt8Array[index++] = word & 0xff;
        }
        return uInt8Array;
    }

    //Copied from: https://stackoverflow.com/questions/60520526/aes-encryption-and-decryption-of-files-using-crypto-js
    encrypt(file) {
        return new Promise((resolve, reject) => {
            var reader = new FileReader();
            reader.onload = () => {
                var wordArray = CryptoJS.lib.WordArray.create(reader.result); // Convert: ArrayBuffer -> WordArray
                var hexString = CryptoJS.enc.Hex.stringify(wordArray);
                var encrypted = CryptoJS.AES.encrypt(
                    hexString,
                    this.pkey
                ).toString(); // Encryption: I: WordArray -> O: -> Base64 encoded string (OpenSSL-format)

                console.log("reader length = " + reader.result.byteLength);
                console.log("wordarray words = " + wordArray.words.byteLength);
                console.log("str length = " + hexString.length);
                console.log("enc length = " + encrypted.length);

                var fileEnc = new File([encrypted], file.name + ".enc", {
                    type: file.type,
                }); // Create blob from string
                resolve(fileEnc);
            };
            reader.onerror = reject;
            reader.readAsArrayBuffer(file);
        });
    }

    decrypt(file) {
        var reader = new FileReader();
        reader.onload = () => {
            var decrypted = CryptoJS.AES.decrypt(reader.result, this.pkey); // Decryption: I: Base64 encoded string (OpenSSL-format) -> O: WordArray
            var typedArray = convertWordArrayToUint8Array(decrypted); // Convert: WordArray -> typed array

            var fileDec = new Blob([typedArray]); // Create blob from typed array

            var a = document.createElement("a");
            var url = window.URL.createObjectURL(fileDec);
            var filename = file.name.substr(0, file.name.length - 4) + ".dec";
            a.href = url;
            a.download = filename;
            a.click();
            window.URL.revokeObjectURL(url);
            return file;
        };
        reader.readAsText(file);
    }
}

export default File_Crypto;
