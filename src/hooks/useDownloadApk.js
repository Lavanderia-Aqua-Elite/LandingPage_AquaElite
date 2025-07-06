// Exporta y crea el hook
export default function useDownloadApk(filename = "myapp.apk") {
    const download = () => {
        const apkUrl = `/${filename}`;
        const a = document.createElement("a");
        a.href = apkUrl;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };

    return download;
}
