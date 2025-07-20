async function translate(text, from, to, options) {
    const { config, detect, setResult, utils } = options;
    const { http, readBinaryFile, readTextFile, Database, CryptoJS, run, cacheDir, pluginDir, osType } = utils;
    //const { fetch, Body } = http;
    const { tauriFetch: fetch} = utils;
    const {ResponseType} = http;

    const doi = text.trim();
    if (!doi) {
        throw new Error("DOI cannot be empty");
    }
    if (!/^\d{4}\/\S+$/.test(doi)) {
        throw new Error("Invalid DOI format");
    }

    const url = `https://api.crossref.org/works`;
    const fullUrl = `${url}/${doi}/transform/application/x-bibtex`;
    const res = await fetch(fullUrl, 
        {
            method: 'GET',
            responseType: ResponseType.Text, // Ensure we get the response as text,
            timeout: 30
        }
    );

    if (res.ok) {
        let result = res.data;
        if (result && result.trim()) {
            return result.trim();
        } else {
            throw "No BibTeX data returned from CrossRef API";
        }
    } else {
        throw `Http Request Error\nHttp Status: ${res.status}\n${JSON.stringify(res.data)}`;
    }
}
