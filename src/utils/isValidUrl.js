function isValidUrl(input) {
      const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
      return urlRegex.test(input);
  }

export default isValidUrl;