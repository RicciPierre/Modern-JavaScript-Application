function convert() {
    document.querySelector("#HeroImage").addEventListener("change",(e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
    
        reader.onloadend = () => {
            image = reader.result.replace(/^data:image\/[a-z]+;base64,/, ""); // strip off the data: url prefix to get just the base64-encoded bytes from  https://stackoverflow.com/questions/38633061/how-can-i-strip-the-dataimage-part-from-a-base64-string-of-any-image-type-in-ja
        };
        reader.readAsDataURL(file)
    });
}

export { convert }