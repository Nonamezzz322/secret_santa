export const b64toBlob = (arg, sliceSize) => {
  const block = arg.split(';');
  const contentType = block[0].split(':')[1] || '';
  const b64Data = block[1].split(',')[1];

  const size = sliceSize || 512;

  const byteCharacters = atob(b64Data);
  const byteArrays = [];

  for (let offset = 0; offset < byteCharacters.length; offset += size) {
    const slice = byteCharacters.slice(offset, offset + size);

    const byteNumbers = new Array(slice.length);
    for (let i = 0; i < slice.length; i += 1) {
      byteNumbers[i] = slice.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);

    byteArrays.push(byteArray);
  }
  const blob = new Blob(byteArrays, { type: contentType });

  return blob;
};
