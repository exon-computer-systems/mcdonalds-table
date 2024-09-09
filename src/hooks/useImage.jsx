const useImage = (filepath) =>
    new URL(`../assets/${filepath}`, import.meta.url).href;

export default useImage;
